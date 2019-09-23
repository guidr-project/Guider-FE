import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'


const Login = ({ values, errors, touched }) => {
    return (
        <div>
            <Form>
                <div >
                    <label>
                        Username: 
                        <Field type="text" name="username" placeholder="Username" />
                        {touched.username && errors.username && (
                            <p>{errors.username}</p>
                        )}
                    </label>
                </div>
                <label>
                    Password: 
                    <Field type="password" name="password" placeholder="password" />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                </label>
                <button type="submit">Log In</button>
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
        // axios post request HERE <--------------
    }
})(Login)

export default FormikLoginForm