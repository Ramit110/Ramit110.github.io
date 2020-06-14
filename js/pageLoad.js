window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    unloadDivs();

    tempJita = await this.getEVEPraisal(params, "Jita");
    tempAmarr = await this.getEVEPraisal(params, "Amarr");
    tempDodixie = await this.getEVEPraisal(params, "Dodixie");
    tempRens = await this.getEVEPraisal(params, "Rens");

    utilities.buySellAll = Object.freeze({
        "Jita" : tempJita,
        "Amarr" : tempAmarr,
        "Dodixie" : tempDodixie,
        "Rens" : tempRens
    });
        
    let loadDrops = loadElementsIntoSheet.loadDropdown(["Jita", "Amarr", "Dodixie", "Rens"])
    loadDrops("SelectMarket");
    loadDrops("MECMarket");

    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.T1Ships))("SelectShip");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.capitals))("SelectShipCap");

    let reduceFromOres = loadElementsIntoSheet.reduceFrom(Object.keys(utilities.ores));

    let inputMineralReduction = loadElementsIntoSheet.reduceFrom(utilities.minerals)(loadElementsIntoSheet.makeInputs);
    document.getElementById("MECInpList").innerHTML = inputMineralReduction("MEC");

    ["MEC", "Ship", "Cap"].forEach(
        prevs => {
            ["HaveMinerals", "HaveOres", "FilterOres"].forEach(
                posts => hideThings(document.getElementById(prevs + posts), prevs + posts + "Div")
            )
            
            document.getElementById(prevs + "CoreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.makeCheckboxes)(prevs + "CoreListCheck");

            document.getElementById(prevs + "OreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.makeInputs)(prevs + "OreListCheck");

            document.getElementById(prevs + "MinList").innerHTML = inputMineralReduction(prevs + "MinListCheck");
        }
    );

    this.calcOres();
}

function unloadDivs()
{
    divs.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
    moveTo(current);
}

var loadElementsIntoSheet = {
    reduceFrom : function(inplist)
    {
        return function(func)
        {
            return function(post)
            {
                return inplist.reduce((accumulation, current) =>
                    accumulation += func(current, post), ""
                );
            }
        }
    },
    loadDropdown : function(list)
    {
        return function(documentElementID) {
            Object.keys(list).forEach(element => {
                temp = document.createElement("option");
                temp.textContent = list[element];
                temp.value = list[element];
                document.getElementById(documentElementID).appendChild(temp);
            });
        }
    },
    makeCheckboxes : function(current, post)
    {
        return utilities.addRow(
            [`<input type="checkbox" id="` + current + post + `" checked />`, current]
        )
    },
    makeInputs : function(current, post)
    {
        return `<div class="input-group"><input type="text" class="form-control" id="` + current + post + `"/><span class="input-group-append input-group-text">` + current + `</span></div>`;
    }
}
