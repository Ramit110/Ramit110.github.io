
buySell = {};

// aquired from my EVEStuff repo at https://github.com/Ramit110/EveStuff
ores = {
    "Compressed Arkonor":{
        "Tritanium":22000,
        "Mexallon":2500,
        "Megacyte":320
    },
    "Compressed Bistot":{
        "Pyerite":12000,
        "Zydrine":450,
        "Megacyte":100
    },
    "Compressed Crokite":{
        "Tritanium":21000,
        "Nocxium":760,
        "Zydrine":135
    },
    "Compressed Dark Ochre":{
        "Tritanium":10000,
        "Isogen":1600,
        "Nocxium":120
    },
    "Compressed Gneiss":{
        "Pyerite":2200,
        "Mexallon":2400,
        "Isogen":300
    },
    "Compressed Hedbergite":{
        "Pyerite":1000,
        "Isogen":200,
        "Nocxium":100,
        "Zydrine":19
    },
    "Compressed Hemorphite":{
        "Tritanium":2200,
        "Isogen":100,
        "Nocxium":120,
        "Zydrine":15
    },
    "Compressed Jaspet":{
        "Mexallon":350,
        "Nocxium":75,
        "Zydrine":8
    },
    "Compressed Kernite":{
        "Mexallon":267,
        "Tritanium":134,
        "Isogen":134
    },
    "Compressed Omber":{
        "Isogen":85,
        "Tritanium":800,
        "Pyerite":100
    },
    "Compressed Spodumain":{
        "Tritanium":56000,
        "Pyerite":12050,
        "Mexallon":2100,
        "Isogen":450
    },
    "Compressed Pyroxeres":{
        "Tritanium":351,
        "Pyerite":25,
        "Mexallon":50,
        "Nocxium":5
    },
    "Compressed Scordite":{
        "Tritanium":346,
        "Pyerite":173
    },
    "Compressed Veldspar":{
        "Tritanium":415
    }
}

minerals = [ "Tritanium", "Pyerite", "Mexallon", "Isogen", "Nocxium", "Megacyte", "Zydrine"];

window.onload = function()
{
    this.calcOres();

    var params = "";
    for(mins in this.minerals) params += this.minerals[mins] + "%0A";
    for(ore in this.ores) params += ore + "%0A";

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('POST', 'https://cors-anywhere.herokuapp.com/https://evepraisal.com/appraisal.json?market=jita&raw_textarea=' + params, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            buySell = JSON.parse(xobj["responseText"])["appraisal"]["items"];
        }
        console.log(buySell);
    };
    xobj.send(null);
}

function calcOres()
{
    this.loadReprocessing(this.document.getElementById("ReprocessingPercentage").value);
}

function loadReprocessing(value)
{
    let toBeAssigned = "<tr><th>Name</th>";
    for(mins in this.minerals) toBeAssigned+= "<th>" + this.minerals[mins] + "</th>";
    toBeAssigned+="<th>Ore Buy</th><th>Ore Sell</th><th>Mineral Sell</th></tr>";
    
    for(ore in this.ores)
    {
        toBeAssigned += "<tr>";
        toBeAssigned += "<th>" + ore + "</th>";

        for(mins in this.minerals)
        {
            var temp =  this.ores[ore][this.minerals[mins]];
            if(temp == undefined) temp = 0;
            toBeAssigned += "<th>" + Math.floor(temp*value/100) + "</th>";
        }

        // add ore buy
        toBeAssigned += "<th>" + "TODO" + "</th>";
        // add ore sell
        toBeAssigned += "<th>" + "TODO" + "</th>";
        // add mineral sell
        toBeAssigned += "<th>" + "TODO" + "</th>";

        toBeAssigned += "</tr>";
    }
    this.document.getElementById("OreTable").innerHTML = toBeAssigned;
}
