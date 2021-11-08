window.onload = async (event) =>
{
    // jitaTemp = await Utilities.GetAppraisal(Utilities.AllIDsString(), location);
    // console.log(jitaTemp);
    // CompressionLoadedPage.CanCalc = true;
}

let CompressionLoadedPage =
{
    CanCalc : false
}

function OnCompressionButtonPress()
{
    document.getElementById("CompressionOutput").text = "";
    inputText = Utilities.GetFromDocument("CompressionMinerals", "");
    inputPercentage = Utilities.GetNumberFromDocument("CompressionPercentage", 78);
    if(!inputPercentage[1]) document.getElementById("CompressionOutput").text += "Error parsing CompressionPercentage, used default of 78%"

    console.log(inputPercentage);

    tempVariables = { };
}
