let Utilities = 
{
    MineralsAndIce : Object.freeze({
        34 : "Tritanium",
        35 : "Pyerite",
        36 : "Mexallon",
        37 : "Isogen",
        38 : "Nocxium",
        39 : "Zydrine",
        40 : "Megacyte",
        16272 : "Heavy Water",
        16273 : "Liquid Ozone",
        16274 : "Helium Isotopes",
        16275 : "Strontium Clathrates",
        17887 : "Oxygen Isotopes",
        17888 : "Nitrogen Isotopes",
        17889 : "Hydrogen Isotopes"
    }),
    OresAndIce : Object.freeze({
        1230 : {"id": "Veldspar", "isk": 0},
        17470: {"id": "Concentrated Veldspar", "isk": 0},
        17471 : {"id": "Dense Veldspar", "isk": 0},
        1228 : {"id": "Scordite", "isk": 0},
        17463 : {"id": "Condensed Scordite", "isk": 0},
        17464 : {"id": "Massive Scordite", "isk": 0},
        1224 : {"id": "Pyroxeres", "isk": 0},
        17459 : {"id": "Solid Pyroxeres", "isk": 0},
        17460 : {"id": "Viscous Pyroxeres", "isk": 0},
        18 : {"id": "Plagioclase", "isk": 0},
        17455 : {"id": "Azure Plagioclase", "isk": 0},
        17456 : {"id": "Rich Plagioclase", "isk": 0},
        1227 : {"id": "Omber", "isk": 0},
        17867 : {"id": "Silvery Omber", "isk": 0},
        17868 : {"id": "Golden Omber", "isk": 0},
        20 : {"id": "Kernite", "isk": 0},
        17452 : { "id": "Luminous Kernite", "isk": 0},
        17453 : { "id": "Fiery Kernite", "isk": 0},
        1226 : { "id": "Jaspet", "isk": 0},
        17448 : { "id": "Pure Jaspet", "isk": 0},
        17449 : { "id": "Pristine Jaspet", "isk": 0},
        1231 : { "id": "Hemorphite", "isk": 0},
        17444 : { "id": "Vivid Hemorphite", "isk": 0},
        17445 : { "id": "Radiant Hemorphite", "isk": 0},
        21 : { "id": "Hedbergite", "isk": 0},
        17440 : { "id": "Vitric Hedbergite", "isk": 0},
        17441 : { "id": "Glazed Hedbergite", "isk": 0},
        1229 : { "id": "Gneiss", "isk": 0},
        17865 : { "id": "Iridescent Gneiss", "isk": 0},
        17866 : { "id": "Prismatic Gneiss", "isk": 0},
        1232 : { "id": "Dark Ochre", "isk": 0},
        17436 : { "id": "Onyx Ochre", "isk": 0},
        17437 : { "id": "Obsidian Ochre", "isk": 0},
        19 : { "id": "Spodumain", "isk": 0},
        17466 : { "id": "Bright Spodumain", "isk": 0},
        17467 : { "id": "Gleaming Spodumain", "isk": 0},
        1225 : { "id": "Crokite", "isk": 0},
        17432 : { "id": "Sharp Crokite", "isk": 0},
        17433 : { "id": "Crystalline Crokite", "isk": 0},
        1223 : { "id": "Bistot", "isk": 0},
        17428 : { "id": "Triclinic Bistot", "isk": 0},
        17429 : { "id": "Monoclinic Bistot", "isk": 0},
        22 : { "id": "Arkonor", "isk": 0},
        17425 : { "id": "Crimson Arkonor", "isk": 0},
        17426 : { "id": "Prime Arkonor", "isk" : 0}
    }),
    MineralsAndIceNames : function ()
    {
        return Object.values(this.MineralsAndIce).forEach(x => x.toLowerCase());
    },
    AllIDsString : function ()
    {
        return Object.keys(this.MineralsAndIce).join() + "," + Object.keys(this.OresAndIce).join();
    },

    buySellAll : Object.freeze({ }),

    GetNumberFromDocument : function (elementID, defaultValue)
    {
        let Temp = document.getElementById(elementID).value.replace(/,/g, "") * 1;
        return [isNaN(Temp) ? defaultValue : Temp, isNaN(Temp)];
    },
    GetFromDocument : function (elementID)
    {
        let Temp = document.getElementById(elementID).value;
        return isNaN(Temp) ? "" : Temp;
    },
    addCommas : function(data)
    {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    addRow : function (colList)
    {
        newRow = "";
        colList.forEach(element => newRow += "<th>" + element + "</th>");
        return "<tr>" + newRow + "</tr>";
    },
    GetAppraisal : async function (params, location)
    {
        try {
            const fetchResponse = await fetch(
                "https://market.fuzzwork.co.uk/aggregates/?station=60003760&types=" + params,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );
            let data = (await fetchResponse.json());
    
            /*
                tbr = { 34: {"buy": ..., "sell": ...} }
            */
            let tbr = {};

            for(items in data) tbr[items] = {
                'buy': data[items]['buy']['max'],
                'sell': data[items]['sell']['min']
            };
            return Object.freeze(tbr);
        } catch (e) {
            console.log("Error getting Appraisal");
            return (await this.GetAppraisal(params, location));
        };
    }
}
