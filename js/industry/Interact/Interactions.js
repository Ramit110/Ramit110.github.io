function calcOres()
{
    reprocessing.loadReprocessing(utilities.getFromDocument("ReprocessingPercentageOre", 50), "OreTable", "ReprocessOreMarket", utilities.ores, utilities.minerals);
}

function calcIce()
{
    reprocessing.loadReprocessing(utilities.getFromDocument("ReprocessingPercentageIce", 50), "IceTable", "ReprocessIceMarket", utilities.ices, utilities.iceMinerals);
}

function calcMinimumOre()
{
    calcMinimum(
        "MEC",
        calcMin.generateFromOptimalOre(utilities.getFromDocument("ReprocessingPercentageTwo", 50))
    )
}

function calcMinimumIce()
{
    calcMinimumIceTwo(
        "MECIce",
        calcMinIce.generateFromOptimalIce(utilities.getFromDocument("ReprocessingPercentageThree", 50))
    )
}

function calcShip()
{
    calcMinimumShip(
        "Ship",
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
        "Cap",
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
    document.getElementById(divs[current][0]).style.display = "none";
    document.getElementById(divs[number][0]).style.display = "block";
    current = number;
}
