class Database():
    Stations = ["DAPD", "KK", "KASW", "PP"]
    Coordintes = {
        "KK" : [18.56280069295126, 73.8410217369799],
        "DAPD" : [18.580781492393537, 73.83267470256034],
        "KASW" : [18.60756611082759, 73.82091589824591],
        "PP" : [18.623475543217594, 73.80198692335705],
        "CHC" : [18.639758407173957, 73.79184701808364],
        "AKURDI" : [18.64857867300337, 73.7647448786188],
    }

    CodeToName = {
        "KK" : "Khadki",
        "DAPD" : "Dapodi",
        "KASW" : "Kasarwadi" ,
        "PP" : "Pimpri"
    }

class StationDetails():
    pass

class TrainDetails():
    Train = ["11011", "12345", "32782"]

    NumberToName = {
        "11011" : "Temp Express",
        "12345" : "Covid Special",
        "32782" : "Superfast Express"
    }
