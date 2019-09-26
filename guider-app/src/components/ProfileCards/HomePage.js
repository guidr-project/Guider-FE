import React, { useState } from "react";
import { Route } from 'react-router-dom'

import Header from './Header'
import TripCard from './TripCard'
import {Users} from './Users'

import { useContext } from 'react'
import { JourneyContext } from '../../context/GuidrContext'


export const HomePage = props => {

    
    const {journeys} = useContext(JourneyContext)
    // console.log(journeys)

    const [newTrip, setNewTrip] = useState(journeys)
    const addNewTrip = e => {
        setNewTrip([...newTrip, e])
    }

    return(
        <div>
            <div>
                <Header />
            </div>

            <div>
                <Route exact path='/homepage' render={() => <TripCard {...props} addNewTrip={addNewTrip} getJourneys={props.getJourneys} />} />

                <Route exact path='/homepage/alljourneys' render={() => <Users {...journeys} getJourneys={props.getJourneys} />} />
            </div>
            
            

        </div>
    )
}