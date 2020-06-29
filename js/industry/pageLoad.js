window.onload = async function()
{
    unloadDivs();

    // Load the Reprocessing tab for ores

    // inner div needed to stop input/selector being max length
    let ReproDiv = HTMLGenerator.generateElements
        ("div")
        (["mb-3", "centered"])
        (document.getElementById("Reprocessing"))
        ("");

    [
        [
            "Reprocessing Percentage",
            `<input type="text" class="form-control" id="ReprocessingPercentage" value="50">`
        ], [
            "Market",
            `<select id="ReprocessMarket" class="custom-select"></select>`
        ]
    ].forEach(elems => {
        let temp = HTMLGenerator.generateElements
            ("div")
            (["input-group"])
            (ReproDiv)
            ("");
        HTMLGenerator.generateElements
            ("div")
            (["input-group-prepend", "input-group-text"])
            (temp)
            (elems[0]);
        temp.innerHTML += elems[1];
    });
    
    ReproDiv.innerHTML += `<button type="button" class="btn btn-secondary" onclick="calcOres()">Recalculate</button>`;
    document.getElementById("Reprocessing").innerHTML += `<table id="OreTable" class="table"></table>`;
    
    // Load market Dropdowns
    let loadMarketDrops = loadElementsIntoSheet.loadDropdown(["Jita", "Amarr", "Dodixie", "Rens"]);
    ["Reprocess", "MEC", "Ship", "Cap"].forEach(elems => loadMarketDrops(elems + "Market"));

    // Repro Done, Load the MEC, Ship and Cap tabs

    // Prepare loading the dropdowns in the repro tab and MEC tab
    let reduceFromOres = loadElementsIntoSheet.reduceFromList(Object.keys(utilities.ores));
    let inputMineralReductionList = loadElementsIntoSheet.reduceFromList
        (utilities.minerals)
        (loadElementsIntoSheet.makeInputTags);

    // Load the user inputs for MEC, Ships and Caps
    inputMineralReductionList(document.getElementById("MECInpList"))("MEC");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.T1Ships))("SelectShip");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.capitals))("SelectShipCap");

    ["MEC", "Ship", "Cap"].forEach(
        prevs => {
            ["HaveMinerals", "HaveOres", "FilterOres"].forEach(
                posts => hideThings(document.getElementById(prevs + posts), prevs + posts + "Div")
            )
            
            reduceFromOres
                (loadElementsIntoSheet.makeCheckboxTags)
                (document.getElementById(prevs + "CoreList"))
                (prevs + "CoreListCheck");

            reduceFromOres
                (loadElementsIntoSheet.makeInputTags)
                (document.getElementById(prevs + "OreList"))
                (prevs + "OreListCheck");

            inputMineralReductionList
                (document.getElementById(prevs + "MinList"))
                (prevs + "MinListCheck");
        }
    );

    let params = "";
    for(mins in utilities.minerals) params += utilities.minerals[mins] + "%0A";
    for(ore in utilities.ores) params += ore + "%0A";
    for(ships in utilities.T1Ships) params += ships + "%0A";
    for(caps in utilities.capitals) params += caps + "%0A";


    tempJita = await this.getEVEPraisal(params, "Jita");
    tempAmarr = await this.getEVEPraisal(params, "Amarr");
    tempDodixie = await this.getEVEPraisal(params, "Dodixie");
    tempRens = await this.getEVEPraisal(params, "Rens");

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
    reduceFromList : function(inplist)
    {
        return function(func)
        {
            return function(parent)
            {
                return function(post)
                {
                    inplist.forEach((current) => func(current, post, parent));
                }
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
    makeCheckboxTags : function(current, post, parent)
    {
        parent.innerHTML += utilities.addRow(
            [`<input type="checkbox" id="` + current + post + `" checked />`, current]
        )
    },
    makeInputTags(current, post, parent)
    {
        let tbr = HTMLGenerator.generateElements
            ("div")
            (["input-group"])
            (parent)
            (`<input type="text" class="form-control" id="` + current + post + `"/>`);
        HTMLGenerator.generateElements
            ("span")
            (["input-group-append","input-group-text"])
            (tbr)
            (current);
    }
}

var HTMLGenerator = {
    generateElements : function(tagName)
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
