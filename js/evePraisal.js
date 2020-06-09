
getEVEPraisal = async (params, location) => {
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
        return Object.freeze({ })
    };
}
