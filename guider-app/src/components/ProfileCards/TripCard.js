import React, {useState, useEffect} from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import Switch from "./Switch";
import { TextArea } from "semantic-ui-react";
import axios from "axios";

const TripCard = ({values, errors, touched, status}) => {
    const [trips, setTrips] = useState([]);
    const [value, setValue] = useState(false);

    useEffect(() => {
        if (status) {
            setTrips([...trips, status])
        }
    },[status]);
    
    return (
        <div className="trip-container">
            <img className="mountains" img src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="snowy"/>

            <div className="trip-form">
                <Form>
                    <div className="f-name">
                        <label htmlFor="tripName"><h2>Trip Name</h2></label>
                            <Field className="trip-name" type="text" name="tripName" placeholder="Name of Trip"/>
                            {touched.tripName && errors.tripName && (
                                <p className="errors">{errors.tripName}</p>
                            )}

                        <label htmlFor="description"><h2>Give a description of your trip!</h2></label>
                            <TextArea className="desc" type="note" name="description" placeholder="Description of Trip"/>
                            {touched.description && errors.description && (
                                <p className="errors">{errors.description}</p>
                            )}

                        <label htmlFor="date"><h2>Dates?</h2></label>
                            <Field className="date-name" type="date" name="date" placeholder="Date of Trip"/>
                            {touched.date && errors.date && (
                                <p className="errors">{errors.description}</p>
                            )}

                        <label htmlFor="userName"><h2>Uploaded by</h2></label>
                            <Field className="trip-name" type="text" name="userName" placeholder="User uploading trip"/>
                            {touched.userName && errors.userName && (
                                <p className="errors">{errors.userName}</p>
                            )}
                        
                        <Switch
                            isOn={value}
                            handleToggle={() => setValue(!value)}>
                        </Switch><label htmlFor="switch"><p>Click to turn the button
                            on to publicly display your trip!</p></label>
                        <button className="tripbutton" type="submit">Upload!</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
const FormikTripCard = withFormik({
    mapPropsToValues({tripName, description, userName}) {
        return {
            tripName: tripName || "",
            description: description || "",
            userName: userName || "",
        }
    },
    validateYupSchema: Yup.object().shape({
        tripName: Yup.string().required("You must enter a trip name"),
        description: Yup.string().required("You must enter a trip description"),
        userName: Yup.string().required("You must enter a username here"),
    }),

    handleSubmit(values, {setStatus}) {
        axios
            .post("", values)
            .then(res => {
                setStatus(res.data);
            })
            .catch(TripCard);
    }
})(TripCard);
console.log("It works", FormikTripCard);
export default FormikTripCard;