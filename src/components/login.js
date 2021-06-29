import React from 'react'
import Reset from './reset'

function Login() {
    return (
        <div class="formdiv">
            <h2>Login Existing User</h2>
            <form action="">
                <label>Email:</label> 
                <input type="email" id="email" placeholder="Enter email here" required></input><br />
                <label>Password:</label> 
                <input type="password" placeholder="Enter password here" required></input><br /><br />
                <button>Login</button><br /><br />
            </form>
            <button onClick={event =>  window.location.href='/reset'}>Forgot Password</button>
        </div>
    )
}
export default Login
