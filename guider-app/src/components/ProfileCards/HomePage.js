import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import TripCard from './TripCard'
import UserCard from './UserCard'


export const HomePage = () => {

    return(
        <div>
            <div>
                <Header />
            </div>

            <div>
                <Route exact path='/homepage' component={TripCard} />

                <Route exact path='/homepage/alljourneys' component={UserCard} />

            </div>
            
            

        </div>
    )
}