
divs = ["Main", "Reprocessing", "MostEfficientCompressed", "T1Ship", "Capitals", "Support"];
current = 0;

function moveTo(number)
{
    document.getElementById(divs[current]).style.display = "none";
    document.getElementById(divs[number]).style.display = "block";
    current = number;
}
