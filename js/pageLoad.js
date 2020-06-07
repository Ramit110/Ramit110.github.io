window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    unloadDivs();

    utilities.buySellJita = await this.getEVEPraisal(params, "jita");
    utilities.buySellAmarr = await this.getEVEPraisal(params, "amarr");
    utilities.buySellDodixie = await this.getEVEPraisal(params, "dodixie");
    utilities.buySellRens = await this.getEVEPraisal(params, "rens");

    loadElementsIntoSheet.loadDropdownMainList(["jita", "amarr", "dodixie", "rens"])("SelectMarket");

    prefix = ["MEC", "Ship", "Cap"]
    postfixDivs = ["HaveMinerals", "HaveOres", "FilterOres"]
        
    let reduceFromOres = loadElementsIntoSheet.reduceFrom(Object.keys(utilities.ores));

    let inputMineralReduction = loadElementsIntoSheet.reduceFrom(utilities.minerals)(loadElementsIntoSheet.getInputs);
    document.getElementById("MECInpList").innerHTML = inputMineralReduction("MEC");

    prefix.forEach(
        prevs => {
            postfixDivs.forEach(
                posts => hideThings(document.getElementById(prevs + posts), prevs + posts + "Div")
            )
            
            document.getElementById(prevs + "CoreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.getCheckboxes)(prevs + "CoreListCheck");

            document.getElementById(prevs + "OreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.getInputs)(prevs + "OreListCheck");
                
            document.getElementById(prevs + "MinList").innerHTML = inputMineralReduction(prevs + "MinListCheck");
        }
    );

    loadElementsIntoSheet.loadDropdownArr(utilities.T1Ships)("SelectShip");
    loadElementsIntoSheet.loadDropdownArr(utilities.capitals)("SelectShipCap");

    this.calcOres();
}

function unloadDivs()
{
    divs.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
    moveTo(current);
}

function error()
{
    console.log("Oh no");
}

var loadElementsIntoSheet = {
    loadDropdownArr : function(arr)
    {
        return function(documentElementID) {
            Object.keys(arr).forEach(element => {
                temp = document.createElement("option");
                temp.textContent = element;
                temp.value = element;
                document.getElementById(documentElementID).appendChild(temp);
            });
        }
    },
    loadDropdownMainList : function(list)
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
    getCheckboxes : function(current, post)
    {
        return utilities.addRow(
            [`<input type="checkbox" id="` + current + post + `" checked />`, current]
        )
    },
    getInputs : function(current, post)
    {
        return `<div><input type="text" id="` + current + post + `"/> ` + current + `</div><br/>`;
    }
}
