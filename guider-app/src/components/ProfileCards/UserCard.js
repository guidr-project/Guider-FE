import React from "react";
import { axiosAuth } from '../utils/axiosAuth'


function UserCard(props) {
    // console.log(props)
    return (
        <div className="user-card" style={{ 
            border: "1px solid #202020",
            backgroundColor: "white",
            opacity:'1'}}>
            <div className="basic">
                <div className="card-info" key={props.id}>
                    <h2>{props.title}</h2>
                    {props.name}
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                    <p>{props.description}</p>
                    <p>{props.type}</p>
                    <p>Duration: {props.days} days {props.hours} hours.</p>
                </div>
                {props.edit ? <div className="extra content">
                    <button className="ui blue button" style={{background: '#096852', color: 'white'}}>Edit</button>
                    <button className="ui red button" onClick={() => { 
                        if(props.user_id === localStorage.getItem('id')){
                        return axiosAuth().delete(`https://blooming-anchorage-30017.herokuapp.com/trips/${props.id}`)
                              .then(res => props.getJourneys())
                              .catch(error => console.log(error))
                            }}
                        } >Delete</button>
                </div> : ''}
            </div>
        </div>
    )
}

export default UserCard;