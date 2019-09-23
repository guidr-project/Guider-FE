import React, {useState, useEffect} from "react";
import { withFormik, Form, Field, validateYupSchema, setNestedObjectValues} from "formik";
import * as Yup from "yup";
import Switch from "./Switch";


const TripCard = ({values, errors, touched, status}) => {
    const [trips, setTrips] = useState([]);
    const [value, setValue] = useState(false);

    useEffect(() => {
        if (status) {
            setTrips([...trips, status])
        }
    },[status]);


    //tripname, boolean, descr, date/time
    return (
        <div className="trip-form">
            <Form>
                <Field className="f-name" type="text" name="tripName" placeholder="Name of Trip"/>
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field className="f-name" type="text" name="description" placeholder="Description of Trip"/>
                {touched.description && errors.description && (
                    <p className="error">{errors.description}</p>
                )}

                <Field className="f-name" type="text" name="date" placeholder="Date of Trip"/>
                {touched.date && errors.date && (
                    <p className="error">{errors.description}</p>
                )}

                <Switch
                    isOn={value}
                    handleToggle={() => setValue(!value)}>
                </Switch>
            </Form>
        </div>
    )
}
const FormikTripCard = withFormik({
    mapPropsToValues({tripName, description, date}) {
        return {
            tripName: tripName || "",
            description: description || "",
            date: date || "",
        }
    },
    validationSchema: Yup.object().shape({
        tripName: Yup.string().required("You must enter a trip name"),
        description: Yup.string().required("You must enter a trip description"),
        date: Yup.string().required("You must enter a trip date"),
    }),
})(TripCard);
export default FormikTripCard;