
divs = ["Reprocessing", "MostEfficientCompressed"];
current = 0;

function moveTo(number)
{
    this.document.getElementById(divs[current]).style.display = "none";
    this.document.getElementById(divs[number]).style.display = "block";
    current = number;
}

function unloadDivs()
{
    for(things in divs)
    {
        this.document.getElementById(divs[things]).style.display = "none";
    }
    moveTo(current);
}