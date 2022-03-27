import axios from "axios"

export const GetAllStationCoordinates = () => {
    axios.get("http://127.0.0.1:5000/allstationcoordinates").then(response => {
        // console.log(response.data)
        return response.data;
    })
}

export const GetAllStationsData = (set) => {
    axios.get("http://127.0.0.1:5000/allStationsData").then(repsonse => {
        // console.log(repsonse.data);
        set(repsonse.data);
    })
}

export const GetCodeToStation = (set) => {
    axios.get("http://127.0.0.1:5000/codetostation").then(repsonse => {
        set(repsonse.data)
    })
}

export const GetAllTrains = (set) => {
    axios.get("http://127.0.0.1:5000/alltrains").then(reponse => {
        set(reponse.data)
    })
}

export const GetNumberToName = (set) => {
    axios.get("http://127.0.0.1:5000/numbertoname").then(repsonse => {
        set(repsonse.data)
    })
}