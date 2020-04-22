import React from 'react'
import * as Yup from 'yup'

import { Redirect } from 'react-router-dom'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'

import 'bulma/css/bulma.css'


const Login = ({ values, errors, touched, handleSubmit }) => {
    const token = localStorage.getItem("token");
    
    if (token) {
        return <Redirect to="/homepage" />
    } 

    return (
        <Form className="field" onSubmit = {handleSubmit}>
            <Field className="control" type="text" name="username" placeholder="Username"/>
            {touched.username && errors.username && (
                <p className="errors">{errors.username}</p>
            )}
            <Field className="control" type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && (
                <p className="errors">{errors.password}</p>
            )}
            <button className="pure-button" type="submit" style={{background: '#096852', color: 'white'}}>Log In</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || "",
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),

    handleSubmit(values, formikBag){

        const url = 'https://blooming-anchorage-30017.herokuapp.com/users/login' 
        // console.log(values)
        axios
            .post(url, values)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                formikBag.props.history.push('/homepage')
            })
            .catch(e => {
                console.log(e);
            });
    }
    
})(Login)

export default FormikLoginForm