
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
    let repro = utilities.getFromDocument("ReprocessingPercentageTwo", 50);
    let strOut = "<br/>";
    
    // empty model
    model = {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { }
    }

    for(ore in utilities.ores)
        if(this.document.getElementById(ore + "MECCheck").checked)
    {
        model["variables"][ore] = {};
        for(reproOres in utilities.ores[ore])
            model["variables"][ore][reproOres] = Math.floor(utilities.ores[ore][reproOres]*repro/100);
        model["variables"][ore]["isk"] = utilities.buySell[ore]["sell"];
    }
    
    for(mins in utilities.minerals)
    {
        model["constraints"][utilities.minerals[mins]] = 
            { "min": utilities.getFromDocument(utilities.minerals[mins] + "MEC"), "tot": 0 }
    }

    solution = solver.Solve(model);
    total = { "sell": 0, "buy": 0,  "volume": 0 };

    strOut += "<div>Ores Calculated<table>";
    for(ore in utilities.ores)
    {
        out = Math.ceil(solution[ore]);
        if(out != 0 && !isNaN(out) && out != undefined )
        {
            total["sell"] += out*utilities.buySell[ore]["sell"];
            total["buy"] += out*utilities.buySell[ore]["buy"];
            total["volume"] += out*utilities.buySell[ore]["volume"];
            for(mins in utilities.minerals) if(model["variables"][ore][utilities.minerals[mins]] != undefined)
                model["constraints"][utilities.minerals[mins]]["tot"] += out*model["variables"][ore][utilities.minerals[mins]];

            strOut += "<tr><th>" + ore + "</th><th>" + utilities.addCommas(out) + "</th></th>";
        }
    }
    strOut += "</table></div><div>Ore Information<table>";
    strOut += "<tr><th>Sell Price:</th><th>" + utilities.addCommas(Math.ceil(total["sell"])) + " isk</th></tr>";
    strOut += "<tr><th>Buy Price:</th><th>" + utilities.addCommas(Math.ceil(total["buy"])) + " isk</th></tr>";
    strOut += "<tr><th>Total Volume:</th><th>" + utilities.addCommas(Math.ceil(total["volume"])) + " m^3</th></tr></table></div>";

    strOut += "<div>Extra Nerdy Information<table>";
    strOut += "<tr><th>Mineral</th><th>Needed</th><th>Refined</th><th>Excess</th>";
    for(mins in utilities.minerals)
        strOut += "<tr><th>" + utilities.minerals[mins] + "</th><th>" 
            + utilities.addCommas(model["constraints"][utilities.minerals[mins]]["min"]) + "</th><th>"
            + utilities.addCommas(model["constraints"][utilities.minerals[mins]]["tot"]) + "</th><th>"
            + utilities.addCommas((model["constraints"][utilities.minerals[mins]]["tot"] - model["constraints"][utilities.minerals[mins]]["min"])) + "</th></tr>";
    strOut += "</table></div>";
    
    this.document.getElementById("MECOut").innerHTML = strOut;
}
