
var reprocessing = {
    loadReprocessing : function (value, location)
    {
        let toBeAssigned = "<tr><th>Name</th>";
        for(mins in utilities.minerals) toBeAssigned+= "<th>" + utilities.minerals[mins] + "</th>";
        toBeAssigned+="<th>Ore Buy</th><th>Ore Sell</th><th>Mineral Buy</th><th>Mineral Sell</th></tr>";
        
        for(ore in utilities.ores)
        {
            toBeAssigned += "<tr>";
            toBeAssigned += "<th>" + ore + "</th>";
            let mineralValueSell = 0;
            let mineralValueBuy = 0;
    
            for(mins in utilities.minerals)
            {
                let temp =  utilities.ores[ore][utilities.minerals[mins]];
                if(temp == undefined) temp = 0;
                toBeAssigned += "<th>" + utilities.addCommas(Math.floor(temp*value/100)) + "</th>";
                try {
                    mineralValueSell+=Math.floor(temp*value/100)*utilities.buySell[utilities.minerals[mins]]['sell'];
                    mineralValueBuy+=Math.floor(temp*value/100)*utilities.buySell[utilities.minerals[mins]]['buy'];
                }
                catch { error() }
            }
    
            try{
                // add ore buy
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(utilities.buySell[ore]['buy'])) + "</th>";
                // add ore sell
                toBeAssigned += "<th>" + utilities.addCommas(Math.ceil(utilities.buySell[ore]['sell'])) + "</th>";
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
