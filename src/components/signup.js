import React from 'react'
import useForm from './useForm'
import validate from './validationform'
import Dropdown from './dropdown'
import { Redirect } from 'react-router-dom';
import {useState} from 'react';
import './signup.css'

const Signup = ({submitForm}) => {
    const {handleChange, values, handleSubmit,errors} = useForm(submitForm,validate);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    const setRedirect = () => {
        this.setState({
        redirect: true
    })

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        
        setRedirect(true);
        }

        if (redirect) {
            return <Redirect to="/login"/>;
        }
    }
    return (
        <div class="signupformdiv">
            <br />
            <h2>Signup for New User</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input 
                    id="fullname"
                    name="fullname"
                    type="text" 
                    placeholder="Enter full name here" 
                    value={values.fullname}
                    onChange={handleChange,e=>setName(e.target.value)}
                    >
                </input>
                {errors.fullname && <p>{errors.fullname}</p>}
                <br />
                <label>Email:</label>
                <input 
                    id="email-s"
                    name="email"
                    type="email"
                    placeholder="Enter email here"
                    value={values.email}
                    onChange={handleChange,e=>setEmail(e.target.value)}>
                </input>
                {errors.email && <p>{errors.email}</p>}<br />
                <label>Phone Number:</label> 
                <input 
                    id="phone"
                    name="phone"
                    type="text" 
                    placeholder="Enter phone number here" 
                    value={values.phone}
                    onChange={handleChange}>
                </input>
                {errors.phone && <p>{errors.phone}</p>}<br />
                <label>Password: </label>
                <input 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Enter password here" 
                    value={values.password}
                    onChange={handleChange,e=>setName(e.target.value)}>
                </input>
                {errors.password && <p>{errors.password}</p>}<br />
                <label>Confirm Password: </label>
                <input 
                    id="cpassword" 
                    name="cpassword"
                    type="password" 
                    placeholder="Re-enter password here" 
                    value={values.cpassword}
                    onChange={handleChange}>
                </input>
                {errors.cpassword && <p>{errors.cpassword}</p>}<br />

                <Dropdown/>
                
                {/* <label>State: </label>
                <input 
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Enter state here" 
                    value={values.state}
                    onChange={handleChange}>
                </input>
                {errors.state && <p>{errors.state}</p>}<br />

                <label>City: </label>
                <input 
                    id="city" 
                    name="city"
                    type="text" 
                    placeholder="Enter city here" 
                    value={values.city}
                    onChange={handleChange}>
                </input>
                {errors.city && <p>{errors.city}</p>}<br /> */}
                
                <label>Vehicle Number: </label>
                <input 
                    id="vehicleno" 
                    name="vehicleno"
                    type="text" 
                    placeholder="Hint: HR 26 DQ 5551" 
                    value={values.vehicleno}
                    onChange={handleChange}>
                </input>
                {errors.vehicleno && <p>{errors.vehicleno}</p>}<br></br>
                <br />
                <button class="signup-btn" type="submit">Sign Up</button>
                <br /><br />
            </form>
            <button class="home-btn" onClick={event =>  window.location.href='/main'}>  Back to Home Page </button>
        </div>
    )
}
export default Signup
