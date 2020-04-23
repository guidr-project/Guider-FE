import React, {useState} from "react";
import {axiosAuth} from '../utils/axiosAuth';




const TripCard = (props) => {

//   console.log(props)

  const[newEvent, setNewEvent] = useState(
    {
        title: "", 
        description: "", 
        start_date: "",
        end_date: "", 
        type: "", 
        duration_days: "",
        duration_hours: ""
    }
  );
  
  const changeHandler = (event) => {
    // console.log(event.target.value);
    setNewEvent({...newEvent, [event.target.name]: event.target.value});
  };
  
  

  const submitForm = (event) => {
    // console.log(newEvent)
    event.preventDefault();

    axiosAuth().post(`https://blooming-anchorage-30017.herokuapp.com/users/${localStorage.getItem('id')}/trips`, newEvent)
      .then(res => props.history.push('/homepage/alljourneys'))
      .catch(error => console.log(error));

    const addNewTrip = {
      ...newEvent
    };
    props.addNewTrip(addNewTrip);
    setNewEvent(    
    {
        title: "", 
        description: "", 
        start_date: "",
        end_date: "", 
        type: "", 
        duration_hours: "",
        duration_days: ""
    });
  };


  
    return (
        <div className="trip-container">
            
            <img className="mountains" img src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="snowy"/>

            <div className="trip-form">
                <form onSubmit={submitForm}>
                    <div className="f-name">
                        <label>Trip Name</label>
                        <input className="trip-name"
                            type="text" 
                            name="title" 
                            placeholder="Name of Trip" 
                            value={newEvent.title}
                            onChange={changeHandler} 
                        />

                        <label>Give a description of your trip!</label> 
                        <textarea className="desc"
                            type="note"
                            name="description" 
                            value={newEvent.description}
                            onChange={changeHandler} 
                        />

                        <label>Start Date</label> 
                        <input className="date-name"
                            type="date" 
                            name="start_date" 
                            value={newEvent.start_date}
                            onChange={changeHandler} 
                        />

                        <label>End Date</label> 
                        <input className="date-name"
                            type="date" 
                            name="end_date"
                            value={newEvent.end_date}
                            onChange={changeHandler} 
                        />

                        <label>Type of Trip</label> 
                        <input className="trip-name"
                            type="text" 
                            name="type" 
                            placeholder="What kind of trip?" 
                            value={newEvent.type}
                            onChange={changeHandler} 
                        />

                        <label>Number of Hours</label> 
                        <input className="date-name"
                            type="number" 
                            name="duration_hours"
                            value={newEvent.duration_hours}
                            onChange={changeHandler} 
                        />

                        <label>Number of Days</label> 
                        <input className="date-name"
                            type="number" 
                            name="duration_days"
                            value={newEvent.duration_days}
                            onChange={changeHandler} 
                        />

                        <button className="tripbutton" type="submit">Upload!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TripCard;