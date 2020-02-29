
divs = ["Main", "Reprocessing", "MostEfficientCompressed"];
current = 0;

function moveTo(number)
{
    this.document.getElementById(divs[current]).style.display = "none";
    this.document.getElementById(divs[number]).style.display = "block";
    current = number;
}
