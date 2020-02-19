
// aquired from my EVEStuff repo at https://github.com/Ramit110/EveStuff
ores = {
    "Compressed Plagioclase": { "Pyerite": 213, "Mexallon": 107, "Tritanium": 107 },
    "Compressed Arkonor":{ "Tritanium":22000, "Mexallon":2500, "Megacyte":320 },
    "Compressed Bistot":{ "Pyerite":12000, "Zydrine":450, "Megacyte":100 },
    "Compressed Crokite":{ "Tritanium":21000, "Nocxium":760, "Zydrine":135 },
    "Compressed Dark Ochre":{ "Tritanium":10000, "Isogen":1600, "Nocxium":120 },
    "Compressed Gneiss":{ "Pyerite":2200, "Mexallon":2400, "Isogen":300 },
    "Compressed Hedbergite":{ "Pyerite":1000, "Isogen":200, "Nocxium":100, "Zydrine":19 },
    "Compressed Hemorphite":{ "Tritanium":2200, "Isogen":100, "Nocxium":120, "Zydrine":15 },
    "Compressed Jaspet":{ "Mexallon":350, "Nocxium":75, "Zydrine":8 },
    "Compressed Kernite":{ "Mexallon":267, "Tritanium":134, "Isogen":134 },
    "Compressed Omber":{ "Isogen":85, "Tritanium":800, "Pyerite":100 },
    "Compressed Spodumain":{ "Tritanium":56000, "Pyerite":12050, "Mexallon":2100, "Isogen":450 },
    "Compressed Pyroxeres":{ "Tritanium":351, "Pyerite":25, "Mexallon":50, "Nocxium":5 },
    "Compressed Scordite":{ "Tritanium":346, "Pyerite":173 },
    "Compressed Veldspar":{ "Tritanium":415 }
};
minerals = [ "Tritanium", "Pyerite", "Mexallon", "Isogen", "Nocxium", "Megacyte", "Zydrine"];

buySell = {};

getEVEPraisal = async (params) => {
    try {
        const fetchResponse = await fetch(
            "https://cors-anywhere.herokuapp.com/https://evepraisal.com/appraisal.json?market=jita&raw_textarea=" + params,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        let data = (await fetchResponse.json())['appraisal']['items'];

        let tbr = {};
        for(items in data) tbr[data[items]['name']] = {
            'buy': data[items]['prices']['buy']['max'],
            'sell': data[items]['prices']['sell']['min']
        };
        return tbr;
    } catch (e) { return e };
}

window.onload = async function()
{
    let params = "";
    for(mins in this.minerals) params += this.minerals[mins] + "%0A";
    for(ore in this.ores) params += ore + "%0A";

    buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
}

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

function loadMEC()
{
    let textLoc = ""
    for(mins in this.minerals)
        textLoc +=
            this.minerals[mins] +
            ` needed: <input type="text" id="` +
            this.minerals[mins] +
            `MEC"><br/>`;
    this.document.getElementById("MostEfficientCompressed").innerHTML = textLoc + this.document.getElementById("MostEfficientCompressed").innerHTML
}

function calcMinimum()
{
    let repro = getFromDocument("ReprocessingPercentageTwo", 50);

    let strOut = "";
    
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
    // empty model
    model = {
        "optimize": "isk",
        "opType": "min",
        "constraints": { },
        "variables": { },
        "ints": { }
    }
    for(ore in this.ores){
        model["ints"][ore] = 1;
        model["variables"][ore] = {};
        for(reproOres in this.ores[ore])
            model["variables"][ore][reproOres]
                = Math.floor(this.ores[ore][reproOres]*repro/100);
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
        if(out == undefined) strOut += ore + ": " + 0;
        else 
        {
            total += solution[ore]*buySell[ore]["buy"];
            strOut += ore + ": " + addCommas(out);
        }
        strOut += "<br/>";
    }
    strOut += "For a cost of " + addCommas(Math.ceil(total)) + " isk";
    
    this.document.getElementById("MECOut").innerHTML = strOut;
}