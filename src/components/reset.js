import React from 'react'

function Reset() {
    return (
        <div class="formdiv">
            <h2>Reset Link</h2>
            <form action="">
                Enter the email to which reset link will be sent:<br/>
                <input type="email" placeholder="Enter email here" required></input><br /><br />
                <button type="submit">Send Link</button><br /><br />
            </form>
            <button onClick={event =>  window.location.href='/signup'}>Back to Login</button>
        </div>
        
    )
}

export default Reset
