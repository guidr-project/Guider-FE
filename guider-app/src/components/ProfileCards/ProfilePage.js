import React from "react";


export const ProfilePage = props => {

    console.log(props)


    return(
        <div className='profilePage'>
            <img className="forest" src="https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            alt="woods"/>
            <div className="userInfo">
                <h1>{props.full_name}</h1>
                <h2>{props.username}</h2>
                <p>Title: {props.title}</p>
                <p>Age: {props.age}</p>
                <p>How long have you been a Guidr: {props.experience_duration}</p>
                <p>Tell us about yourself: {props.description}</p>
                <email>Contact Email: {props.email}</email>


                <br/>
                <p>If you havent yet, come fill out your profile!</p>
                <button className="ui blue button">kjersflkjhgfrdkljhrgdf</button>
            </div>

        </div>
    )
}