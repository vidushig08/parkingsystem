import React from 'react'

const signupSuccess = () => {
    return (
        <div>
            <h3>We have received your registration</h3>
            <button onClick={event =>  window.location.href='/login'}>  Login </button>
        </div>
    )
}

export default signupSuccess
