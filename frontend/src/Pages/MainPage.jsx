import React, { useEffect, useState } from 'react'
import './Mainpage.css'
import { GetAllStationsData, GetCodeToStation, GetAllTrains, GetNumberToName } from '../Database/Data'
import { DropDownStation, DropDownTrain } from '../Components/Dropdown'
import '../Components/Input.css'

export const MainPage = () => {

    const [Stations, setStations] = useState(undefined)
    const [StationToCode, setStationToCode] = useState(undefined)
    const [StationOnDD, setStationonDD] = useState([])
    const [AllTrain, setAllTrains] = useState([])
    const [NumberToName, setNumberTOName] = useState([])
    const [TrainOnDD, setTrainonDD] = useState([])

    useEffect(() => {
        GetAllStationsData(setStations)
        GetCodeToStation(setStationToCode)
        GetAllTrains(setAllTrains)
        GetNumberToName(setNumberTOName)
    }, [])


    const HandleDropDownStation = (inp) => {

        inp = inp.toLowerCase()
        var station1 = []
        document.querySelector(".dropdown-station").style.padding = 0
        setStationonDD([])
        Stations.map(e => {
            const station = StationToCode[e].toLowerCase()
            const code = e.toLowerCase()
            if ((station.includes(inp) || code.includes(inp)) && inp != "") {
                station1.push([e, StationToCode[e]])
                console.log(station1)
                setStationonDD(station1)
                
            }
        })
        console.log(StationOnDD.length)
        if (StationOnDD.length != 0)
                document.querySelector(".dropdown-station").style.padding = "10px"
            // console.log(true)
    }

    const HandleDropDownTrain = (inp) => {
        document.querySelector(".dropdown-train").style.padding = "0"
        inp = inp.toLowerCase()
        var train1 = []
        setTrainonDD([])
        AllTrain.map(e => {
            const train = NumberToName[e].toLowerCase()
            const code = e.toLowerCase()
            if ((train.includes(inp) || code.includes(inp)) && inp != "") {
                train1.push([e, NumberToName[e]])
                console.log(train1)
                setTrainonDD(train1)
            }
        })
        if (TrainOnDD != [])
            document.querySelector(".dropdown-train").style.padding = "10px"
    }


    return (
        <div className='mainpage'>
            <section className='input-container'>
                <p>Where are You</p>
                <input className="inp1" placeholder="Station Name" onChange={e => HandleDropDownStation(e.target.value)} />
            </section>
            <DropDownStation StationOnDD={StationOnDD} />
            <section className='input-container'>
                <p>Track Your Train</p>
                <input className="inp1" placeholder="Train Name or Number" onChange={e => HandleDropDownTrain(e.target.value)} />
            </section>
            <DropDownTrain TrainOnDD={TrainOnDD} />
        </div>
    )
}
