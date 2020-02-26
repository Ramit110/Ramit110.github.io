
function calcOres()
{
    this.loadReprocessing(getFromDocument("ReprocessingPercentage", 50));
}

function loadReprocessing(value)
{
    let toBeAssigned = "<tr><th>Name</th>";
    for(mins in this.minerals) toBeAssigned+= "<th>" + this.minerals[mins] + "</th>";
    toBeAssigned+="<th>Ore Buy</th><th>Ore Sell</th><th>Mineral Buy</th><th>Mineral Sell</th></tr>";
    
    for(ore in this.ores)
    {
        toBeAssigned += "<tr>";
        toBeAssigned += "<th>" + ore + "</th>";
        let mineralValueSell = 0;
        let mineralValueBuy = 0;

        for(mins in this.minerals)
        {
            let temp =  this.ores[ore][this.minerals[mins]];
            if(temp == undefined) temp = 0;
            toBeAssigned += "<th>" + addCommas(Math.floor(temp*value/100)) + "</th>";
            mineralValueSell+=Math.floor(temp*value/100)*buySell[minerals[mins]]['sell'];
            mineralValueBuy+=Math.floor(temp*value/100)*buySell[minerals[mins]]['buy'];
        }

        // add ore buy
        toBeAssigned += "<th>" + addCommas(Math.ceil(buySell[ore]['buy'])) + "</th>";
        // add ore sell
        toBeAssigned += "<th>" + addCommas(Math.ceil(buySell[ore]['sell'])) + "</th>";
        // add mineral buy
        toBeAssigned += "<th>" + addCommas(Math.ceil(mineralValueBuy)) + "</th>";
        // add mineral sell
        toBeAssigned += "<th>" + addCommas(Math.ceil(mineralValueSell)) + "</th>";

        toBeAssigned += "</tr>";
    }
    this.document.getElementById("OreTable").innerHTML = toBeAssigned;
}

/*example = {
    "constraints": {
        "tritanium": {"min": 100},
        "pyreite": {"min": 88}
    },
    "variables": {
        "veld": { "isk": 100, "tritanium": 10 },
        "score": { "isk": 100, "tritanium": 7, "pyreite": 10 }
    }, "ints": { "veld": 1,  "score": 1}
};*/
function calcMinimum()
{
    let repro = getFromDocument("ReprocessingPercentageTwo", 50);
    let strOut = "<br/>";
    
    // empty model
    model = {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    }

    for(ore in this.ores){
        model["variables"][ore] = {};
        for(reproOres in this.ores[ore])
            model["variables"][ore][reproOres] = Math.floor(this.ores[ore][reproOres]*repro/100);
        model["variables"][ore]["isk"] = buySell[ore]["sell"];
    }
    for(mins in this.minerals)
    {
        model["constraints"][minerals[mins]] = 
            { "min": getFromDocument(minerals[mins] + "MEC"), "tot": 0 }
    }

    solution = solver.Solve(model);
    total = { "sell": 0, "buy": 0,  "volume": 0 };

    strOut += "<div>Ores Calculated<table>";
    for(ore in this.ores)
    {
        console.log(model["variables"][ore]);
        out = Math.ceil(solution[ore]);
        if(out != 0 && !isNaN(out) && out != undefined )
        {
            total["sell"] += out*buySell[ore]["sell"];
            total["buy"] += out*buySell[ore]["buy"];
            total["volume"] += out*buySell[ore]["volume"];
            for(mins in minerals) if(model["variables"][ore][minerals[mins]] != undefined)
                model["constraints"][minerals[mins]]["tot"] += out*model["variables"][ore][minerals[mins]];

            strOut += "<tr><th>" + ore + "</th><th>" + addCommas(out) + "</th></th>";
        }
    }
    strOut += "</table></div><div>Ore Information<table>";
    strOut += "<tr><th>Sell Price:</th><th>" + addCommas(Math.ceil(total["sell"])) + " isk</th></tr>";
    strOut += "<tr><th>Buy Price:</th><th>" + addCommas(Math.ceil(total["buy"])) + " isk</th></tr>";
    strOut += "<tr><th>Total Volume:</th><th>" + addCommas(Math.ceil(total["volume"])) + " m^3</th></tr></table></div>";

    strOut += "<div>Extra Nerdy Information<table>";
    strOut += "<tr><th>Mineral</th><th>Needed</th><th>Refined</th><th>Excess</th>";
    for(mins in minerals)
        strOut += "<tr><th>" + minerals[mins] + "</th><th>" 
            + model["constraints"][minerals[mins]]["min"] + "</th><th>"
            + model["constraints"][minerals[mins]]["tot"] + "</th><th>"
            + (model["constraints"][minerals[mins]]["tot"] - model["constraints"][minerals[mins]]["min"]) + "</th></tr>";
    strOut += "</table></div>";
    
    this.document.getElementById("MECOut").innerHTML = strOut;
}
