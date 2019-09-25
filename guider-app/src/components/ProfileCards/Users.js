import React, {useState, useEffect} from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default function Users() {
    const [users, setUsers] = useState([]);

    const getJourneys = () =>  {
    axios
    .get("https://guidr-project.herokuapp.com/trips")
    .then(response => {
        // const char = response.data;
        setUsers(response.data);
    })
    .catch(error => {
        console.log("Sorry, you've got an error", error)
    });
}

    useEffect(() => {
        getJourneys()
    }, [])

    return (
        <div className="card-container">
            <img className="forest" img src="https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="woods"/>
            <div className="entry">
                {users.map((user, index) => {
                    console.log(user)
                    return (
                        <UserCard key={index}
                        title={user.description}
                        startDate={user.start_date}
                        endDate={user.end_date}
                        type={user.type}/>
                    )
                })}
            </div>
        </div>
    )
}