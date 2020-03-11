
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
                total["sell"] += out*utilities.buySell[ore]["sell"];
                total["buy"] += out*utilities.buySell[ore]["buy"];
                total["volume"] += out*utilities.buySell[ore]["volume"];
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
    
    for(mins in utilities.minerals)
        strOut += utilities.addRow([
            utilities.minerals[mins],
            utilities.addCommas(model["constraints"][utilities.minerals[mins]]["min"]),
            utilities.addCommas(model["constraints"][utilities.minerals[mins]]["tot"]),
            utilities.addCommas((model["constraints"][utilities.minerals[mins]]["tot"] - model["constraints"][utilities.minerals[mins]]["min"]))
        ]);
    strOut += "</table></div>";
    
    this.document.getElementById(location).innerHTML = strOut;
}

var calcMin = {
    // empty model
    model : {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    },

    addOreToModel : function(repro)
    {
        calcMin.model["variables"][ore] = {};
        for(reproOres in utilities.ores[ore])
            this.model["variables"][ore][reproOres] = Math.floor(utilities.ores[ore][reproOres]*repro/100);
        try {
            this.model["variables"][ore]["isk"] = utilities.buySell[ore]["sell"];
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
                    utilities.getFromDocument(utilities.minerals[mins] + "Minerals", 0)
        }

        for(ore in utilities.ores)
        {
            if(document.getElementById(ore + "MECCheck").checked)
                this.addOreToModel(repro);

            if(document.getElementById("MECHaveOres").checked)
            {
                for(mins in utilities.ores[ore]) if(utilities.ores[ore][mins] != undefined)
                {
                    calcMin.model["constraints"][mins]["min"] -= 
                        utilities.getFromDocument(ore + "Ores", 0) * utilities.ores[ore][mins]
                }
            }
        }

        return calcMin.model;
    },
    
    generateFromBlueprints : function(me, structure, rig, repro, quantity)
    {
        for(ore in utilities.ores)
            if(document.getElementById(ore + "ShipCheck").checked)
                this.addOreToModel(repro);
        
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
            calcMin.model["constraints"][utilities.minerals[mins]] = 
                { "min": isNaN(amount) ? 0 : amount, "tot": 0 }
        }
        return calcMin.model;
    },

    generateCapMinerals : function(capme, capstructure, caprig, me, structure, rig, repro, quantity)
    {
        for(ore in utilities.ores)
            if(document.getElementById(ore + "CapShipCheck").checked)
                this.addOreToModel(repro);
        
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
                        Math.ceil(quantiy);
            }
        for(minName in neededminerals)
            calcMin.model["constraints"][minName] = 
                { "min": neededminerals[minName], "tot": 0 }

        return calcMin.model;
    }
}