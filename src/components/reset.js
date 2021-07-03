import React from 'react'
import "./reset.css"

function Reset() {
    return (
        <div class="resetformdiv">
            <br />
            <h2>Reset Link</h2>
            <form action="">
                Enter the email to which reset link will be sent:<br/>
                <input type="email" id="resetemail" placeholder="Enter email here" required></input><br /><br />
                <button class="send-btn" type="submit">Send Link</button><br /><br />
            </form>
            <button class="back-btn" onClick={event =>  window.location.href='/login'}>Back to Login</button>
        </div>
        
    )
}

export default Reset
