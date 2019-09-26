import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import TripCard from './TripCard'
import {Users} from './Users'

import { useContext } from 'react'
import { JourneyContext } from '../../context/GuidrContext'


export const HomePage = props => {

    
    const {journeys} = useContext(JourneyContext)
    console.log(journeys)

    return(
        <div>
            <div>
                <Header />
            </div>

            <div>
                <Route exact path='/homepage' component={TripCard} />

                <Route exact path='/homepage/alljourneys' render={() => <Users {...journeys} getJourneys={props.getJourneys} />} />
            </div>
            
            

        </div>
    )
}