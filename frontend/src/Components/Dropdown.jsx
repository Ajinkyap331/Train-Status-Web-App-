import React from 'react'
import './Dropdown.css'

export const DropDownStation = ({ StationOnDD }) => {
    return (
        <div className='dropdown-station'>
            {
                StationOnDD.map(e => {
                    return (
                        <div className='dropdown'>
                            <p className='dropdown-code'>{e[0]}</p>
                            <p className='dropdown-name'>{e[1]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const DropDownTrain = ({ TrainOnDD }) => {
    return (
        <div className='dropdown-train'>
            {
                TrainOnDD.map(e => {
                    return (
                        <div className='dropdown'>
                            <p className='dropdown-code'>{e[0]}</p>
                            <p className='dropdown-name'>{e[1]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}