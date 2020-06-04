
let reprocessing = {
    loadReprocessing : function (value, location)
    {
        let toBeAssigned = "<tr><th>Name</th>";
        utilities.minerals.forEach(Element => { toBeAssigned+= "<th>" + Element + "</th>"; });
        toBeAssigned+="<th>Ore Buy</th><th>Ore Sell</th><th>Mineral Buy</th><th>Mineral Sell</th></tr>";
        
        for(ore in utilities.ores)
        {
            toBeAssigned += "<tr>";
            toBeAssigned += "<th>" + ore + "</th>";
            let mineralValueSell = 0;
            let mineralValueBuy = 0;
            let localList = { };

            let e = document.getElementById("SelectMarket");
            if(e.options[e.selectedIndex].value == "jita") localList = utilities.buySellJita;
            else if(e.options[e.selectedIndex].value == "amarr") localList = utilities.buySellAmarr;
            else if(e.options[e.selectedIndex].value == "dodixie") localList = utilities.buySellDodixie;
            else if(e.options[e.selectedIndex].value == "rens") localList = utilities.buySellRens;

            
            utilities.minerals.forEach(Element => {
                let temp =  utilities.ores[ore][Element];
                temp = temp == undefined ? 0 : temp;
                toBeAssigned += "<th>" + utilities.addCommas(Math.floor(temp*value/100)) + "</th>";
                try {
                    mineralValueSell+=Math.floor(temp*value/100)*localList[Element]['sell'];
                    mineralValueBuy+=Math.floor(temp*value/100)*localList[Element]['buy'];
                }
                catch { error() }
            });
    
            try{
                // add ore buy
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['buy'])) + "</th>";
                // add ore sell
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['sell'])) + "</th>";
            }
            catch { error() }
            // add mineral buy
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueBuy)) + "</th>";
            // add mineral sell
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueSell)) + "</th>";
    
            toBeAssigned += "</tr>";
        }
        document.getElementById(location).innerHTML = toBeAssigned;
    }
}
