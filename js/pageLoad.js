window.onload = async function()
{
    let params = "";
    for(mins in this.minerals) params += this.minerals[mins] + "%0A";
    for(ore in this.ores) params += ore + "%0A";

    this.unloadDivs();
    buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
}

function loadMEC()
{
    let textLoc = "<th>";
    for(mins in this.minerals)
        textLoc +=
            `<div><input type="text" id="` + this.minerals[mins] +
            `MEC"> ` + this.minerals[mins] + `</div><br/>`;
    this.document.getElementById("inpList").innerHTML = textLoc + "</th>";
}

function unloadDivs()
{
    for(things in divs)
    {
        this.document.getElementById(divs[things]).style.display = "none";
    }
    moveTo(current);
}