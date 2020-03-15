window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    this.unloadDivs();
    utilities.buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
    this.loadShips();
    this.loadCapitalsShips();

    this.checkCheckboxes(utilities.categories);
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
            [`<input type="checkbox" id="` + element + `MECCheck" />`, element]
        );
    });
    this.document.getElementById("MECOreList").innerHTML = textLoc;
    this.document.getElementById("MECHaveOres").checked = false;
    hideThings(this.document.getElementById("MECHaveOres"), 'MECOreListDiv');

    this.document.getElementById("MECOreFilterList").innerHTML = textLocB;
    this.document.getElementById("MECFilterOres").checked = false;
    hideThings(this.document.getElementById("MECFilterOres"), 'MECOreFilterList');
}

function loadShips()
{
    Object.keys(utilities.T1Ships).forEach(element => {
        let temp = document.createElement("option");
        temp.textContent = element;
        temp.value = element;
        document.getElementById("SelectShip").appendChild(temp);
    });

    textLoc = "";
    Object.keys(utilities.ores).forEach(element => {
        textLoc += utilities.addRow(
            [`<input type="checkbox" id="` + element + `ShipCheck" />`, element]
        );
    });
    this.document.getElementById("ShipCoreList").innerHTML = textLoc;
}

function loadCapitalsShips()
{
    Object.keys(utilities.capitals).forEach(element => {
        temp = document.createElement("option");
        temp.textContent = element;
        temp.value = element;
        document.getElementById("SelectShipCap").appendChild(temp);
    });

    textLoc = "";
    Object.keys(utilities.ores).forEach(element => {
        textLoc += utilities.addRow(
            [`<input type="checkbox" id="` + element + `CapShipCheck" />`, element]
        );
    });
    this.document.getElementById("CapCoreList").innerHTML = textLoc;
}

function checkCheckboxes(postfixes)
{
    Object.keys(utilities.ores).forEach(element => {
        postfixes.forEach(elements => {
            this.document.getElementById(element + elements).checked = true;
        });
    });
}

function error()
{
    console.log("Oh no");
}
