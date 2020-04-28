import React, {useState, useContext} from "react";
import {axiosAuth} from '../utils/axiosAuth';
import { JourneyContext, UserContext } from '../../context/GuidrContext'




const TripCard = (props) => {

//   console.log(props)
    const {journeys} = useContext(JourneyContext)
    const [newTrip, setNewTrip] = useState(journeys)
    const addNewTrip = e => {
        setNewTrip([...newTrip, e])
    }

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

    const addTrip = {
      ...newEvent
    };
    addNewTrip(addTrip);
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

            <div className="trip-form">
                <form onSubmit={submitForm}>
                    <h1 style={{paddingBottom: "5px"}}>Add New Trip</h1>
                    <div className="f-name">
                        <label>Trip Name:</label>
                        <input className="trip-name"
                            type="text" 
                            name="title" 
                            value={newEvent.title}
                            onChange={changeHandler} 
                        />

                        <label>Describe your trip:</label> 
                        <textarea className="desc"
                            type="note"
                            name="description" 
                            value={newEvent.description}
                            onChange={changeHandler} 
                        />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                            <label>Start Date:</label> 
                            <input className="date-name"
                                type="date" 
                                name="start_date" 
                                value={newEvent.start_date}
                                onChange={changeHandler} 
                            />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                        <label>End Date:</label> 
                        <input className="date-name"
                            type="date" 
                            name="end_date"
                            value={newEvent.end_date}
                            onChange={changeHandler} 
                        />
                        </div>
                        </div>

                        <label>Type of Trip:</label> 
                        <input className="trip-name"
                            type="text" 
                            name="type" 
                            placeholder="What kind of trip?" 
                            value={newEvent.type}
                            onChange={changeHandler} 
                        />
                         <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <label style={{paddingBottom: '3%'}}>Number of Hours:</label> 
                        <input className="time-name"
                            type="number" 
                            name="duration_hours"
                            value={newEvent.duration_hours}
                            onChange={changeHandler} 
                        />

                        <label style={{paddingBottom: '3%'}}>Number of Days:</label> 
                        <input className="time-name"
                            type="number" 
                            name="duration_days"
                            value={newEvent.duration_days}
                            onChange={changeHandler} 
                        />
                        </div>
                        <button 
                        className="ui blue button"
                        style={{background: '#096852', color: 'white'}}
                        type="submit">Upload!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TripCard;