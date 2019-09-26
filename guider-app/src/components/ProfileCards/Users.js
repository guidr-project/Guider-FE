import React, {useEffect} from 'react'
import UserCard from "./UserCard";
import "../../Users.css";

import { useContext } from 'react'
import { JourneyContext } from '../../context/GuidrContext'

export const Users = props => {

    useEffect(() => {props.getJourneys()}, [])
    const {journeys} = useContext(JourneyContext)

    // console.log(journeys)

    return (
        <div className="card-container">
            <div className='testingDiv' >

                {journeys.map((user, index) => {
                    // console.log(user)
                    return (
                        <UserCard key={index}
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
                        hours={user.duration_hours}/>
                    )
                })}
            </div>
        </div>
    )
}