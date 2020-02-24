
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

        // while(JSON.stringify(buySell) == "{}") {}

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
        model["variables"][ore]["isk"] = buySell[ore]["buy"];
    }
    for(mins in this.minerals)
    {
       model["constraints"][minerals[mins]] = {"min": getFromDocument(minerals[mins] + "MEC")}
    }

    solution = solver.Solve(model);
    total = 0;

    for(ore in this.ores)
    {
        out = solution[ore];
        if(out == undefined) strOut += ore + " " + 0;
        else 
        {
            total += out*buySell[ore]["buy"];
            strOut += Math.ceil(ore) + " " + addCommas(out);
        }
        strOut += "<br/>";
    }
    strOut += "For a cost of " + addCommas(Math.ceil(total)) + " isk";
    
    this.document.getElementById("MECOut").innerHTML = strOut;
}
