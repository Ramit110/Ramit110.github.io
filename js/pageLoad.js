window.onload = async function()
{
    let params = "";
    for(mins in this.minerals) params += this.minerals[mins] + "%0A";
    for(ore in this.ores) params += ore + "%0A";

    buySell = await this.getEVEPraisal(params);
    this.calcOres();
    this.loadMEC();
    this.unloadDivs();
}

function loadMEC()
{
    let textLoc = "<th>";
    for(mins in this.minerals)
        textLoc +=
            `<input type="text" id="` + this.minerals[mins] +
            `MEC"> ` + this.minerals[mins] + `<br/>`;
    this.document.getElementById("inpList").innerHTML = textLoc + "</th>";

    this.document.getElementById("parseBox").style.height = this.document.getElementById("inpList").width + "px" ;
}