import React from 'react';
import { withFormik, Form, Field } from 'formik';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';
import './links.css'

function SignUp({touched, errors, handleSubmit}){


    return(
        <div className='background'>
            
            <h2 className="title">GUIDR</h2>
            <Form className="signUp" onSubmit = {handleSubmit}>
            <h1>Sign Up</h1>

                <div>
                    {/* <label>Username</label> */}
                    <Field 
                        className="input"
                        name="username" 
                        type="username"
                        autoComplete="off"
                        placeholder="Username"
                    />
                    <br/>
                    <h3>{touched.username && errors.username}</h3>
                </div>


                <div>
                    {/* <label>Full Name</label> */}
                    <Field 
                        className="input"
                        name="full_name" 
                        type="text"
                        autoComplete="off"
                        placeholder="Full Name"
                    />
                    <br/>
                    <h3>{touched.full_name && errors.full_name}</h3>
                </div>


                <div>
                    {/* <label>Email</label> */}
                    <Field 
                        className="input"
                        name="email" 
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                    />
                    <br/>
                    <h3>{touched.email && errors.email}</h3>
                </div>


                <div>
                    {/* <label>Password</label> */}
                    <Field 
                        className="input"
                        name="password" 
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                    />
                    <br/>
                    <h3>{touched.password && errors.password}</h3>
                </div>

                <button type="submit" className="pure-button" style={{background: '#096852', color: 'white', marginBottom: '15px'}}>Submit</button>
                <p>Already have an account? <Link to="/">Login</Link></p>
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
                formikBag.props.history.push("/");
            })
            .catch(e => {
                console.log(e.message);
            });
    }

})(SignUp)