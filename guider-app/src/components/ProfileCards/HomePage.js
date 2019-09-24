import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import TripCard from './TripCard'


export const HomePage = () => {

    return(
        <div>
            <div>
                <Header />
            </div>

            <div>
                <Route exact path='/homepage' component={TripCard} />

            </div>
            
            

        </div>
    )
}