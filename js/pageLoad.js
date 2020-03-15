window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    unloadDivs();
    utilities.buySell = await this.getEVEPraisal(params);

    loadOreThings();
    loadMineralThings();

    hideThings(this.document.getElementById("MECHaveMinerals"), 'MECMinListDiv');
    hideThings(this.document.getElementById("MECHaveOres"), 'MECOreListDiv');
    hideThings(this.document.getElementById("MECFilterOres"), 'MECOreFilterList');

    loadElementsIntoSheet.loadDropdown(utilities.T1Ships)("SelectShip");
    loadElementsIntoSheet.loadDropdown(utilities.capitals)("SelectShipCap");

    this.calcOres();
}

function unloadDivs()
{
    divs.forEach(element => {
        this.document.getElementById(element).style.display = "none";
    });
    moveTo(current);
}

function loadOreThings()
{
    let reduceFromOres = loadElementsIntoSheet.reduceFrom(Object.keys(utilities.ores));

    let checkboxReduction = reduceFromOres(loadElementsIntoSheet.getCheckboxes);
    document.getElementById("CapCoreList").innerHTML = checkboxReduction("CapShipCheck");
    document.getElementById("ShipCoreList").innerHTML = checkboxReduction("ShipCheck");
    document.getElementById("MECOreFilterList").innerHTML = checkboxReduction("MECCheck");

    let inputOreReduction = reduceFromOres(loadElementsIntoSheet.getInputs);
    document.getElementById("MECOreList").innerHTML = inputOreReduction("Ores");
}

function loadMineralThings()
{
    let reduceFromMinerals = loadElementsIntoSheet.reduceFrom(utilities.minerals);

    let inputMineralReduction = reduceFromMinerals(loadElementsIntoSheet.getInputs);
    this.document.getElementById("MECMinList").innerHTML = inputMineralReduction("Minerals");
    this.document.getElementById("MECinpList").innerHTML = inputMineralReduction("MEC");
}

function error()
{
    console.log("Oh no");
}

var loadElementsIntoSheet = {
    loadDropdown : function(list)
    {
        return function(documentElementID) {
            Object.keys(list).forEach(element => {
                temp = document.createElement("option");
                temp.textContent = element;
                temp.value = element;
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
