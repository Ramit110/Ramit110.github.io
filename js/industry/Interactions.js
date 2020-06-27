
divs = ["Main", "Reprocessing", "MEC", "Ship", "Cap"];
current = 0;

function calcOres()
{
    reprocessing.loadReprocessing(utilities.getFromDocument("ReprocessingPercentage", 50), "OreTable");
}

function calcMinimumOre()
{
    calcMinimum(
        "MECOreTable",
        calcMin.generateFromOptimalOre(utilities.getFromDocument("ReprocessingPercentageTwo", 50))
    )
}

function calcShip()
{
    calcMinimum(
        "ShipOreTable",
        calcMin.generateFromBlueprints(
            utilities.getFromDocument("ShipMaterialEfficiency", 10),
            utilities.getFromDocument("StructureBonus", 0),
            utilities.getFromDocument("RigBonus", 0),
            utilities.getFromDocument("ShipReprocessingPercentage", 50),
            utilities.getFromDocument("ShipQuantity", 1)
        )
    )
}

function calcShipCap()
{
    calcMinimum(
        "CapShipOreTable",
        calcMin.generateCapMinerals(
            utilities.getFromDocument("CapitalShipMaterialEfficiency", 10),
            utilities.getFromDocument("CapitalStructureBonus", 0),
            utilities.getFromDocument("CapitalRigBonus", 0),
            utilities.getFromDocument("CapitalCompShipMaterialEfficiency", 10),
            utilities.getFromDocument("CapitalCompStructureBonus", 0),
            utilities.getFromDocument("CapitalCompRigBonus", 0),
            utilities.getFromDocument("CapitalShipReprocessingPercentage", 50),
            utilities.getFromDocument("CapitalShipQuantity", 1)
        )
    )
}

function hideThings(box, thing)
{
    if(box.checked) document.getElementById(thing).style.display = "inline-block";
    else document.getElementById(thing).style.display = "none";
}

function moveTo(number)
{
    document.getElementById("nav" + current).classList.remove("active");
    document.getElementById("nav" + number).classList.add("active");
    document.getElementById(divs[current]).style.display = "none";
    document.getElementById(divs[number]).style.display = "block";
    current = number;
}
