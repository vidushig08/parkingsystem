import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div class="loginformdiv">
            <br />
            <h2>Login for Existing User</h2>
            <form action="">
                <label>Email:</label> 
                <input type="email" id="email" placeholder="Enter email here" required></input><br />
                <label>Password:</label> 
                <input type="password" placeholder="Enter password here" required></input><br /><br />
                <button type="submit" class="login-btn">Login</button><br /><br />
            </form>
            <button class="home-btn" onClick={event =>  window.location.href='/reset'}>Forgot Password</button> &nbsp;&nbsp;&nbsp;
            {/* <Link to="/reset" class="forgot-btn">Forgot Password</Link> */}
            <button class="home-btn" onClick={event =>  window.location.href='/main'}>Back to Home Page </button>
        </div>
    )
}
export default Login
