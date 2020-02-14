// aquired from my EVEStuff repo at https://github.com/Ramit110/EveStuff
ores = {
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
}
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
        let data = await fetchResponse.json();
        data = data['appraisal']['items'];

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
    let temp = this.document.getElementById("ReprocessingPercentage").value * 1;
    if(isNaN(temp)) temp = 50;
    this.loadReprocessing(temp);
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
            toBeAssigned += "<th>" + Math.floor(temp*value/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</th>";
            mineralValueSell+=Math.floor(temp*value/100)*buySell[minerals[mins]]['sell'];
            mineralValueBuy+=Math.floor(temp*value/100)*buySell[minerals[mins]]['buy'];
        }

        // while(JSON.stringify(buySell) == "{}") {}

        // add ore buy
        toBeAssigned += "<th>" + Math.ceil(buySell[ore]['buy']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</th>";
        // add ore sell
        toBeAssigned += "<th>" + Math.ceil(buySell[ore]['sell']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</th>";
        // add mineral buy
        toBeAssigned += "<th>" + Math.ceil(mineralValueBuy).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</th>";
        // add mineral sell
        toBeAssigned += "<th>" + Math.ceil(mineralValueSell).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</th>";

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
    let arrStore = { };
    let currStore = { };
    let numOut = { };
    for(mins in this.minerals)
    {
        let temp = this.document.getElementById(this.minerals[mins] + "MEC").value * 1;
        if(isNaN(temp)) temp = 0;
        arrStore[this.minerals[mins]] = temp;
        currStore[this.minerals[mins]] = 0;
    }

    let repro = this.document.getElementById("ReprocessingPercentageTwo").value/100;
    if(isNaN(repro)) repro = 0.5;

    // inoptimal jank solution
    for(let i = this.minerals.length-1; i >= 0; i--)
    {
        let lowest = undefined;
        let highestMin = undefined;
        for(ore in this.ores)
        {
            if(lowest == undefined || highestMin == undefined || this.ores[ore][this.minerals[i]] > highestMin)
            {
                lowest = ore;
                highestMin = this.ores[ore][this.minerals[i]];
            }
            if(numOut[ore] == undefined) numOut[ore] = 0;
        }
        let number = Math.ceil((arrStore[this.minerals[i]]-currStore[this.minerals[i]]) / Math.floor(repro * this.ores[lowest][this.minerals[i]]));
        if(number < 0) number = 0;
        for(mins in this.ores[lowest]) currStore[mins] += Math.floor(repro*this.ores[lowest][mins]) * number;
        numOut[lowest] += number;
    }

    let strOut = "";
    for(outs in numOut)
    {
        if(numOut[outs] > 0) strOut += outs + " " + numOut[outs] + "<br/>";
    }
    this.document.getElementById("MECOut").innerHTML = strOut;
}