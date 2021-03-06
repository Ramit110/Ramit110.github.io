
let utilities = {
    // aquired from my EVEStuff repo at https://github.com/Ramit110/EveStuff
    ores : Object.freeze({
        "Compressed Arkonor": {
            "Pyerite": 3200,
            "Mexallon": 1200,
            "Megacyte": 120
        },
        "Compressed Bistot": {
            "Pyerite": 3200,
            "Mexallon": 1200,
            "Zydrine": 160
        },
        "Compressed Crokite": {
            "Pyerite": 800,
            "Mexallon": 2000,
            "Nocxium": 800
        },
        "Compressed Dark Ochre": {
            "Mexallon": 1360,
            "Isogen": 1200,
            "Nocxium": 320
        },
        "Compressed Gneiss": {
            "Pyerite": 2000,
            "Mexallon": 1500,
            "Isogen": 800
        },
        "Compressed Hedbergite": {
            "Pyerite": 450,
            "Nocxium": 120
        },
        "Compressed Hemorphite": {
            "Isogen": 240,
            "Nocxium": 90
        },
        "Compressed Jaspet": {
            "Mexallon": 150,
            "Nocxium": 50
        },
        "Compressed Kernite": {
            "Mexallon": 60,
            "Isogen": 120
        },
        "Compressed Omber": {
            "Pyerite": 90,
            "Isogen": 75
        },
        "Compressed Plagioclase": {
            "Tritanium": 175,
            "Mexallon": 70
        },
        "Compressed Pyroxeres": {
            "Pyerite": 90,
            "Mexallon": 30
        },
        "Compressed Scordite": {
            "Tritanium": 150,
            "Pyerite": 90
        },
        "Compressed Spodumain": {
            "Tritanium": 48000,
            "Isogen": 1000,
            "Nocxium": 160,
            "Zydrine": 80,
            "Megacyte": 40
        },
        "Compressed Veldspar": {
            "Tritanium": 400
        }
    }),
    ices : Object.freeze({
        "Compressed Blue Ice": {
            "Heavy Water": 69,
            "Liquid Ozone": 35,
            "Strontium Clathrates": 1,
            "Oxygen Isotopes": 414
        },
        "Compressed Clear Icicle": {
            "Heavy Water": 69,
            "Liquid Ozone": 35,
            "Helium Isotopes": 414,
            "Strontium Clathrates": 1
        },
        "Compressed Dark Glitter": {
            "Heavy Water": 691,
            "Liquid Ozone": 1381,
            "Strontium Clathrates": 69
        },
        "Compressed Enriched Clear Icicle": {
            "Heavy Water": 104,
            "Liquid Ozone": 55,
            "Helium Isotopes": 483,
            "Strontium Clathrates": 1
        },
        "Compressed Gelidus": {
            "Heavy Water": 345,
            "Liquid Ozone": 691,
            "Strontium Clathrates": 104
        },
        "Compressed Glacial Mass": {
            "Heavy Water": 69,
            "Liquid Ozone": 35,
            "Strontium Clathrates": 1,
            "Hydrogen Isotopes": 414
        },
        "Compressed Glare Crust": {
            "Heavy Water": 1381,
            "Liquid Ozone": 691,
            "Strontium Clathrates": 35
        },
        "Compressed Krystallos": {
            "Heavy Water": 173,
            "Liquid Ozone": 691,
            "Strontium Clathrates": 173
        },
        "Compressed Pristine White Glaze": {
            "Heavy Water": 104,
            "Liquid Ozone": 55,
            "Strontium Clathrates": 1,
            "Nitrogen Isotopes": 483
        },
        "Compressed Smooth Glacial Mass": {
            "Heavy Water": 104,
            "Liquid Ozone": 55,
            "Strontium Clathrates": 1,
            "Hydrogen Isotopes": 483
        },
        "Compressed Thick Blue Ice": {
            "Heavy Water": 104,
            "Liquid Ozone": 55,
            "Strontium Clathrates": 1,
            "Oxygen Isotopes": 483
        },
        "Compressed White Glaze": {
            "Heavy Water": 69,
            "Liquid Ozone": 35,
            "Strontium Clathrates": 1,
            "Nitrogen Isotopes": 414
        }
    }),
    T1Ships : Object.freeze({
        "Abaddon": {
            "Isogen": 216500,
            "Megacyte": 7466,
            "Mexallon": 793889,
            "Nocxium": 54200,
            "Pyerite": 3466778,
            "Tritanium": 13870333,
            "Zydrine": 16866
        },
        "Algos": {
            "Isogen": 900,
            "Megacyte": 6,
            "Mexallon": 8100,
            "Nocxium": 210,
            "Pyerite": 17100,
            "Tritanium": 63000,
            "Zydrine": 60
        },
        "Amarr Shuttle": {
            "Tritanium": 2778
        },
        "Apocalypse": {
            "Isogen": 165922,
            "Megacyte": 6400,
            "Mexallon": 664444,
            "Nocxium": 41467,
            "Pyerite": 2652667,
            "Tritanium": 10608667,
            "Zydrine": 20044
        },
        "Arbitrator": {
            "Isogen": 8889,
            "Megacyte": 222,
            "Mexallon": 41111,
            "Nocxium": 2222,
            "Pyerite": 100000,
            "Tritanium": 444444,
            "Zydrine": 1112
        },
        "Armageddon": {
            "Isogen": 189478,
            "Megacyte": 10312,
            "Mexallon": 762222,
            "Nocxium": 47256,
            "Pyerite": 3024444,
            "Tritanium": 12090111,
            "Zydrine": 22178
        },
        "Ashimmu": {
            "Isogen": 10397,
            "Megacyte": 322,
            "Mexallon": 43364,
            "Nocxium": 2562,
            "Pyerite": 165622,
            "Tritanium": 659871,
            "Zydrine": 1280
        },
        "Astero": {
            "Isogen": 467,
            "Megacyte": 4,
            "Mexallon": 2822,
            "Nocxium": 40,
            "Pyerite": 8044,
            "Tritanium": 24022,
            "Zydrine": 18
        },
        "Atron": {
            "Isogen": 278,
            "Mexallon": 2222,
            "Nocxium": 56,
            "Pyerite": 3889,
            "Tritanium": 20556,
            "Zydrine": 12
        },
        "Augoror": {
            "Isogen": 8667,
            "Megacyte": 134,
            "Mexallon": 33333,
            "Nocxium": 1444,
            "Pyerite": 115556,
            "Tritanium": 577778,
            "Zydrine": 778
        },
        "Badger": {
            "Isogen": 444,
            "Megacyte": 12,
            "Mexallon": 6667,
            "Nocxium": 222,
            "Pyerite": 12667,
            "Tritanium": 71111,
            "Zydrine": 66
        },
        "Bantam": {
            "Isogen": 500,
            "Mexallon": 2444,
            "Nocxium": 2,
            "Pyerite": 8000,
            "Tritanium": 22222,
            "Zydrine": 4
        },
        "Barghest": {
            "Isogen": 171916,
            "Megacyte": 6493,
            "Mexallon": 687781,
            "Nocxium": 44980,
            "Pyerite": 2806229,
            "Tritanium": 11342704,
            "Zydrine": 21381
        },
        "Bellicose": {
            "Isogen": 9000,
            "Megacyte": 178,
            "Mexallon": 43333,
            "Nocxium": 2222,
            "Pyerite": 101111,
            "Tritanium": 433333,
            "Zydrine": 1000
        },
        "Bestower": {
            "Isogen": 556,
            "Megacyte": 20,
            "Mexallon": 5667,
            "Nocxium": 183,
            "Pyerite": 18111,
            "Tritanium": 80556,
            "Zydrine": 88
        },
        "Bhaalgorn": {
            "Isogen": 186459,
            "Megacyte": 8226,
            "Mexallon": 721723,
            "Nocxium": 48828,
            "Pyerite": 3114677,
            "Tritanium": 11968215,
            "Zydrine": 19710
        },
        "Blackbird": {
            "Isogen": 9444,
            "Megacyte": 334,
            "Mexallon": 40000,
            "Nocxium": 2444,
            "Pyerite": 95556,
            "Tritanium": 411111,
            "Zydrine": 1222
        },
        "Breacher": {
            "Isogen": 111,
            "Megacyte": 2,
            "Mexallon": 2778,
            "Nocxium": 2,
            "Pyerite": 15000,
            "Tritanium": 17778,
            "Zydrine": 4
        },
        "Brutix": {
            "Megacyte": 2888,
            "Mexallon": 244444,
            "Nocxium": 12778,
            "Pyerite": 700000,
            "Tritanium": 3111111,
            "Zydrine": 4888
        },
        "Burst": {
            "Isogen": 167,
            "Megacyte": 2,
            "Mexallon": 4444,
            "Nocxium": 22,
            "Pyerite": 3333,
            "Tritanium": 17778,
            "Zydrine": 6
        },
        "Caldari Shuttle": {
            "Tritanium": 2778
        },
        "Caracal": {
            "Isogen": 10444,
            "Megacyte": 556,
            "Mexallon": 36667,
            "Nocxium": 3333,
            "Pyerite": 122222,
            "Tritanium": 544444,
            "Zydrine": 1400
        },
        "Catalyst": {
            "Megacyte": 54,
            "Mexallon": 6427,
            "Nocxium": 269,
            "Pyerite": 14667,
            "Tritanium": 52007,
            "Zydrine": 92
        },
        "Celestis": {
            "Isogen": 10000,
            "Megacyte": 200,
            "Mexallon": 43333,
            "Nocxium": 2111,
            "Pyerite": 96667,
            "Tritanium": 422222,
            "Zydrine": 1088
        },
        "Coercer": {
            "Isogen": 1137,
            "Megacyte": 40,
            "Mexallon": 5413,
            "Pyerite": 20333,
            "Tritanium": 55860,
            "Zydrine": 198
        },
        "Condor": {
            "Isogen": 556,
            "Mexallon": 2111,
            "Nocxium": 11,
            "Pyerite": 4444,
            "Tritanium": 20000,
            "Zydrine": 2
        },
        "Corax": {
            "Isogen": 1590,
            "Megacyte": 14,
            "Mexallon": 8400,
            "Nocxium": 7,
            "Pyerite": 24000,
            "Tritanium": 57000,
            "Zydrine": 14
        },
        "Cormorant": {
            "Isogen": 1070,
            "Megacyte": 18,
            "Mexallon": 5107,
            "Nocxium": 332,
            "Pyerite": 11863,
            "Tritanium": 39253,
            "Zydrine": 214
        },
        "Covetor": {
            "Isogen": 44444,
            "Megacyte": 666,
            "Mexallon": 66667,
            "Nocxium": 4444,
            "Pyerite": 666667,
            "Tritanium": 2222222,
            "Zydrine": 2222
        },
        "Crucifier": {
            "Isogen": 278,
            "Megacyte": 12,
            "Mexallon": 1333,
            "Nocxium": 83,
            "Pyerite": 12222,
            "Tritanium": 13333,
            "Zydrine": 22
        },
        "Cruor": {
            "Isogen": 401,
            "Mexallon": 2949,
            "Nocxium": 88,
            "Pyerite": 6133,
            "Tritanium": 22798,
            "Zydrine": 34
        },
        "Cyclone": {
            "Isogen": 58889,
            "Megacyte": 3334,
            "Mexallon": 188889,
            "Pyerite": 766667,
            "Tritanium": 3222222,
            "Zydrine": 6222
        },
        "Cynabal": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Daredevil": {
            "Isogen": 398,
            "Megacyte": 2,
            "Mexallon": 2949,
            "Nocxium": 82,
            "Pyerite": 6290,
            "Tritanium": 23304,
            "Zydrine": 20
        },
        "Dominix": {
            "Isogen": 181211,
            "Megacyte": 7556,
            "Mexallon": 728333,
            "Nocxium": 45133,
            "Pyerite": 2892889,
            "Tritanium": 11564444,
            "Zydrine": 20644
        },
        "Dragoon": {
            "Isogen": 1080,
            "Mexallon": 7800,
            "Nocxium": 240,
            "Pyerite": 16500,
            "Tritanium": 61500,
            "Zydrine": 92
        },
        "Drake": {
            "Isogen": 20000,
            "Megacyte": 1888,
            "Mexallon": 188889,
            "Nocxium": 16667,
            "Pyerite": 680078,
            "Tritanium": 2777778,
            "Zydrine": 8006
        },
        "Dramiel": {
            "Isogen": 352,
            "Megacyte": 2,
            "Mexallon": 2046,
            "Nocxium": 131,
            "Pyerite": 6143,
            "Tritanium": 22804,
            "Zydrine": 28
        },
        "Epithal": {
            "Isogen": 611,
            "Megacyte": 12,
            "Mexallon": 4556,
            "Nocxium": 189,
            "Pyerite": 11667,
            "Tritanium": 69444,
            "Zydrine": 56
        },
        "Executioner": {
            "Isogen": 333,
            "Mexallon": 1667,
            "Nocxium": 67,
            "Pyerite": 4444,
            "Tritanium": 22222,
            "Zydrine": 12
        },
        "Exequror": {
            "Isogen": 8889,
            "Megacyte": 200,
            "Mexallon": 32222,
            "Nocxium": 1111,
            "Pyerite": 134444,
            "Tritanium": 566667,
            "Zydrine": 800
        },
        "Ferox": {
            "Isogen": 22222,
            "Megacyte": 1778,
            "Mexallon": 194444,
            "Nocxium": 17222,
            "Pyerite": 666667,
            "Tritanium": 2555556,
            "Zydrine": 8444
        },
        "Gallente Shuttle": {
            "Tritanium": 2778
        },
        "Garmur": {
            "Isogen": 352,
            "Megacyte": 2,
            "Mexallon": 2046,
            "Nocxium": 131,
            "Pyerite": 6143,
            "Tritanium": 22804,
            "Zydrine": 28
        },
        "Gila": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Griffin": {
            "Isogen": 222,
            "Megacyte": 6,
            "Mexallon": 1667,
            "Nocxium": 56,
            "Pyerite": 12778,
            "Tritanium": 13333,
            "Zydrine": 22
        },
        "Harbinger": {
            "Isogen": 33333,
            "Megacyte": 2666,
            "Mexallon": 205556,
            "Pyerite": 833333,
            "Tritanium": 3888889,
            "Zydrine": 6666
        },
        "Heron": {
            "Isogen": 556,
            "Megacyte": 8,
            "Mexallon": 2444,
            "Nocxium": 56,
            "Pyerite": 11111,
            "Tritanium": 13333,
            "Zydrine": 16
        },
        "Hoarder": {
            "Isogen": 578,
            "Megacyte": 26,
            "Mexallon": 4111,
            "Nocxium": 200,
            "Pyerite": 10556,
            "Tritanium": 90000,
            "Zydrine": 34
        },
        "Hurricane": {
            "Isogen": 55556,
            "Megacyte": 2888,
            "Mexallon": 211111,
            "Pyerite": 755556,
            "Tritanium": 3000000,
            "Zydrine": 7112
        },
        "Hyperion": {
            "Isogen": 204967,
            "Megacyte": 6512,
            "Mexallon": 789333,
            "Nocxium": 51267,
            "Pyerite": 3282889,
            "Tritanium": 13130556,
            "Zydrine": 25200
        },
        "Imicus": {
            "Isogen": 278,
            "Megacyte": 4,
            "Mexallon": 2556,
            "Nocxium": 50,
            "Pyerite": 10556,
            "Tritanium": 16667,
            "Zydrine": 44
        },
        "Incursus": {
            "Isogen": 33,
            "Mexallon": 4000,
            "Nocxium": 17,
            "Pyerite": 11111,
            "Tritanium": 13333,
            "Zydrine": 12
        },
        "Inquisitor": {
            "Isogen": 11,
            "Megacyte": 2,
            "Mexallon": 2778,
            "Nocxium": 6,
            "Pyerite": 12222,
            "Tritanium": 16667,
            "Zydrine": 2
        },
        "Iteron Mark V": {
            "Isogen": 1167,
            "Megacyte": 22,
            "Mexallon": 8667,
            "Nocxium": 333,
            "Pyerite": 13778,
            "Tritanium": 74444,
            "Zydrine": 100
        },
        "Kestrel": {
            "Isogen": 1111,
            "Mexallon": 2889,
            "Nocxium": 56,
            "Pyerite": 5556,
            "Tritanium": 17778,
            "Zydrine": 22
        },
        "Kryos": {
            "Isogen": 700,
            "Megacyte": 22,
            "Mexallon": 4889,
            "Nocxium": 194,
            "Pyerite": 15889,
            "Tritanium": 71111,
            "Zydrine": 66
        },
        "Machariel": {
            "Isogen": 177765,
            "Megacyte": 5811,
            "Mexallon": 700827,
            "Nocxium": 44184,
            "Pyerite": 2758045,
            "Tritanium": 11225438,
            "Zydrine": 20828
        },
        "Maelstrom": {
            "Isogen": 172289,
            "Megacyte": 4712,
            "Mexallon": 711889,
            "Nocxium": 50800,
            "Pyerite": 2758000,
            "Tritanium": 12977222,
            "Zydrine": 21800
        },
        "Magnate": {
            "Isogen": 167,
            "Megacyte": 4,
            "Mexallon": 4000,
            "Nocxium": 67,
            "Pyerite": 6111,
            "Tritanium": 13889,
            "Zydrine": 14
        },
        "Maller": {
            "Isogen": 10000,
            "Megacyte": 322,
            "Mexallon": 42222,
            "Nocxium": 2556,
            "Pyerite": 144444,
            "Tritanium": 633333,
            "Zydrine": 1222
        },
        "Mammoth": {
            "Isogen": 1233,
            "Megacyte": 18,
            "Mexallon": 7333,
            "Nocxium": 344,
            "Pyerite": 18889,
            "Tritanium": 73333,
            "Zydrine": 112
        },
        "Maulus": {
            "Isogen": 56,
            "Mexallon": 2222,
            "Nocxium": 2,
            "Pyerite": 13333,
            "Tritanium": 15556,
            "Zydrine": 4
        },
        "Megathron": {
            "Isogen": 161433,
            "Megacyte": 5866,
            "Mexallon": 646889,
            "Nocxium": 40300,
            "Pyerite": 2637000,
            "Tritanium": 10321889,
            "Zydrine": 19112
        },
        "Merlin": {
            "Isogen": 589,
            "Megacyte": 4,
            "Mexallon": 3111,
            "Nocxium": 2,
            "Pyerite": 8889,
            "Tritanium": 21111,
            "Zydrine": 4
        },
        "Miasmos": {
            "Isogen": 711,
            "Megacyte": 16,
            "Mexallon": 5111,
            "Nocxium": 222,
            "Pyerite": 12222,
            "Tritanium": 67778,
            "Zydrine": 56
        },
        "Minmatar Shuttle": {
            "Tritanium": 2778
        },
        "Moa": {
            "Isogen": 9889,
            "Megacyte": 388,
            "Mexallon": 40000,
            "Nocxium": 2667,
            "Pyerite": 155556,
            "Tritanium": 611111,
            "Zydrine": 1266
        },
        "Myrmidon": {
            "Megacyte": 2666,
            "Mexallon": 233333,
            "Nocxium": 14444,
            "Pyerite": 711111,
            "Tritanium": 3166667,
            "Zydrine": 5556
        },
        "Naga": {
            "Isogen": 29112,
            "Megacyte": 2798,
            "Mexallon": 281076,
            "Nocxium": 20607,
            "Pyerite": 1020117,
            "Tritanium": 4073853,
            "Zydrine": 12012
        },
        "Navitas": {
            "Isogen": 278,
            "Mexallon": 3556,
            "Nocxium": 33,
            "Pyerite": 4667,
            "Tritanium": 18889,
            "Zydrine": 12
        },
        "Nereus": {
            "Isogen": 356,
            "Megacyte": 22,
            "Mexallon": 5111,
            "Nocxium": 244,
            "Pyerite": 13444,
            "Tritanium": 53333,
            "Zydrine": 56
        },
        "Nestor": {
            "Isogen": 188974,
            "Megacyte": 7528,
            "Mexallon": 733135,
            "Nocxium": 46632,
            "Pyerite": 3018046,
            "Tritanium": 12159425,
            "Zydrine": 20635
        },
        "Nightmare": {
            "Isogen": 180463,
            "Megacyte": 7249,
            "Mexallon": 722088,
            "Nocxium": 45309,
            "Pyerite": 2824745,
            "Tritanium": 11976870,
            "Zydrine": 20040
        },
        "Noctis": {
            "Isogen": 56348,
            "Megacyte": 3512,
            "Mexallon": 307707,
            "Nocxium": 27367,
            "Pyerite": 1040048,
            "Tritanium": 3721567,
            "Zydrine": 7640
        },
        "Omen": {
            "Isogen": 10667,
            "Megacyte": 412,
            "Mexallon": 37778,
            "Nocxium": 2889,
            "Pyerite": 133333,
            "Tritanium": 566667,
            "Zydrine": 1312
        },
        "Oracle": {
            "Isogen": 50749,
            "Megacyte": 3900,
            "Mexallon": 312647,
            "Pyerite": 1245336,
            "Tritanium": 5823060,
            "Zydrine": 9846
        },
        "Orthrus": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Osprey": {
            "Isogen": 8778,
            "Megacyte": 178,
            "Mexallon": 31111,
            "Nocxium": 1556,
            "Pyerite": 130000,
            "Tritanium": 544444,
            "Zydrine": 888
        },
        "Phantasm": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Porpoise": {
            "Isogen": 60000,
            "Megacyte": 3500,
            "Mexallon": 200000,
            "Nocxium": 20000,
            "Pyerite": 1200000,
            "Tritanium": 3400000,
            "Zydrine": 6500
        },
        "Probe": {
            "Isogen": 111,
            "Megacyte": 6,
            "Mexallon": 2778,
            "Nocxium": 78,
            "Pyerite": 10222,
            "Tritanium": 15556,
            "Zydrine": 34
        },
        "Procurer": {
            "Isogen": 31111,
            "Megacyte": 466,
            "Mexallon": 46667,
            "Nocxium": 3111,
            "Pyerite": 466667,
            "Tritanium": 1555556,
            "Zydrine": 1556
        },
        "Prophecy": {
            "Isogen": 34444,
            "Megacyte": 2222,
            "Mexallon": 211111,
            "Pyerite": 777778,
            "Tritanium": 4111111,
            "Zydrine": 6000
        },
        "Punisher": {
            "Isogen": 400,
            "Mexallon": 2889,
            "Nocxium": 89,
            "Pyerite": 6111,
            "Tritanium": 22778,
            "Zydrine": 34
        },
        "Rattlesnake": {
            "Isogen": 165417,
            "Megacyte": 6383,
            "Mexallon": 669424,
            "Nocxium": 41642,
            "Pyerite": 2746133,
            "Tritanium": 11278533,
            "Zydrine": 20205
        },
        "Raven": {
            "Isogen": 165911,
            "Megacyte": 6288,
            "Mexallon": 664444,
            "Nocxium": 41422,
            "Pyerite": 2652667,
            "Tritanium": 10608667,
            "Zydrine": 19756
        },
        "Retriever": {
            "Isogen": 37778,
            "Megacyte": 566,
            "Mexallon": 56667,
            "Nocxium": 3778,
            "Pyerite": 566667,
            "Tritanium": 1888889,
            "Zydrine": 1888
        },
        "Rifter": {
            "Isogen": 356,
            "Megacyte": 2,
            "Mexallon": 2222,
            "Nocxium": 133,
            "Pyerite": 6222,
            "Tritanium": 22778,
            "Zydrine": 34
        },
        "Rokh": {
            "Isogen": 175589,
            "Megacyte": 6288,
            "Mexallon": 736778,
            "Nocxium": 50500,
            "Pyerite": 3296000,
            "Tritanium": 12980667,
            "Zydrine": 25734
        },
        "Rupture": {
            "Isogen": 10222,
            "Megacyte": 422,
            "Mexallon": 38889,
            "Nocxium": 2556,
            "Pyerite": 166667,
            "Tritanium": 611111,
            "Zydrine": 1044
        },
        "Scorpion": {
            "Isogen": 166200,
            "Megacyte": 6688,
            "Mexallon": 607000,
            "Nocxium": 36011,
            "Pyerite": 2263111,
            "Tritanium": 10649667,
            "Zydrine": 16066
        },
        "Scythe": {
            "Isogen": 8556,
            "Megacyte": 156,
            "Mexallon": 34444,
            "Nocxium": 1222,
            "Pyerite": 140000,
            "Tritanium": 533333,
            "Zydrine": 822
        },
        "Sigil": {
            "Isogen": 611,
            "Megacyte": 26,
            "Mexallon": 6500,
            "Nocxium": 278,
            "Pyerite": 14444,
            "Tritanium": 47222,
            "Zydrine": 88
        },
        "Slasher": {
            "Isogen": 111,
            "Megacyte": 6,
            "Mexallon": 1667,
            "Nocxium": 100,
            "Pyerite": 5000,
            "Tritanium": 21111
        },
        "Stabber": {
            "Isogen": 10333,
            "Megacyte": 244,
            "Mexallon": 40000,
            "Nocxium": 2778,
            "Pyerite": 188889,
            "Tritanium": 511111,
            "Zydrine": 1244
        },
        "Stratios": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Succubus": {
            "Isogen": 401,
            "Mexallon": 2949,
            "Nocxium": 88,
            "Pyerite": 6133,
            "Tritanium": 22798,
            "Zydrine": 34
        },
        "Talos": {
            "Megacyte": 4120,
            "Mexallon": 359110,
            "Nocxium": 22472,
            "Pyerite": 1070630,
            "Tritanium": 4808627,
            "Zydrine": 8412
        },
        "Talwar": {
            "Isogen": 960,
            "Megacyte": 6,
            "Mexallon": 6000,
            "Nocxium": 360,
            "Pyerite": 16800,
            "Tritanium": 61500,
            "Zydrine": 92
        },
        "Tayra": {
            "Isogen": 1389,
            "Megacyte": 14,
            "Mexallon": 5833,
            "Nocxium": 278,
            "Pyerite": 15333,
            "Tritanium": 59444,
            "Zydrine": 88
        },
        "Tempest": {
            "Isogen": 161511,
            "Megacyte": 5466,
            "Mexallon": 647667,
            "Nocxium": 40278,
            "Pyerite": 2581444,
            "Tritanium": 10321889,
            "Zydrine": 19000
        },
        "Thorax": {
            "Isogen": 10556,
            "Megacyte": 288,
            "Mexallon": 38889,
            "Nocxium": 3000,
            "Pyerite": 144444,
            "Tritanium": 577778,
            "Zydrine": 1134
        },
        "Thrasher": {
            "Isogen": 1757,
            "Megacyte": 26,
            "Mexallon": 3977,
            "Pyerite": 11483,
            "Tritanium": 47907,
            "Zydrine": 180
        },
        "Tormentor": {
            "Isogen": 222,
            "Mexallon": 4444,
            "Nocxium": 44,
            "Pyerite": 2444,
            "Tritanium": 22222,
            "Zydrine": 22
        },
        "Tornado": {
            "Isogen": 78249,
            "Megacyte": 3694,
            "Mexallon": 264179,
            "Pyerite": 1093506,
            "Tritanium": 4383367,
            "Zydrine": 9494
        },
        "Tristan": {
            "Isogen": 333,
            "Megacyte": 2,
            "Mexallon": 3000,
            "Nocxium": 78,
            "Pyerite": 6333,
            "Tritanium": 23333,
            "Zydrine": 22
        },
        "Typhoon": {
            "Isogen": 164589,
            "Megacyte": 4800,
            "Mexallon": 624889,
            "Nocxium": 34656,
            "Pyerite": 2792889,
            "Tritanium": 10279111,
            "Zydrine": 18244
        },
        "Venture": {
            "Isogen": 444,
            "Mexallon": 744,
            "Nocxium": 50,
            "Pyerite": 7444,
            "Tritanium": 24889,
            "Zydrine": 22
        },
        "Vexor": {
            "Isogen": 10111,
            "Megacyte": 356,
            "Mexallon": 41111,
            "Nocxium": 2889,
            "Pyerite": 133333,
            "Tritanium": 622222,
            "Zydrine": 1312
        },
        "Vigil": {
            "Isogen": 278,
            "Megacyte": 8,
            "Mexallon": 2778,
            "Nocxium": 83,
            "Pyerite": 5111,
            "Tritanium": 14444,
            "Zydrine": 22
        },
        "Vigilant": {
            "Isogen": 9687,
            "Megacyte": 356,
            "Mexallon": 39907,
            "Nocxium": 2387,
            "Pyerite": 154233,
            "Tritanium": 614356,
            "Zydrine": 1202
        },
        "Vindicator": {
            "Isogen": 186361,
            "Megacyte": 6575,
            "Mexallon": 733304,
            "Nocxium": 45699,
            "Pyerite": 2930004,
            "Tritanium": 11716296,
            "Zydrine": 21186
        },
        "Worm": {
            "Isogen": 590,
            "Megacyte": 4,
            "Mexallon": 3127,
            "Nocxium": 2,
            "Pyerite": 9382,
            "Tritanium": 21071,
            "Zydrine": 4
        },
        "Wreathe": {
            "Isogen": 667,
            "Megacyte": 12,
            "Mexallon": 3889,
            "Nocxium": 133,
            "Pyerite": 9333,
            "Tritanium": 82222,
            "Zydrine": 88
        }
    }),
    capitalComponents : Object.freeze({
        "Capital Armor Plates": {
            "Isogen": 7109,
            "Megacyte": 304,
            "Mexallon": 43324,
            "Nocxium": 2141,
            "Pyerite": 111118,
            "Tritanium": 473141,
            "Zydrine": 682
        },
        "Capital Capacitor Battery": {
            "Isogen": 6440,
            "Megacyte": 280,
            "Mexallon": 39547,
            "Nocxium": 1841,
            "Pyerite": 107842,
            "Tritanium": 326973,
            "Zydrine": 660
        },
        "Capital Cargo Bay": {
            "Isogen": 3504,
            "Megacyte": 64,
            "Mexallon": 24616,
            "Nocxium": 998,
            "Pyerite": 72154,
            "Tritanium": 874902,
            "Zydrine": 286
        },
        "Capital Clone Vat Bay": {
            "Isogen": 8888,
            "Megacyte": 444,
            "Mexallon": 48471,
            "Nocxium": 2612,
            "Pyerite": 139591,
            "Tritanium": 640393,
            "Zydrine": 1082
        },
        "Capital Computer System": {
            "Isogen": 6581,
            "Megacyte": 296,
            "Mexallon": 44110,
            "Nocxium": 1858,
            "Pyerite": 111110,
            "Tritanium": 427708,
            "Zydrine": 648
        },
        "Capital Construction Parts": {
            "Isogen": 5104,
            "Megacyte": 212,
            "Mexallon": 37729,
            "Nocxium": 1530,
            "Pyerite": 93777,
            "Tritanium": 388208,
            "Zydrine": 538
        },
        "Capital Corporate Hangar Bay": {
            "Isogen": 9321,
            "Megacyte": 436,
            "Mexallon": 51297,
            "Nocxium": 2678,
            "Pyerite": 145664,
            "Tritanium": 583442,
            "Zydrine": 938
        },
        "Capital Doomsday Weapon Mount": {
            "Isogen": 11132,
            "Megacyte": 572,
            "Mexallon": 61980,
            "Nocxium": 3317,
            "Pyerite": 207776,
            "Tritanium": 841877,
            "Zydrine": 1108
        },
        "Capital Drone Bay": {
            "Isogen": 4499,
            "Megacyte": 172,
            "Mexallon": 33332,
            "Nocxium": 1258,
            "Pyerite": 83248,
            "Tritanium": 347163,
            "Zydrine": 486
        },
        "Capital Jump Bridge Array": {
            "Isogen": 17669,
            "Megacyte": 1134,
            "Mexallon": 75379,
            "Nocxium": 4176,
            "Pyerite": 278776,
            "Tritanium": 1121659,
            "Zydrine": 1488
        },
        "Capital Jump Drive": {
            "Isogen": 8617,
            "Megacyte": 444,
            "Mexallon": 49913,
            "Nocxium": 2249,
            "Pyerite": 142710,
            "Tritanium": 749916,
            "Zydrine": 908
        },
        "Capital Launcher Hardpoint": {
            "Isogen": 7692,
            "Megacyte": 344,
            "Mexallon": 44713,
            "Nocxium": 2359,
            "Pyerite": 110370,
            "Tritanium": 471653,
            "Zydrine": 860
        },
        "Capital Power Generator": {
            "Isogen": 7491,
            "Megacyte": 334,
            "Mexallon": 45621,
            "Nocxium": 2191,
            "Pyerite": 110413,
            "Tritanium": 510149,
            "Zydrine": 728
        },
        "Capital Propulsion Engine": {
            "Isogen": 6938,
            "Megacyte": 302,
            "Mexallon": 41994,
            "Nocxium": 2110,
            "Pyerite": 110416,
            "Tritanium": 457050,
            "Zydrine": 604
        },
        "Capital Sensor Cluster": {
            "Isogen": 6659,
            "Megacyte": 298,
            "Mexallon": 40877,
            "Nocxium": 1804,
            "Pyerite": 101026,
            "Tritanium": 443591,
            "Zydrine": 666
        },
        "Capital Shield Emitter": {
            "Isogen": 7269,
            "Megacyte": 332,
            "Mexallon": 43194,
            "Nocxium": 2033,
            "Pyerite": 104957,
            "Tritanium": 498880,
            "Zydrine": 696
        },
        "Capital Ship Maintenance Bay": {
            "Isogen": 9010,
            "Megacyte": 416,
            "Mexallon": 53312,
            "Nocxium": 2461,
            "Pyerite": 189942,
            "Tritanium": 576759,
            "Zydrine": 914
        },
        "Capital Siege Array": {
            "Isogen": 7916,
            "Megacyte": 428,
            "Mexallon": 47249,
            "Nocxium": 2438,
            "Pyerite": 125277,
            "Tritanium": 555658,
            "Zydrine": 908
        },
        "Capital Turret Hardpoint": {
            "Isogen": 7760,
            "Megacyte": 386,
            "Mexallon": 45010,
            "Nocxium": 2358,
            "Pyerite": 113826,
            "Tritanium": 546912,
            "Zydrine": 876
        }
    }),
    capitals : Object.freeze({
        "Erebus": {
            "Capital Power Generator": 222,
            "Capital Shield Emitter": 333,
            "Capital Propulsion Engine": 444,
            "Capital Turret Hardpoint": 444,
            "Capital Sensor Cluster": 444,
            "Capital Armor Plates": 444,
            "Capital Computer System": 444,
            "Capital Capacitor Battery": 556,
            "Capital Jump Drive": 556,
            "Capital Construction Parts": 556,
            "Capital Jump Bridge Array": 556,
            "Capital Clone Vat Bay": 556,
            "Capital Doomsday Weapon Mount": 556,
            "Capital Ship Maintenance Bay": 556,
            "Capital Corporate Hangar Bay": 556
        },
        "Revenant": {
            "Capital Propulsion Engine": 56,
            "Capital Armor Plates": 56,
            "Capital Power Generator": 56,
            "Capital Capacitor Battery": 111,
            "Capital Construction Parts": 111,
            "Capital Sensor Cluster": 222,
            "Capital Shield Emitter": 222,
            "Capital Jump Drive": 222,
            "Capital Computer System": 222,
            "Capital Ship Maintenance Bay": 222,
            "Capital Corporate Hangar Bay": 222,
            "Capital Drone Bay": 389
        },
        "Leviathan": {
            "Capital Propulsion Engine": 111,
            "Capital Power Generator": 111,
            "Capital Armor Plates": 222,
            "Capital Construction Parts": 333,
            "Capital Capacitor Battery": 444,
            "Capital Sensor Cluster": 556,
            "Capital Shield Emitter": 556,
            "Capital Jump Drive": 556,
            "Capital Computer System": 556,
            "Capital Launcher Hardpoint": 556,
            "Capital Jump Bridge Array": 556,
            "Capital Clone Vat Bay": 556,
            "Capital Doomsday Weapon Mount": 556,
            "Capital Ship Maintenance Bay": 556,
            "Capital Corporate Hangar Bay": 556
        },
        "Avatar": {
            "Capital Shield Emitter": 111,
            "Capital Propulsion Engine": 222,
            "Capital Sensor Cluster": 333,
            "Capital Computer System": 333,
            "Capital Construction Parts": 444,
            "Capital Turret Hardpoint": 556,
            "Capital Armor Plates": 556,
            "Capital Capacitor Battery": 556,
            "Capital Power Generator": 556,
            "Capital Jump Drive": 556,
            "Capital Jump Bridge Array": 556,
            "Capital Clone Vat Bay": 556,
            "Capital Doomsday Weapon Mount": 556,
            "Capital Ship Maintenance Bay": 556,
            "Capital Corporate Hangar Bay": 556
        },
        "Revelation": {
            "Capital Sensor Cluster": 6,
            "Capital Computer System": 6,
            "Capital Propulsion Engine": 7,
            "Capital Capacitor Battery": 7,
            "Capital Shield Emitter": 7,
            "Capital Corporate Hangar Bay": 8,
            "Capital Jump Drive": 9,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Armor Plates": 28,
            "Capital Power Generator": 28,
            "Capital Siege Array": 28,
            "Capital Turret Hardpoint": 37
        },
        "Naglfar": {
            "Capital Sensor Cluster": 6,
            "Capital Power Generator": 6,
            "Capital Propulsion Engine": 7,
            "Capital Capacitor Battery": 7,
            "Capital Corporate Hangar Bay": 8,
            "Capital Jump Drive": 9,
            "Capital Armor Plates": 11,
            "Capital Computer System": 13,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Shield Emitter": 24,
            "Capital Siege Array": 28,
            "Capital Turret Hardpoint": 37
        },
        "Moros": {
            "Capital Sensor Cluster": 6,
            "Capital Computer System": 6,
            "Capital Propulsion Engine": 7,
            "Capital Capacitor Battery": 7,
            "Capital Corporate Hangar Bay": 8,
            "Capital Jump Drive": 9,
            "Capital Shield Emitter": 11,
            "Capital Power Generator": 13,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Armor Plates": 24,
            "Capital Siege Array": 28,
            "Capital Turret Hardpoint": 37
        },
        "Phoenix": {
            "Capital Sensor Cluster": 6,
            "Capital Power Generator": 6,
            "Capital Propulsion Engine": 7,
            "Capital Armor Plates": 7,
            "Capital Capacitor Battery": 7,
            "Capital Corporate Hangar Bay": 8,
            "Capital Jump Drive": 9,
            "Capital Computer System": 13,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Shield Emitter": 28,
            "Capital Siege Array": 28,
            "Capital Launcher Hardpoint": 37
        },
        "Providence": {
            "Capital Propulsion Engine": 22,
            "Capital Cargo Bay": 83,
            "Capital Construction Parts": 53,
            "Capital Armor Plates": 17
        },
        "Charon": {
            "Capital Propulsion Engine": 11,
            "Capital Cargo Bay": 106,
            "Capital Construction Parts": 51,
            "Capital Armor Plates": 14
        },
        "Obelisk": {
            "Capital Propulsion Engine": 17,
            "Capital Cargo Bay": 89,
            "Capital Construction Parts": 56,
            "Capital Armor Plates": 16
        },
        "Fenrir": {
            "Capital Propulsion Engine": 28,
            "Capital Cargo Bay": 83,
            "Capital Construction Parts": 49,
            "Capital Armor Plates": 13
        },
        "Hel": {
            "Capital Capacitor Battery": 28,
            "Capital Construction Parts": 56,
            "Capital Sensor Cluster": 83,
            "Capital Computer System": 83,
            "Capital Armor Plates": 111,
            "Capital Power Generator": 167,
            "Capital Shield Emitter": 167,
            "Capital Propulsion Engine": 222,
            "Capital Jump Drive": 222,
            "Capital Ship Maintenance Bay": 222,
            "Capital Corporate Hangar Bay": 222,
            "Capital Drone Bay": 583
        },
        "Archon": {
            "Capital Capacitor Battery": 5,
            "Capital Shield Emitter": 5,
            "Capital Computer System": 5,
            "Capital Construction Parts": 6,
            "Capital Propulsion Engine": 7,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Power Generator": 11,
            "Capital Sensor Cluster": 16,
            "Capital Ship Maintenance Bay": 16,
            "Capital Armor Plates": 21,
            "Capital Drone Bay": 55
        },
        "Ragnarok": {
            "Capital Sensor Cluster": 222,
            "Capital Computer System": 222,
            "Capital Construction Parts": 222,
            "Capital Armor Plates": 333,
            "Capital Capacitor Battery": 333,
            "Capital Power Generator": 444,
            "Capital Shield Emitter": 444,
            "Capital Propulsion Engine": 556,
            "Capital Turret Hardpoint": 556,
            "Capital Jump Drive": 556,
            "Capital Jump Bridge Array": 556,
            "Capital Clone Vat Bay": 556,
            "Capital Doomsday Weapon Mount": 556,
            "Capital Ship Maintenance Bay": 556,
            "Capital Corporate Hangar Bay": 556
        },
        "Thanatos": {
            "Capital Capacitor Battery": 5,
            "Capital Construction Parts": 5,
            "Capital Propulsion Engine": 7,
            "Capital Computer System": 7,
            "Capital Shield Emitter": 8,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Power Generator": 10,
            "Capital Armor Plates": 15,
            "Capital Sensor Cluster": 16,
            "Capital Ship Maintenance Bay": 16,
            "Capital Drone Bay": 59
        },
        "Nyx": {
            "Capital Shield Emitter": 83,
            "Capital Power Generator": 111,
            "Capital Propulsion Engine": 139,
            "Capital Sensor Cluster": 139,
            "Capital Capacitor Battery": 139,
            "Capital Computer System": 139,
            "Capital Armor Plates": 167,
            "Capital Jump Drive": 222,
            "Capital Construction Parts": 222,
            "Capital Ship Maintenance Bay": 222,
            "Capital Corporate Hangar Bay": 222,
            "Capital Drone Bay": 694
        },
        "Chimera": {
            "Capital Armor Plates": 5,
            "Capital Capacitor Battery": 5,
            "Capital Power Generator": 5,
            "Capital Construction Parts": 5,
            "Capital Propulsion Engine": 7,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Computer System": 11,
            "Capital Sensor Cluster": 16,
            "Capital Ship Maintenance Bay": 16,
            "Capital Shield Emitter": 21,
            "Capital Drone Bay": 55
        },
        "Wyvern": {
            "Capital Propulsion Engine": 56,
            "Capital Armor Plates": 56,
            "Capital Power Generator": 56,
            "Capital Capacitor Battery": 83,
            "Capital Construction Parts": 111,
            "Capital Sensor Cluster": 222,
            "Capital Shield Emitter": 222,
            "Capital Jump Drive": 222,
            "Capital Computer System": 222,
            "Capital Ship Maintenance Bay": 222,
            "Capital Corporate Hangar Bay": 222,
            "Capital Drone Bay": 417
        },
        "Aeon": {
            "Capital Sensor Cluster": 28,
            "Capital Computer System": 28,
            "Capital Shield Emitter": 56,
            "Capital Propulsion Engine": 111,
            "Capital Construction Parts": 167,
            "Capital Armor Plates": 222,
            "Capital Capacitor Battery": 222,
            "Capital Power Generator": 222,
            "Capital Jump Drive": 222,
            "Capital Ship Maintenance Bay": 222,
            "Capital Corporate Hangar Bay": 222,
            "Capital Drone Bay": 500
        },
        "Nidhoggur": {
            "Capital Capacitor Battery": 5,
            "Capital Construction Parts": 5,
            "Capital Propulsion Engine": 7,
            "Capital Power Generator": 7,
            "Capital Armor Plates": 8,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Computer System": 10,
            "Capital Shield Emitter": 15,
            "Capital Sensor Cluster": 16,
            "Capital Ship Maintenance Bay": 16,
            "Capital Drone Bay": 59
        },
        "Rorqual": {
            "Capital Drone Bay": 6,
            "Capital Armor Plates": 7,
            "Capital Propulsion Engine": 9,
            "Capital Sensor Cluster": 9,
            "Capital Shield Emitter": 9,
            "Capital Capacitor Battery": 11,
            "Capital Power Generator": 11,
            "Capital Jump Drive": 11,
            "Capital Corporate Hangar Bay": 17,
            "Capital Cargo Bay": 22,
            "Capital Computer System": 33,
            "Capital Clone Vat Bay": 33,
            "Capital Ship Maintenance Bay": 33,
            "Capital Construction Parts": 44
        },
        "Orca": {
            "Capital Cargo Bay": 38,
            "Capital Computer System": 7,
            "Capital Construction Parts": 16,
            "Capital Ship Maintenance Bay": 7,
            "Capital Corporate Hangar Bay": 4,
            "Capital Sensor Cluster": 4,
            "Capital Capacitor Battery": 9
        },
        "Apostle": {
            "Capital Drone Bay": 5,
            "Capital Propulsion Engine": 7,
            "Capital Sensor Cluster": 8,
            "Capital Shield Emitter": 8,
            "Capital Jump Drive": 8,
            "Capital Computer System": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Capacitor Battery": 17,
            "Capital Power Generator": 17,
            "Capital Armor Plates": 25,
            "Capital Siege Array": 25
        },
        "Minokawa": {
            "Capital Drone Bay": 5,
            "Capital Propulsion Engine": 7,
            "Capital Sensor Cluster": 8,
            "Capital Armor Plates": 8,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Power Generator": 9,
            "Capital Construction Parts": 13,
            "Capital Ship Maintenance Bay": 16,
            "Capital Capacitor Battery": 17,
            "Capital Computer System": 17,
            "Capital Shield Emitter": 25,
            "Capital Siege Array": 25
        },
        "Ninazu": {
            "Capital Drone Bay": 5,
            "Capital Propulsion Engine": 7,
            "Capital Sensor Cluster": 8,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Power Generator": 11,
            "Capital Shield Emitter": 12,
            "Capital Construction Parts": 13,
            "Capital Computer System": 15,
            "Capital Ship Maintenance Bay": 16,
            "Capital Capacitor Battery": 17,
            "Capital Armor Plates": 21,
            "Capital Siege Array": 25
        },
        "Lif": {
            "Capital Drone Bay": 5,
            "Capital Propulsion Engine": 7,
            "Capital Sensor Cluster": 8,
            "Capital Jump Drive": 8,
            "Capital Corporate Hangar Bay": 8,
            "Capital Computer System": 10,
            "Capital Armor Plates": 12,
            "Capital Construction Parts": 13,
            "Capital Power Generator": 16,
            "Capital Ship Maintenance Bay": 16,
            "Capital Capacitor Battery": 17,
            "Capital Shield Emitter": 21,
            "Capital Siege Array": 25
        },
        "Vehement": {
            "Capital Sensor Cluster": 84,
            "Capital Computer System": 84,
            "Capital Propulsion Engine": 98,
            "Capital Capacitor Battery": 98,
            "Capital Corporate Hangar Bay": 112,
            "Capital Jump Drive": 126,
            "Capital Shield Emitter": 154,
            "Capital Power Generator": 182,
            "Capital Construction Parts": 182,
            "Capital Ship Maintenance Bay": 224,
            "Capital Armor Plates": 336,
            "Capital Siege Array": 392,
            "Capital Turret Hardpoint": 518,
            "Serpentis Modified Capital Microprocessor": 2000
        },
        "Vendetta": {
            "Capital Capacitor Battery": 360,
            "Capital Propulsion Engine": 480,
            "Capital Computer System": 480,
            "Capital Shield Emitter": 600,
            "Capital Construction Parts": 600,
            "Capital Ship Maintenance Bay": 600,
            "Capital Corporate Hangar Bay": 600,
            "Capital Power Generator": 720,
            "Capital Jump Drive": 960,
            "Capital Sensor Cluster": 1200,
            "Capital Armor Plates": 1200,
            "Serpentis Modified Capital Microprocessor": 4000,
            "Capital Drone Bay": 4200
        },
        "Vanquisher": {
            "Capital Computer System": 630,
            "Capital Sensor Cluster": 945,
            "Capital Corporate Hangar Bay": 945,
            "Capital Propulsion Engine": 1260,
            "Capital Capacitor Battery": 1260,
            "Capital Jump Drive": 1260,
            "Capital Shield Emitter": 1575,
            "Capital Clone Vat Bay": 1575,
            "Capital Power Generator": 1890,
            "Capital Construction Parts": 1890,
            "Capital Ship Maintenance Bay": 2205,
            "Capital Jump Bridge Array": 3150,
            "Capital Armor Plates": 3465,
            "Capital Turret Hardpoint": 4725,
            "Capital Doomsday Weapon Mount": 4725,
            "Serpentis Modified Capital Microprocessor": 8000
        },
        "Dagon": {
            "Capital Drone Bay": 6,
            "Capital Propulsion Engine": 8,
            "Capital Sensor Cluster": 10,
            "Capital Shield Emitter": 10,
            "Capital Jump Drive": 10,
            "Capital Computer System": 10,
            "Capital Corporate Hangar Bay": 10,
            "Capital Construction Parts": 16,
            "Capital Ship Maintenance Bay": 19,
            "Capital Capacitor Battery": 20,
            "Capital Power Generator": 21,
            "Capital Armor Plates": 30,
            "Capital Siege Array": 30
        },
        "Chemosh": {
            "Capital Sensor Cluster": 7,
            "Capital Computer System": 7,
            "Capital Propulsion Engine": 9,
            "Capital Capacitor Battery": 9,
            "Capital Shield Emitter": 9,
            "Capital Corporate Hangar Bay": 10,
            "Capital Jump Drive": 11,
            "Capital Power Generator": 16,
            "Capital Construction Parts": 16,
            "Capital Ship Maintenance Bay": 19,
            "Capital Armor Plates": 33,
            "Capital Siege Array": 33,
            "Capital Turret Hardpoint": 44
        },
        "Molok": {
            "Capital Shield Emitter": 133,
            "Capital Propulsion Engine": 266,
            "Capital Sensor Cluster": 400,
            "Capital Computer System": 400,
            "Capital Construction Parts": 533,
            "Capital Turret Hardpoint": 667,
            "Capital Armor Plates": 667,
            "Capital Capacitor Battery": 667,
            "Capital Power Generator": 667,
            "Capital Jump Drive": 667,
            "Capital Jump Bridge Array": 667,
            "Capital Clone Vat Bay": 667,
            "Capital Doomsday Weapon Mount": 667,
            "Capital Ship Maintenance Bay": 667,
            "Capital Corporate Hangar Bay": 667
        },
        "Loggerhead": {
            "Capital Drone Bay": 6,
            "Capital Propulsion Engine": 8,
            "Capital Sensor Cluster": 10,
            "Capital Armor Plates": 10,
            "Capital Jump Drive": 10,
            "Capital Corporate Hangar Bay": 10,
            "Capital Power Generator": 11,
            "Capital Construction Parts": 16,
            "Capital Ship Maintenance Bay": 19,
            "Capital Capacitor Battery": 20,
            "Capital Computer System": 20,
            "Capital Shield Emitter": 30,
            "Capital Siege Array": 30
        },
        "Caiman": {
            "Capital Sensor Cluster": 7,
            "Capital Power Generator": 7,
            "Capital Propulsion Engine": 8,
            "Capital Armor Plates": 8,
            "Capital Capacitor Battery": 8,
            "Capital Corporate Hangar Bay": 9,
            "Capital Jump Drive": 10,
            "Capital Computer System": 14,
            "Capital Construction Parts": 14,
            "Capital Ship Maintenance Bay": 18,
            "Capital Drone Bay": 20,
            "Capital Shield Emitter": 31,
            "Capital Siege Array": 31,
            "Capital Launcher Hardpoint": 41
        },
        "Komodo": {
            "Capital Propulsion Engine": 133,
            "Capital Power Generator": 133,
            "Capital Armor Plates": 266,
            "Capital Drone Bay": 400,
            "Capital Construction Parts": 400,
            "Capital Capacitor Battery": 533,
            "Capital Sensor Cluster": 667,
            "Capital Shield Emitter": 667,
            "Capital Jump Drive": 667,
            "Capital Computer System": 667,
            "Capital Launcher Hardpoint": 667,
            "Capital Jump Bridge Array": 667,
            "Capital Clone Vat Bay": 667,
            "Capital Doomsday Weapon Mount": 667,
            "Capital Ship Maintenance Bay": 667,
            "Capital Corporate Hangar Bay": 667
        }
    }),
    minerals : Object.freeze([
        "Tritanium",
        "Pyerite",
        "Mexallon",
        "Isogen",
        "Nocxium",
        "Zydrine",
        "Megacyte"
    ]),
    iceMinerals : Object.freeze([
        "Heavy Water",
        "Liquid Ozone",
        "Strontium Clathrates",
        "Oxygen Isotopes",
        "Helium Isotopes",
        "Hydrogen Isotopes",
        "Nitrogen Isotopes"
    ]),
    buySellAll : Object.freeze({ }),

    getFromDocument : function (elementID, defaultValue)
    {
        let temp = document.getElementById(elementID).value.replace(/,/g, "") * 1;
        return isNaN(temp) ? defaultValue : temp;
    },
    getMarketDataFromDropdown : function (elementID)
    {
        let e = document.getElementById(elementID);
        return utilities.buySellAll[e.options[e.selectedIndex].value];
    },
    addCommas : function(data)
    {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    addRow : function (colList)
    {
        newRow = "";
        colList.forEach(element => newRow += "<th>" + element + "</th>");
        return "<tr>" + newRow + "</tr>";
    }
}
