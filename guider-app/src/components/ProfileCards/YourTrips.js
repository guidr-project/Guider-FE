import React, {useEffect} from 'react'
import UserCard from "./UserCard";


import { useContext } from 'react'
import { JourneyContext } from '../../context/GuidrContext'

export const YourTrips = props => {

    useEffect(() => {props.getJourneys()}, [])
    const {journeys} = useContext(JourneyContext)

    // console.log(journeys)

    return (
        <div className="card-container">
            <img className="forest" src="https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="woods"/>
            <div >

                {journeys.map(user => { if(user.user_id == localStorage.getItem('id')){
                        return (
                            <UserCard key={user.id}
                            getJourneys={props.getJourneys}
                            user_id={user.user_id}
                            id={user.id}
                            title={user.title}
                            description={user.description}
                            startDate={user.start_date}
                            endDate={user.end_date}
                            type={user.type}
                            days={user.duration_days}
                            hours={user.duration_hours}/>
                        )
                    } else {
                        return(
                            <div>
                                <h3>Loading...</h3>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}