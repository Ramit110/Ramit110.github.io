
var utilities = {
    // aquired from my EVEStuff repo at https://github.com/Ramit110/EveStuff
    ores : {
        "Compressed Arkonor": {
            "Megacyte": 320,
            "Mexallon": 2500,
            "Tritanium": 22000
        },
        "Compressed Bistot": {
            "Megacyte": 100,
            "Pyerite": 12000,
            "Zydrine": 450
        },
        "Compressed Crokite": {
            "Nocxium": 760,
            "Tritanium": 21000,
            "Zydrine": 135
        },
        "Compressed Dark Ochre": {
            "Isogen": 1600,
            "Nocxium": 120,
            "Tritanium": 10000
        },
        "Compressed Gneiss": {
            "Isogen": 300,
            "Mexallon": 2400,
            "Pyerite": 2200
        },
        "Compressed Hedbergite": {
            "Isogen": 200,
            "Nocxium": 100,
            "Pyerite": 1000,
            "Zydrine": 19
        },
        "Compressed Hemorphite": {
            "Isogen": 100,
            "Nocxium": 120,
            "Tritanium": 2200,
            "Zydrine": 15
        },
        "Compressed Jaspet": {
            "Mexallon": 350,
            "Nocxium": 75,
            "Zydrine": 8
        },
        "Compressed Kernite": {
            "Isogen": 134,
            "Mexallon": 267,
            "Tritanium": 134
        },
        "Compressed Omber": {
            "Isogen": 85,
            "Pyerite": 100,
            "Tritanium": 800
        },
        "Compressed Plagioclase": {
            "Mexallon": 107,
            "Pyerite": 213,
            "Tritanium": 107
        },
        "Compressed Pyroxeres": {
            "Mexallon": 50,
            "Nocxium": 5,
            "Pyerite": 25,
            "Tritanium": 351
        },
        "Compressed Scordite": {
            "Pyerite": 173,
            "Tritanium": 346
        },
        "Compressed Spodumain": {
            "Isogen": 450,
            "Mexallon": 2100,
            "Pyerite": 12050,
            "Tritanium": 56000
        },
        "Compressed Veldspar": {
            "Tritanium": 415
        }
    },
    minerals : [ "Tritanium", "Pyerite", "Mexallon", "Isogen", "Nocxium", "Zydrine", "Megacyte"],
    buySell : {},

    getFromDocument : function(elementID, defaultValue)
    {
        let temp = document.getElementById(elementID).value;
        while (temp.includes(",")) temp = temp.replace(",", "");
        temp *= 1;
        return isNaN(temp) ? defaultValue : temp;
    },
    addCommas : function(data)
    {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}
