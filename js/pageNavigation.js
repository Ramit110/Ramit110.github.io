
divs = ["Reprocessing", "MostEfficientCompressed"];
current = 0;

function moveTo(number)
{
    this.document.getElementById(divs[current]).hidden = true;
    this.document.getElementById(divs[number]).hidden = false;
    current = number;
}

function unloadDivs()
{
    for(things in divs)
    {
        this.document.getElementById(divs[things]).hidden = true;
    }
    moveTo(0);
}