
/*
example = {
    "constraints": {
        "tritanium": {"min": 100},
        "pyreite": {"min": 88}
    },
    "variables": {
        "veld": { "isk": 100, "tritanium": 10 },
        "score": { "isk": 100, "tritanium": 7, "pyreite": 10 }
    }, "ints": { "veld": 1,  "score": 1}
};
*/
function calcMinimum(location, model)
{
    let strOut = "";

    solution = solver.Solve(model);
    total = { "sell": 0, "buy": 0,  "volume": 0 };

    strOut += "<div>Ores Calculated<table>";
    for(ore in utilities.ores)
    {
        out = Math.ceil(solution[ore]);
        if(out != 0 && !isNaN(out) && out != undefined)
        {
            try{
                total["sell"] += out*utilities.buySellJita[ore]["sell"];
                total["buy"] += out*utilities.buySellJita[ore]["buy"];
                total["volume"] += out*utilities.buySellJita[ore]["volume"];
            }
            catch { error() }

            for(mins in utilities.minerals) if(model["variables"][ore][utilities.minerals[mins]] != undefined)
                model["constraints"][utilities.minerals[mins]]["tot"] += out*model["variables"][ore][utilities.minerals[mins]];

            strOut += utilities.addRow([ore, utilities.addCommas(out)]);
        }
    }

    strOut += "</table></div><div>Ore Information<table>"
        + utilities.addRow(["Sell Price:", utilities.addCommas(Math.ceil(total["sell"])) + " isk"])
        + utilities.addRow(["Buy Price:", utilities.addCommas(Math.ceil(total["buy"])) + " isk"])
        + utilities.addRow(["Total Volume:", utilities.addCommas(Math.ceil(total["volume"])) + " m^3"])
        + "</table></div><div>Extra Nerdy Information<table>"
        + utilities.addRow(["Mineral", "Needed", "Refined", "Excess"]);
    
    for(mins of utilities.minerals.values())
        strOut += utilities.addRow([
            mins,
            utilities.addCommas(model["constraints"][mins]["min"]),
            utilities.addCommas(model["constraints"][mins]["tot"]),
            utilities.addCommas((model["constraints"][mins]["tot"] - model["constraints"][mins]["min"]))
        ]);
    strOut += "</table></div>";
    
    document.getElementById(location).innerHTML = strOut;
}

