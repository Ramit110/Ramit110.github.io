
function getFromDocument(elementID, defaultValue)
{
    let temp = this.document.getElementById(elementID).value * 1;
    if(isNaN(temp)) return defaultValue;
    return temp;
}

function addCommas(data)
{
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
