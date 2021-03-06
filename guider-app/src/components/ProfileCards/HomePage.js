import React, { useState } from "react";
import { Route } from 'react-router-dom'

import Header from './Header'
import TripCard from './TripCard'
import {Users} from './Users'
import {YourTrips} from './YourTrips'
import {ProfilePage} from './ProfilePage'

import { useContext } from 'react'
import { JourneyContext, UserContext } from '../../context/GuidrContext'


export const HomePage = props => {
    // console.log(props)
    
    const {journeys} = useContext(JourneyContext)
    const {user} = useContext(UserContext)


    return(
        <div>
            <div>
                <Header />
            </div>

            <div>
                {/* <Route exact path='/homepage' render={() => <TripCard {...props} getJourneys={props.getJourneys} />} /> */}

                <Route exact path='/homepage' render={() => <YourTrips {...journeys} getJourneys={props.getJourneys} />} />

                <Route exact path='/homepage/alljourneys' render={() => <Users {...journeys} getJourneys={props.getJourneys} />} />

                <Route exact path='/homepage/profile' render={() => <ProfilePage {...user} getUser={props.getUser} />} />
            </div>
            
            

        </div>
    )
}