window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    this.unloadDivs();
    utilities.buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
    
    let reduceByOres = loadElementsIntoSheet.reduceUsing(Object.keys(utilities.ores));
    document.getElementById("CapCoreList").innerHTML = 
        reduceByOres("CapShipCheck");
    document.getElementById("ShipCoreList").innerHTML = 
        reduceByOres("ShipCheck");

    loadElementsIntoSheet.loadDropdown(utilities.T1Ships, "SelectShip");
    loadElementsIntoSheet.loadDropdown(utilities.capitals, "SelectShipCap");
}

function unloadDivs()
{
    for(things in divs)
    {
        this.document.getElementById(divs[things]).style.display = "none";
    }
    moveTo(current);
}

function loadMEC()
{
    let textLoc = "";
    let textLocB = "";
    utilities.minerals.forEach(element => {
        textLoc +=
            `<div><input type="text" id="` + element +
            `MEC"/> ` + element + `</div><br/>`;
        textLocB +=
            `<div><input type="text" id="` + element +
            `Minerals"/> ` + element + `</div><br/>`;
    });
    this.document.getElementById("MECinpList").innerHTML = textLoc;
    this.document.getElementById("MECMinList").innerHTML = textLocB;
    this.document.getElementById("MECHaveMinerals").checked = false;
    hideThings(this.document.getElementById("MECHaveMinerals"), 'MECMinListDiv');

    textLoc = "";
    textLocB = "";
    Object.keys(utilities.ores).forEach(element => {
        textLoc +=
            `<div><input type="text" id="` + element +
            `Ores"/> ` + element + `</div><br/>`;
        textLocB += utilities.addRow(
            [`<input type="checkbox" id="` + element + `MECCheck" checked/>`, element]
        );
    });
    this.document.getElementById("MECOreList").innerHTML = textLoc;
    this.document.getElementById("MECHaveOres").checked = false;
    hideThings(this.document.getElementById("MECHaveOres"), 'MECOreListDiv');

    this.document.getElementById("MECOreFilterList").innerHTML = textLocB;
    this.document.getElementById("MECFilterOres").checked = false;
    hideThings(this.document.getElementById("MECFilterOres"), 'MECOreFilterList');
}

function error()
{
    console.log("Oh no");
}

var loadElementsIntoSheet = {
    loadDropdown : function(list, documentElementID)
    {
        Object.keys(list).forEach(element => {
            temp = document.createElement("option");
            temp.textContent = element;
            temp.value = element;
            document.getElementById(documentElementID).appendChild(temp);
        });
    },
    reduceUsing : function(inplist)
    {
        return function addCheckboxes(post)
        {
            return inplist.reduce((accumulation, current) =>
                accumulation += utilities.addRow(
                    [`<input type="checkbox" id="` + current + post + `" checked />`, current]
                ), ""
            );
        }
    }
}