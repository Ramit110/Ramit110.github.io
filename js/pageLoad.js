window.onload = async function()
{
    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    this.unloadDivs();
    utilities.buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
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
        textLoc+= `<tr><th><input type="checkbox" id="` + ore + `MECCheck" /></th><th>` + ore + `</th><tr>`;
    }
    this.document.getElementById("MECoreList").innerHTML = textLoc;

    for(ore in utilities.ores)
    {
        this.document.getElementById(ore + "MECCheck").checked = true;
    }
}

function unloadDivs()
{
    for(things in divs)
    {
        this.document.getElementById(divs[things]).style.display = "none";
    }
    moveTo(current);
}

function error()
{
    console.log("Oh no");
}