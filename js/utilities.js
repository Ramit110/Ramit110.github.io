
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
minerals = [ "Tritanium", "Pyerite", "Mexallon", "Isogen", "Nocxium", "Zydrine", "Megacyte"];
buySell = {};

function getFromDocument(elementID, defaultValue)
{
    let temp = this.document.getElementById(elementID).value.replace(",", "") * 1;
    return isNaN(temp) ? defaultValue : temp;
}

function addCommas(data)
{
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
