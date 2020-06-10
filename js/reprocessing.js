
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
            let localList = utilities.getMarketDataFromDropdown("SelectMarket");
        
            utilities.minerals.forEach(Element => {
                let temp =  utilities.ores[ore][Element];
                temp = temp == undefined ? 0 : temp;
                toBeAssigned += "<th>" + utilities.addCommas(Math.floor(temp*value/100)) + "</th>";
                try {
                    mineralValueSell+=Math.floor(temp*value/100)*localList[Element]['sell'];
                    mineralValueBuy+=Math.floor(temp*value/100)*localList[Element]['buy'];
                }
                catch (e) { console.log(e) }
            });
    
            try{
                // add ore buy
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['buy'])) + "</th>";
                // add ore sell
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(localList[ore]['sell'])) + "</th>";
            }
            catch (e) { console.log(e) }

            // add mineral buy
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueBuy)) + "</th>";
            // add mineral sell
            toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(mineralValueSell)) + "</th>";
    
            toBeAssigned += "</tr>";
        }
        document.getElementById(location).innerHTML = toBeAssigned;
    }
}
