import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div class="formdiv">
            <h2>Login for Existing User</h2>
            <form action="">
                <label>Email:</label> 
                <input type="email" id="email" placeholder="Enter email here" required></input><br />
                <label>Password:</label> 
                <input type="password" placeholder="Enter password here" required></input><br /><br />
                <button type="submit">Login</button><br /><br />
            </form>
            <Link to="/reset">Forgot Password</Link><br /><br />
            <button onClick={event =>  window.location.href='/main'}>Back to Home Page </button>
        </div>
    )
}
export default Login
