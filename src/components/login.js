import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
import {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }


    return (
        <div class="loginformdiv">
            <br />
            <h2>Login for Existing User</h2>
            <form action="" onSubmit={submit}>
                <label>Email:</label> 
                <input type="email" id="email" placeholder="Enter email here" required
                    onChange={e => setEmail(e.target.value)}>
                    </input><br />
                <label>Password:</label> 
                <input type="password" placeholder="Enter password here" required
                    onChange={e => setPassword(e.target.value)}>
                    </input><br /><br />
                <button type="submit" class="login-btn" onClick={event =>  window.location.href='/bookslot'}>Login</button>
                <br /><br />
            </form>
            <button class="home-btn" onClick={event =>  window.location.href='/reset'}>Forgot Password</button> &nbsp;&nbsp;&nbsp;
            {/* <Link to="/reset" class="forgot-btn">Forgot Password</Link> */}
            <button class="home-btn" onClick={event =>  window.location.href='/main'}>Back to Home Page </button>
        </div>
    )
}
export default Login