let calcMin = {
    // empty model
    model : {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    },

    addOreToModel : function(ore, repro)
    {
        calcMin.model["variables"][ore] = {};
        for(reproOres in utilities.ores[ore])
            this.model["variables"][ore][reproOres] = Math.floor(utilities.ores[ore][reproOres]*repro/100);
        try {
            this.model["variables"][ore]["isk"] = utilities.buySellJita[ore]["sell"];
        }
        catch { error() }
    },
    
    generateFromOptimalOre : function(repro)
    {
        for(mins in utilities.minerals)
        {
            calcMin.model["constraints"][utilities.minerals[mins]] = 
                { "min": utilities.getFromDocument(utilities.minerals[mins] + "MEC", 0), "tot": 0 }
            if(document.getElementById("MECHaveMinerals").checked)
                calcMin.model["constraints"][utilities.minerals[mins]]["min"] -= 
                    utilities.getFromDocument(utilities.minerals[mins] + "MECMinListCheck", 0)
        }

        for(ore in utilities.ores)
        {
            this.addOreToModel(ore,
                (
                    !document.getElementById("MECFilterOres").checked
                    ||
                    document.getElementById(ore + "MECCoreListCheck").checked
                ) ? 
                repro : 0
            );
            if(document.getElementById("MECHaveOres").checked)
            {
                for(mins in utilities.ores[ore]) if(utilities.ores[ore][mins] != undefined)
                {
                    calcMin.model["constraints"][mins]["min"] -= 
                        utilities.getFromDocument(ore + "MECOreListCheck", 0) * utilities.ores[ore][mins] * repro/100
                }
            }
        }

        return calcMin.model;
    },
    
    generateFromBlueprints : function(me, structure, rig, repro, quantity)
    {
        for(ore in utilities.ores)
            this.addOreToModel(ore, 
                (
                    !document.getElementById("ShipFilterOres").checked
                    ||
                    document.getElementById(ore + "ShipCoreListCheck").checked)
                     ? repro : 0
            );

        e = document.getElementById("SelectShip");
        for(mins in utilities.minerals)
        {
            if(utilities.T1Ships[e.options[e.selectedIndex].value] != undefined) 
                amount = 
                    quantity*
                    Math.ceil(
                        utilities.T1Ships[e.options[e.selectedIndex].value][utilities.minerals[mins]]*
                        (1-(me/100))*
                        (1-(structure/100))*
                        (1-(rig/100))
                    );
            else amount = 0;
            
            amount = 
                isNaN(amount) ? 
                    (document.getElementById("ShipHaveMinerals").checked ? utilities.getFromDocument(utilities.minerals[mins] + "ShipMinListCheck", 0) : 0)
                    :
                    amount - (document.getElementById("ShipHaveMinerals").checked ? utilities.getFromDocument(utilities.minerals[mins] + "ShipMinListCheck", 0) : 0);
            
            if(document.getElementById("ShipHaveOres").checked) for(ore in utilities.ores)
                {
                    if(utilities.ores[ore][utilities.minerals[mins]] != undefined)
                    {
                        amount -= 
                            utilities.getFromDocument(ore + "ShipOreListCheck", 0) * utilities.ores[ore][utilities.minerals[mins]] * (isNaN(repro/100) ? 0 : repro/100)
                    }
                };
        
            calcMin.model["constraints"][utilities.minerals[mins]] = 
                { "min": amount, "tot": 0 };
        }
        return calcMin.model;
    },

    generateCapMinerals : function(capme, capstructure, caprig, me, structure, rig, repro, quantity)
    {
        for(ore in utilities.ores)
            this.addOreToModel(ore, 
                (
                    !document.getElementById("CapFilterOres").checked
                    ||
                    document.getElementById(ore + "CapCoreListCheck").checked)
                     ? repro : 0
            );
        
        e = document.getElementById("SelectShipCap");
        neededminerals = { }
        
        for(minerals in utilities.minerals) neededminerals[utilities.minerals[minerals]] = 0;

        if(utilities.capitals[e.options[e.selectedIndex].value] != undefined) 
            for(comps in utilities.capitals[e.options[e.selectedIndex].value])
            {
                for(mins in utilities.capitalComponents[comps])
                    neededminerals[mins] +=
                        Math.ceil(
                            utilities.capitals[e.options[e.selectedIndex].value][comps]
                            *(1-(capme/100))
                            *(1-(capstructure/100))
                            *(1-(caprig/100))
                        )*
                        Math.ceil(
                            utilities.capitalComponents[comps][mins]
                            *(1-(me/100))
                            *(1-(structure/100))
                            *(1-(rig/100))
                        )*
                        Math.ceil(quantity);
            }
        
        for(ore in utilities.ores)
        {
            for(mins in utilities.minerals)
            {
                if(utilities.ores[ore][utilities.minerals[mins]] != undefined)
                {
                    neededminerals[utilities.minerals[mins]] -= utilities.getFromDocument(ore + "CapOreListCheck", 0) * utilities.ores[ore][utilities.minerals[mins]] * (isNaN(repro/100) ? 0 : repro/100);
                }
            }
        }

        for(minName in neededminerals)
        {
            neededminerals[minName] -= (document.getElementById("CapHaveMinerals").checked ? utilities.getFromDocument(minName + "CapMinListCheck", 0) : 0);
            calcMin.model["constraints"][minName] = { "min": neededminerals[minName], "tot": 0 };
        }

        return calcMin.model;
    }
}
