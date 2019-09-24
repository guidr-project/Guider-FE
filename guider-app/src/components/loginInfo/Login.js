import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

import 'bulma/css/bulma.css'


const Login = ({ values, errors, touched }) => {
    return (
        <Form className="field">
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
            password: password || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit(values) {
        console.log(values)
        // axios post request HERE <--------------
    }
})(Login)

export default FormikLoginForm
