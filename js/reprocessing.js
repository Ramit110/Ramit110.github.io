
var OreMap = {
    "Dense Veldspar": [475, 0, 0, 0, 0, 0, 0],
    "Massive Scordite": [381, 190, 0, 0, 0, 0, 0],
    "RAV GIMME THE JSOOON": [0, 0, 0, 0, 0, 0, 0]
};

window.onload = function()
{
    this.calcOres();
}

function calcOres()
{
    this.loadReprocessing(this.document.getElementById("ReprocessingPercentage").value);
}

function loadReprocessing(value)
{
    let toBeAssigned = `
        <tr>
            <th>Name</th>
            <th>Ore Buy</th>
            <th>Tritanium</th>
            <th>Pyerite</th>
            <th>Mexallon</th>
            <th>Isogen</th>
            <th>Nocxium</th>
            <th>Megacyte</th>
            <th>Zyndrite</th>
            <th>Total Sell</th>
        </tr>`;
    
    for(ores in this.OreMap)
    {
        toBeAssigned += "<tr>";
        toBeAssigned += "<th>" + ores + "</th>";
        // add ore value
        toBeAssigned += "<th>" + "TODO" + "</th>";

        for(data in this.OreMap[ores])
        {
            let test = Math.floor(this.OreMap[ores][data]*value/100);
            if(!test) test = this.OreMap[ores][data];
            toBeAssigned += "<th>" + test + "</th>";
        }

        // add ore value
        toBeAssigned += "<th>" + "TODO" + "</th>";

        toBeAssigned += "</tr>";
    }
    this.document.getElementById("OreTable").innerHTML = toBeAssigned;
}
