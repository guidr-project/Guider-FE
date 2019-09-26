import React from "react";
import { axiosAuth } from '../utils/axiosAuth'


function UserCard(props) {
    // console.log(props)
    return (
        <div className="user-card">
            <div className="basic">
                <div className="card-info" key={props.id}>
                    <h2>Trip: <span>{props.title}</span></h2>
                    <p>Start Date: <span>{props.startDate}</span></p>
                    <p>End Date: <span>{props.endDate}</span></p>
                    <p><span>{props.description}</span></p>
                    <p><span>{props.type}</span></p>
                    <p>How many hours? <span>{props.hours}</span></p>
                    <p>How many days?: <span>{props.days}</span></p>
                </div>
                <div className="extra content">
                    <button className="ui blue button">Edit</button>
                    <button className="ui red button" onClick={() => { 
                        if(props.user_id == localStorage.getItem('id')){
                        return axiosAuth().delete(`https://guidr-project.herokuapp.com/trips/${props.id}`)
                              .then(res => props.getJourneys())
                              .catch(error => console.log(error))
                            }}
                        }>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;