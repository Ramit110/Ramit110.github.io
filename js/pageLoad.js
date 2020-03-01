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
    let textLoc = "<th>";
    for(mins in utilities.minerals){
        textLoc +=
            `<div><input type="text" id="` + utilities.minerals[mins] +
            `MEC"/> ` + utilities.minerals[mins] + `</div><br/>`;
    }
    this.document.getElementById("MECinpList").innerHTML = textLoc + "</th>";

    textLoc = "";
    for(ore in utilities.ores)
    {
        textLoc += utilities.addRow(
            [`<input type="checkbox" id="` + ore + `MECCheck" />`, ore]
        );
    }
    this.document.getElementById("MECoreList").innerHTML = textLoc;

    for(ore in utilities.ores)
    {
        this.document.getElementById(ore + "MECCheck").checked = true;
    }
}

function loadShips()
{
    for(ships in utilities.T1Ships)
    {
        temp = document.createElement("option");
        temp.textContent = ships;
        temp.value = ships;
        document.getElementById("SelectShip").appendChild(temp);
    }

    textLoc = "";
    for(ore in utilities.ores)
    {
        textLoc += utilities.addRow(
            [`<input type="checkbox" id="` + ore + `ShipCheck" />`, ore]
        );
    }
    this.document.getElementById("ShipCoreList").innerHTML = textLoc;

    for(ore in utilities.ores)
    {
        this.document.getElementById(ore + "ShipCheck").checked = true;
    }
}

function loadCapitalsShips()
{
    for(ships in utilities.capitals)
    {
        temp = document.createElement("option");
        temp.textContent = ships;
        temp.value = ships;
        document.getElementById("SelectShipCap").appendChild(temp);
    }

    textLoc = "";
    for(ore in utilities.ores)
    {
        textLoc += utilities.addRow(
            [`<input type="checkbox" id="` + ore + `CapShipCheck" />`, ore]
        );
    }
    this.document.getElementById("CapCoreList").innerHTML = textLoc;

    for(ore in utilities.ores)
    {
        this.document.getElementById(ore + "CapShipCheck").checked = true;
    }
}

function error()
{
    console.log("Oh no");
}