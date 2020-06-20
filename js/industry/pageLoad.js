window.onload = async function()
{

    unloadDivs();

    // Load the Reprocessing tab for ores
    document.getElementById("Reprocessing").innerHTML += 
    HTMLGenerator.generateDivMBCentered(
        HTMLGenerator.generateDivInpGroup(
            HTMLGenerator.generateDivInpPrep("Reprocessing Percentage") +
            `<input type="text" class="form-control" id="ReprocessingPercentage" value="50">`
        ) +
        HTMLGenerator.generateDivInpGroup(
            HTMLGenerator.generateDivInpPrep("Market") +
            `<select id="SelectMarket" class="custom-select"></select>`
        )
    ) + `<button type="button" class="btn btn-secondary mb-3" onclick="calcOres()">Recalculate</button><table id="OreTable" class="table"></table>`;
    
    // Load the dropdowns in the repro tab and MEC tab
    let loadDrops = loadElementsIntoSheet.loadDropdown(["Jita", "Amarr", "Dodixie", "Rens"]);
    ["SelectMarket", "MECMarket"].forEach(elems => loadDrops(elems));

    let inputMineralReduction = loadElementsIntoSheet.reduceFrom(utilities.minerals)(loadElementsIntoSheet.makeInputs);
    document.getElementById("MECInpList").innerHTML = inputMineralReduction("MEC");
    
    let reduceFromOres = loadElementsIntoSheet.reduceFrom(Object.keys(utilities.ores));
    ["MEC", "Ship", "Cap"].forEach(
        prevs => {
            ["HaveMinerals", "HaveOres", "FilterOres"].forEach(
                posts => hideThings(document.getElementById(prevs + posts), prevs + posts + "Div")
            )
            
            document.getElementById(prevs + "CoreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.makeCheckboxes)(prevs + "CoreListCheck");

            document.getElementById(prevs + "OreList").innerHTML = 
                reduceFromOres(loadElementsIntoSheet.makeInputs)(prevs + "OreListCheck");

            document.getElementById(prevs + "MinList").innerHTML = inputMineralReduction(prevs + "MinListCheck");
        }
    );

    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";

    tempJita = await this.getEVEPraisal(params, "Jita");
    tempAmarr = await this.getEVEPraisal(params, "Amarr");
    tempDodixie = await this.getEVEPraisal(params, "Dodixie");
    tempRens = await this.getEVEPraisal(params, "Rens");

    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.T1Ships))("SelectShip");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.capitals))("SelectShipCap");

    utilities.buySellAll = Object.freeze({
        "Jita" : tempJita,
        "Amarr" : tempAmarr,
        "Dodixie" : tempDodixie,
        "Rens" : tempRens
    });

    this.calcOres();
}

function unloadDivs()
{
    divs.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
    moveTo(current);
}

var loadElementsIntoSheet = {
    reduceFrom : function(inplist)
    {
        return function(func)
        {
            return function(post)
            {
                return inplist.reduce((accumulation, current) =>
                    accumulation += func(current, post), ""
                );
            }
        }
    },
    loadDropdown : function(list)
    {
        return function(documentElementID) {
            Object.keys(list).forEach(element => {
                temp = document.createElement("option");
                temp.textContent = list[element];
                temp.value = list[element];
                document.getElementById(documentElementID).appendChild(temp);
            });
        }
    },
    makeCheckboxes : function(current, post)
    {
        return utilities.addRow(
            [`<input type="checkbox" id="` + current + post + `" checked />`, current]
        )
    },
    makeInputs : function(current, post)
    {
        return HTMLGenerator.generateDivInpGroup(`<input type="text" class="form-control" id="` + current + post + `"/>` +
                HTMLGenerator.generateTag("span")(["input-group-append","input-group-text"])(current));
    }
}

var HTMLGenerator = {
    generateTag : function(tagName)
    {
        return function(classList)
        {
            return function(internal)
            {
                return `<` + tagName + ` class="` + classList.reduce((acc, curr) => acc + " " + curr) + `">` +
                    internal +
                    `</` + tagName + `>`;
            }
        }
    },
    generateDivMBCentered : function(internal)
    {
        return this.generateTag("div")(["mb-3", "centered"])(internal)
    },
    generateDivInpGroup : function(internal)
    {
        return this.generateTag("div")(["input-group"])(internal)
    },
    generateDivInpPrep : function(internal)
    {
        return this.generateTag("div")(["input-group-prepend", "input-group-text"])(internal)
    }
}

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
