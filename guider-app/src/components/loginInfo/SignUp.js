import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignUp({touched, errors, handleSubmit}){


    return(
        <div className='signUp'>
            
            <h1>Sign Up</h1>

            <Form className="field" onSubmit = {handleSubmit}>

                <div>
                    <label>Username</label>
                    <Field 
                        className="control"
                        name="username" 
                        type="username"
                        autoComplete="off"
                    />
                    <br/>
                    <h3>{touched.username && errors.username}</h3>
                </div>


                <div>
                    <label>Full Name</label>
                    <Field 
                        className="control"
                        name="full_name" 
                        type="text"
                        autoComplete="off"
                    />
                    <br/>
                    <h3>{touched.full_name && errors.full_name}</h3>
                </div>


                <div>
                    <label>Email</label>
                    <Field 
                        className="control"
                        name="email" 
                        type="email"
                        autoComplete="off"
                    />
                    <br/>
                    <h3>{touched.email && errors.email}</h3>
                </div>


                <div>
                    <label>Password</label>
                    <Field 
                        className="control"
                        name="password" 
                        type="password"
                        autoComplete="off"
                    />
                    <br/>
                    <h3>{touched.password && errors.password}</h3>
                </div>

                <button type="submit" className="pure-button" >Submit &rarr;</button>
            </Form>

        </div>
    )
}


export default withFormik({

    mapPropsToValues(){
        return{
            username:'',
            email:'',
            password:''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(3)
            .required(),
        full_name: Yup.string()
            .min(3)
            .required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(6)
            .required()
        }),

    handleSubmit(values, formikBag){

        //const url = 'https://guidr-build.herokuapp.com/users/signUp'

        console.log('values',values)

        axios.post('https://blooming-anchorage-30017.herokuapp.com/users/signUp', values)
            .then(response => {
                console.log('is this posting?')
                console.log('response',response)
                // localStorage.setItem("token");
                formikBag.props.history.push("/users/login");
            })
            .catch(e => {
                console.log(e.message);
            });
    }

})(SignUp)