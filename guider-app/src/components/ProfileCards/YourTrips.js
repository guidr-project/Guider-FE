import React, {useEffect} from 'react'
import UserCard from "./UserCard";
import "../../Users.css";
import TripCard from './TripCard.js'

import { useContext } from 'react'
import { JourneyContext } from '../../context/GuidrContext'

export const YourTrips = props => {

    useEffect(() => {
        let j = props.getJourneys()
        // console.log('j',j)

    }, [])
    const {journeys} = useContext(JourneyContext)
    console.log('props',props)

    // console.log(journeys)

    return (
        <div className="card-container">
            <TripCard/>
            <div className='trip-con'>

                {journeys.map(user => { if(user.user_id == localStorage.getItem('id')){
                        return (
                            <UserCard key={user.id}
                            getJourneys={props.getJourneys}
                            user_id={user.user_id}
                            id={user.id}
                            title={user.title}
                            name={user.full_name}
                            description={user.description}
                            startDate={user.start_date}
                            endDate={user.end_date}
                            type={user.type}
                            days={user.duration_days}
                            hours={user.duration_hours}
                            edit = {true}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}