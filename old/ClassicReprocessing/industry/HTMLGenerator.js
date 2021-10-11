var HTMLGenerator =
{
    generateElements : function(tagName)
    {
        return function(classList)
        {
            return function(parent)
            {
                let newNode = document.createElement(tagName);
                parent.appendChild(newNode);
                classList.forEach(cssElement => newNode.classList.add(cssElement));
                return newNode;
            }
        }
    },
    generateElementsWithInternal : function(tagName)
    {
        return function(classList)
        {
            return function(parent)
            {
                return function(internal)
                {
                    let newNode = document.createElement(tagName);
                    parent.appendChild(newNode);
                    classList.forEach(cssElement => newNode.classList.add(cssElement));
                    newNode.innerHTML = internal;
                    return newNode;
                }
            }
        }
    },
    generateElementsWithAttributes : function(tagName)
    {
        return function(parent)
        {
            return function(attributeList)
            {
                let newNode = document.createElement(tagName);
                parent.appendChild(newNode);
                attributeList.forEach(
                    atts => newNode.setAttribute(
                        atts[0],
                        atts[1].reduce((acc, curr) => acc + " " + curr)
                    )
                )
                return newNode;
            }
        }
    }
}

getEVEPraisal = async (params, location) => {
    /*
    try {
        const fetchResponse = await fetch(
            "https://cors-anywhere.herokuapp.com/https://evepraisal.com/appraisal.json?market=" + location.toLowerCase() + "&raw_textarea=" + params,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        let data = (await fetchResponse.json())['appraisal']['items'];

        let tbr = {};
        for(items in data) tbr[data[items]['name']] = {
            'buy': data[items]['prices']['buy']['max'],
            'sell': data[items]['prices']['sell']['min'],
            'volume': data[items]['typeVolume']
        };
        return Object.freeze(tbr);
    } catch (e) {
        console.log("Error getting Evepraisal");
        return (await this.getEVEPraisal(params, location));
    };
    */
}
