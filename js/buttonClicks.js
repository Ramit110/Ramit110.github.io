
function calcOres()
{
    reprocessing.loadReprocessing(utilities.getFromDocument("ReprocessingPercentage", 50), "OreTable");
}

function calcMinimumOre()
{
    calcMinimum(
        "MECOut",
        calcMin.generateFromOptimalOre(utilities.getFromDocument("ReprocessingPercentageTwo", 50))
    )
}

function calcShip()
{
    calcMinimum(
        "OreTableShips",
        calcMin.generateFromBlueprints(
            utilities.getFromDocument("ShipMaterialEfficiency", 10),
            utilities.getFromDocument("StructureBonus", 0),
            utilities.getFromDocument("RigBonus", 0),
            utilities.getFromDocument("ShipReprocessingPercentage", 50),
            utilities.getFromDocument("ShipQuantity", 1)
        )
    )
}