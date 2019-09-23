import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
// import * as Yup from 'Yup'
import axios from 'axios'

const Login = () => {
    return (
        <div>
            <Form>
                <label>
                    Username: 
                    <Field 
                        type="text" 
                        name="username" 
                    />
                </label>
                <label>
                    Password: 
                    <Field 
                        type="password" 
                        name="password" 
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
    handleSubmit(values) {
        console.log(values)
    }
})(Login)

export default FormikLoginForm