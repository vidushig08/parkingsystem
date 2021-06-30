import React from 'react'
import useForm from './useForm'
import validate from './validationform'

const Signup = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate);
    return (
        <div class="formdiv">
            <h2>Signup for New User</h2>
            <form action="" onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input 
                    id="fullname"
                    name="fullname"
                    type="text" 
                    placeholder="Enter full name here" 
                    value={values.fullname}
                    onChange={handleChange}>
                </input>
                {errors.fullname && <p>{errors.fullname}</p>}
                <br />
                <label>Email:</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email here"
                    value={values.email}
                    onChange={handleChange}>
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
                    onChange={handleChange}>
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
                <label>City: </label>
                <input 
                    id="city" 
                    name="city"
                    type="text" 
                    placeholder="Enter city here" 
                    value={values.city}
                    onChange={handleChange}>
                </input>
                {errors.city && <p>{errors.city}</p>}<br />
                <label>Vehicle Number: </label>
                <input 
                    id="vehicleno" 
                    name="vehicleno"
                    type="text" 
                    placeholder="Enter vehicle number here" 
                    value={values.vehicleno}
                    onChange={handleChange}>
                </input>
                {errors.vehicleno && <p>{errors.vehicleno}</p>}<br></br>
                <button type="submit">Sign Up</button>
                <br /><br />
            </form>
            <button onClick={event =>  window.location.href='/main'}>  Back to Home Page </button>
        </div>
    )
}
export default Signup
