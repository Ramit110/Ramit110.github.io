divs = [
    ["Main"],
    ["ReprocessingOre", "Ore Table"],
    ["ReprocessingIce", "Ice Table"],
    ["MEC", "Optimal Ore"],
    ["MECIce", "Optimal Ice"],
    ["Ship", "Sub Capital Manufacturing"],
    ["Cap", "Capital Manufacturing"]
];
current = 0;

window.onload = async function()
{
    generateNav();
    unloadDivs();

    // Load the Reprocessing tab for ores AND ICE

    // inner div needed to stop input/selector being max length
    let ReproDiv = HTMLGenerator.generateElementsWithAttributes
        ("div")
        (document.getElementById("ReprocessingOre"))
        (["class", ["mb-3", "centered"]]);
    
    [
        [
            "Reprocessing Percentage",
            `<input type="text" class="form-control" id="ReprocessingPercentageOre" value="50">`
        ], [
            "Market",
            `<select id="ReprocessOreMarket" class="custom-select"></select>`
        ]
    ].forEach(elems => {
        let temp = loadElementsIntoSheet.divInputGroup()
            (ReproDiv)
            ("");
        HTMLGenerator.generateElementsWithInternal
            ("div")
            (["input-group-prepend", "input-group-text"])
            (temp)
            (elems[0]);
        temp.innerHTML += elems[1];
    });

    let ReproDivIce = HTMLGenerator.generateElements
        ("div")
        (["mb-3", "centered"])
        (document.getElementById("ReprocessingIce"));
    [
        [
            "Reprocessing Percentage",
            `<input type="text" class="form-control" id="ReprocessingPercentageIce" value="50">`
        ], [
            "Market",
            `<select id="ReprocessIceMarket" class="custom-select"></select>`
        ]
    ].forEach(elems => {
        let temp = loadElementsIntoSheet.divInputGroup()
            (ReproDivIce)
            ("");
        HTMLGenerator.generateElementsWithInternal
            ("div")
            (["input-group-prepend", "input-group-text"])
            (temp)
            (elems[0]);
        temp.innerHTML += elems[1];
    });
    
    ReproDiv.innerHTML += `<button type="button" class="btn btn-secondary" onclick="calcOres()">Recalculate</button>`;
    ReproDivIce.innerHTML += `<button type="button" class="btn btn-secondary" onclick="calcIce()">Recalculate</button>`;


    document.getElementById("ReprocessingOre").innerHTML += `<table id="OreTable" class="table"></table>`;
    document.getElementById("ReprocessingIce").innerHTML += `<table id="IceTable" class="table"></table>`;
    
    // Load market Dropdowns
    let loadMarketDrops = loadElementsIntoSheet.loadDropdown(["Jita", "Amarr", "Dodixie", "Rens"]);
    ["ReprocessOre", "ReprocessIce", "MEC", "Ship", "Cap", "MECIce"].forEach(elems => loadMarketDrops(elems + "Market"));

    // Repro Done, Load the MEC, Ship and Cap tabs

    // Prepare loading the dropdowns in the repro tab and MEC tab
    let reduceFromOres = loadElementsIntoSheet.reduceFromList(Object.keys(utilities.ores));
    let inputMineralReductionList = loadElementsIntoSheet.reduceFromList
        (utilities.minerals)
        (loadElementsIntoSheet.makeInputTags);


    // Load the user inputs for MEC, Ships and Caps
    inputMineralReductionList(document.getElementById("MECInpList"))("MEC");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.T1Ships).sort())("SelectShip");
    loadElementsIntoSheet.loadDropdown(Object.keys(utilities.capitals).sort())("SelectShipCap");

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

    let inputIceReductionList = loadElementsIntoSheet.reduceFromList
        (utilities.iceMinerals)
        (loadElementsIntoSheet.makeInputTags);
    let reduceFromIces = loadElementsIntoSheet.reduceFromList(Object.keys(utilities.ices));

    inputIceReductionList(document.getElementById("MECIceInpList"))("MECIce");

    ["HaveMinerals", "HaveOres", "FilterOres"].forEach(
        posts => hideThings(document.getElementById("MECIce" + posts), "MECIce" + posts + "Div")
    )
    inputIceReductionList
        (document.getElementById("MECIceMinList"))
        ("MECIceMinListCheck");
    reduceFromIces
        (loadElementsIntoSheet.makeCheckboxTags)
        (document.getElementById("MECIceCoreList"))
        ("MECIceCoreListCheck");
    reduceFromIces
        (loadElementsIntoSheet.makeInputTags)
        (document.getElementById("MECIceOreList"))
        ("MECIceOreListCheck");

    
    let params = "";
    [utilities.minerals, utilities.iceMinerals].forEach(elems => {
        for(mins in elems) params += elems[mins] + "%0A"
    });
    [utilities.ores, utilities.ices, utilities.T1Ships, utilities.capitals].forEach(elems => {
        for(item in elems) params += item + "%0A"
    });


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
    this.calcIce();
}

function generateNav()
{
    let NavBar = HTMLGenerator.generateElementsWithAttributes
        ("a")
        (document.getElementById("NavBar"))
        ([
            ["id", ["nav0"]],
            ["class", ["navbar-brand"]],
            ["onclick", ["moveTo(0)"]]
        ]);
    NavBar.innerHTML = "R110's IS";
    let NavBasic = HTMLGenerator.generateElementsWithAttributes
        ("a")
        (HTMLGenerator.generateElementsWithAttributes("div")(document.getElementById("NavBar"))([["class", ["navbar-nav"]]]));
        
    let counter = 1;
    divs.slice(1).forEach(params => {
        let temp = NavBasic([
            ["id", ["nav" + counter]],
            ["class", ["nav-item", "nav-link"]],
            ["onclick", ["moveTo(" + counter + ")"]]
        ]);
        temp.innerHTML = params[1];
        counter++;
    })
}

function unloadDivs()
{
    divs.slice(1).forEach(element => {
        document.getElementById(element[0]).style.display = "none";
    });
    moveTo(current);
}

var loadElementsIntoSheet =
{
    divInputGroup : function ()
    {
        return HTMLGenerator.generateElementsWithInternal("div")(["input-group"])
    },

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
        let tbr = loadElementsIntoSheet.divInputGroup()
            (parent)
            (`<input type="text" class="form-control" id="` + current + post + `"/>`);
        HTMLGenerator.generateElementsWithInternal
            ("span")
            (["input-group-append","input-group-text"])
            (tbr)
            (current);
    },
    makeTable (name)
    {
        let ReproDiv = HTMLGenerator.generateElements
            ("div")
            (["mb-3", "centered"])
            ("Reprocessing" + name);
    }
}
