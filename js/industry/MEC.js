
/*
example = {
    "optimize": "isk",
    "opType": "min",
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

    let solution = solver.Solve(model);

    let market = utilities.getMarketDataFromDropdown(location + "Market");
    let total = { "sell": 0, "buy": 0,  "volume": 0 };

    strOut += "<div>Ores Calculated<br /><table class=\"table table-hover\">";

    for(ore in utilities.ores)
    {
        out = Math.ceil(solution[ore]);
        if(out != 0 && !isNaN(out) && out != undefined)
        {
            try {
                total["sell"] += out*market[ore]["sell"];
                total["buy"] += out*market[ore]["buy"];
                total["volume"] += out*market[ore]["volume"];
            }
            catch (e) { console.log(e) }

            for(mins in utilities.minerals) if(model["variables"][ore][utilities.minerals[mins]] != undefined)
                model["constraints"][utilities.minerals[mins]]["tot"] += out*model["variables"][ore][utilities.minerals[mins]];

            strOut += utilities.addRow([ore, utilities.addCommas(out)]);
        }
    }

    strOut += "</table></div><div>Ore Information<table class=\"table table-hover\">"
        + utilities.addRow(["Sell Price:", utilities.addCommas(Math.ceil(total["sell"])) + " ISK"])
        + utilities.addRow(["Buy Price:", utilities.addCommas(Math.ceil(total["buy"])) + " ISK"])
        + utilities.addRow(["Total Volume:", utilities.addCommas(Math.ceil(total["volume"])) + " m^3"])
        + "</table></div><div>Extra Nerdy Information<table class=\"table table-hover\">"
        + utilities.addRow(["Mineral", "Needed", "Refined", "Excess"]);
    
    for(mins of utilities.minerals.values())
        strOut += utilities.addRow([
            mins,
            utilities.addCommas(model["constraints"][mins]["min"]),
            utilities.addCommas(model["constraints"][mins]["tot"]),
            utilities.addCommas((model["constraints"][mins]["tot"] - model["constraints"][mins]["min"]))
        ]);
    strOut += "</table></div>";
    
    document.getElementById(location + "OreTable").innerHTML = strOut;
}

function calcMinimumShip(location, model)
{
    let market = utilities.getMarketDataFromDropdown(location + "Market");
    let total = { "sell": 0, "buy": 0 };
    let quant = utilities.getFromDocument(location + "Quantity", 1);

    let ship = document.getElementById("SelectShip");
    ship = ship.options[ship.selectedIndex].value;

    try {
        // template: total["sell"] += out*market[ore]["sell"];
        total["sell"] += quant*market[ship]["sell"];
        total["buy"] += quant*market[ship]["buy"];
    }
    catch (e) { console.log(e) }

    calcMinimum(location, model);
    strOut = "<div>Ship Info<br /><table class=\"table table-hover\">" +
        utilities.addRow(["Sell Price:", utilities.addCommas(Math.ceil(total["sell"])) + " ISK"]) +
        utilities.addRow(["Buy Price:", utilities.addCommas(Math.ceil(total["buy"])) + " ISK"]) +
        "</table></div>";

    document.getElementById(location + "OreTable").innerHTML += strOut;
}

let calcMin = {
    // empty model
    model : {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    },

    // Adds ore to models and deals with the ore filter
    addOreToModel : function(name, repro)
    {
        for(ore in utilities.ores)
        {
            calcMin.model["variables"][ore] = {};
            if(
                !document.getElementById(name + "FilterOres").checked
                ||
                document.getElementById(ore + name + "CoreListCheck").checked
            )
            {
                for(reproOres in utilities.ores[ore])
                    this.model["variables"][ore][reproOres] = Math.floor(utilities.ores[ore][reproOres]*repro/100);
                try {
                    let data = utilities.getMarketDataFromDropdown(name + "Market")[ore];
                    this.model["variables"][ore]["isk"] = data["sell"];
                    this.model["variables"][ore]["volume"] = data["volume"];
                }
                catch (e) { console.log(e) }
            }
        }
    },

    // Deals with a mineral stockpile
    addStockpileMinsToModel : function(name)
    {
        if(document.getElementById(name + "HaveMinerals").checked) for(mins in utilities.minerals)
        {
            calcMin.model["constraints"][utilities.minerals[mins]]["min"] -= 
                utilities.getFromDocument(utilities.minerals[mins] + name + "MinListCheck", 0)
        }
    },

    // Deals with an ore stockpile
    addStockpileOresToModel : function(name, repro)
    {
        if(document.getElementById(name + "HaveOres").checked) for(ore in utilities.ores)
        {
            for(mins in utilities.ores[ore]) if(utilities.ores[ore][mins] != undefined)
            {
                calcMin.model["constraints"][mins]["min"] -= 
                    utilities.getFromDocument(ore + name + "OreListCheck", 0) * utilities.ores[ore][mins] * repro/100
            }
        }
    },
    
    generateFromOptimalOre : function(repro)
    {
        this.addOreToModel("MEC", repro);

        for(mins in utilities.minerals)
            calcMin.model["constraints"][utilities.minerals[mins]] = 
                { "min": utilities.getFromDocument(utilities.minerals[mins] + "MEC", 0), "tot": 0 }
        
        this.addStockpileMinsToModel("MEC");
        this.addStockpileOresToModel("MEC", repro);
        return calcMin.model;
    },
    
    generateFromBlueprints : function(me, structure, rig, repro, quantity)
    {
        this.addOreToModel("Ship", repro);

        let ship = document.getElementById("SelectShip");
        ship = utilities.T1Ships[e.options[e.selectedIndex].value];

        if(ship != undefined) for(mins in utilities.minerals)
            calcMin.model["constraints"][utilities.minerals[mins]] = 
                {
                    "min": quantity * Math.ceil(ship[utilities.minerals[mins]] * (1-(me/100)) * (1-(structure/100)) * (1-(rig/100))), 
                    "tot": 0
                };

        this.addStockpileMinsToModel("Ship");
        this.addStockpileOresToModel("Ship", repro);
        return calcMin.model;
    },

    generateCapMinerals : function(capme, capstructure, caprig, me, structure, rig, repro, quantity)
    {
        this.addOreToModel("Cap", repro);
        
        let capitalShip = document.getElementById("SelectShipCap");
        capitalShip = utilities.capitals[e.options[e.selectedIndex].value];
        neededminerals = { }
        
        for(minerals in utilities.minerals) neededminerals[utilities.minerals[minerals]] = 0;

        if(capitalShip != undefined) for(comps in capitalShip)
        {
            for(mins in utilities.capitalComponents[comps])
                neededminerals[mins] +=
                    quantity *
                    Math.ceil(capitalShip[comps] * (1-(capme/100)) * (1-(capstructure/100)) * (1-(caprig/100))) *
                    Math.ceil(utilities.capitalComponents[comps][mins] * (1-(me/100)) * (1-(structure/100)) * (1-(rig/100)));
        }
        
        for(minName in neededminerals)
            calcMin.model["constraints"][minName] = { "min": neededminerals[minName], "tot": 0 };

        this.addStockpileMinsToModel("Cap");
        this.addStockpileOresToModel("Cap", repro);
        return calcMin.model;
    }
}

function calcMinimumIceTwo(location, model){
    let strOut = "";

    let solution = solver.Solve(model);

    let market = utilities.getMarketDataFromDropdown(location + "Market");
    let total = { "sell": 0, "buy": 0,  "volume": 0 };
    
    strOut += "<div>Ice Calculated<br /><table class=\"table table-hover\">";

    for(ore in utilities.ices)
    {
        out = Math.ceil(solution[ore]);
        if(out != 0 && !isNaN(out) && out != undefined)
        {
            try {
                total["sell"] += out*market[ore]["sell"];
                total["buy"] += out*market[ore]["buy"];
                total["volume"] += out*market[ore]["volume"];
            }
            catch (e) { console.log(e) }

            for(mins in utilities.iceMinerals) if(model["variables"][ore][utilities.iceMinerals[mins]] != undefined)
                model["constraints"][utilities.iceMinerals[mins]]["tot"] += out*model["variables"][ore][utilities.iceMinerals[mins]];

            strOut += utilities.addRow([ore, utilities.addCommas(out)]);
        }
    }

    strOut += "</table></div><div>Ore Information<table class=\"table table-hover\">"
        + utilities.addRow(["Sell Price:", utilities.addCommas(Math.ceil(total["sell"])) + " ISK"])
        + utilities.addRow(["Buy Price:", utilities.addCommas(Math.ceil(total["buy"])) + " ISK"])
        + utilities.addRow(["Total Volume:", utilities.addCommas(Math.ceil(total["volume"])) + " m^3"])
        + "</table></div><div>Extra Nerdy Information<table class=\"table table-hover\">"
        + utilities.addRow(["Mineral", "Needed", "Refined", "Excess"]);
    
    for(mins of utilities.iceMinerals.values())
        strOut += utilities.addRow([
            mins,
            utilities.addCommas(model["constraints"][mins]["min"]),
            utilities.addCommas(model["constraints"][mins]["tot"]),
            utilities.addCommas((model["constraints"][mins]["tot"] - model["constraints"][mins]["min"]))
        ]);
    strOut += "</table></div>";
    
    document.getElementById(location + "Table").innerHTML = strOut;
}

let calcMinIce = {
    // empty model
    model : {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    },

    generateFromOptimalIce : function(repro)
    {
        for(ore in utilities.ices)
        {
            calcMinIce.model["variables"][ore] = {};
            if(
                !document.getElementById("MECIceFilterOres").checked
                ||
                document.getElementById(ore + "MECIceCoreListCheck").checked
            )
            {
                for(reproOres in utilities.ices[ore])
                    this.model["variables"][ore][reproOres] = Math.floor(utilities.ices[ore][reproOres]*repro/100);
                try {
                    let data = utilities.getMarketDataFromDropdown("MECIceMarket")[ore];
                    this.model["variables"][ore]["isk"] = data["sell"];
                    this.model["variables"][ore]["volume"] = data["volume"];
                }
                catch (e) { console.log(e) }
            }
        }

        for(mins in utilities.iceMinerals)
            calcMinIce.model["constraints"][utilities.iceMinerals[mins]] = 
                { "min": utilities.getFromDocument(utilities.iceMinerals[mins] + "MECIce", 0), "tot": 0 }
        
        
        if(document.getElementById("MECIceHaveMinerals").checked) for(mins in utilities.iceMinerals)
        {
            calcMinIce.model["constraints"][utilities.iceMinerals[mins]]["min"] -= 
                utilities.getFromDocument(utilities.iceMinerals[mins] + "MECIceMinListCheck", 0)
        }

        if(document.getElementById("MECIceHaveOres").checked) for(ore in utilities.ices)
        {
            for(mins in utilities.ices[ore]) if(utilities.ices[ore][mins] != undefined)
            {
                calcMinIce.model["constraints"][mins]["min"] -= 
                    utilities.getFromDocument(ore + "MECIceOreListCheck", 0) * utilities.ices[ore][mins] * repro/100
            }
        }

        return calcMinIce.model;
    },
}


let reprocessing = {
    loadReprocessing : function (value, location, dropdownName, dictOres, mins)
    {
        let toBeAssigned = "<tr><th>Name</th>";
        mins.forEach(Element => { toBeAssigned+= "<th>" + Element + "</th>"; });
        toBeAssigned+="<th>Ore Buy</th><th>Ore Sell</th><th>Mineral Buy</th><th>Mineral Sell</th></tr>";
        
        for(ore in dictOres)
        {
            toBeAssigned += "<tr>";
            toBeAssigned += "<th>" + ore + "</th>";
            let mineralValueSell = 0;
            let mineralValueBuy = 0;
            let localList = utilities.getMarketDataFromDropdown(dropdownName);
        
            mins.forEach(Element => {
                let temp =  dictOres[ore][Element];
                temp = temp == undefined ? 0 : temp;
                toBeAssigned += "<th>" + utilities.addCommas(Math.floor(temp*value/100)) + "</th>";
                try {
                    mineralValueSell+=Math.floor(temp*value/100)*localList[Element]['sell'];
                    mineralValueBuy+=Math.floor(temp*value/100)*localList[Element]['buy'];
                }
                catch (e) { console.log(e) }
            });
    
            try{
                // add ore buy
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['buy'])) + "</th>";
                // add ore sell
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['sell'])) + "</th>";
            }
            catch (e) { console.log(e) }

            // add mineral buy
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueBuy)) + "</th>";
            // add mineral sell
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueSell)) + "</th>";
    
            toBeAssigned += "</tr>";
        }
        document.getElementById(location).innerHTML = toBeAssigned;
    }
}
