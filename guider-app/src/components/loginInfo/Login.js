import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Login = ({ values }) => {
    return (
        <div>
            <Form>
                <label>
                    Username: 
                    <Field 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                    />
                </label>
                <label>
                    Password: 
                    <Field 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                    />
                </label>
                <button>Log In</button>
            </Form>
        </div>
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
    }
})(Login)

export default FormikLoginForm