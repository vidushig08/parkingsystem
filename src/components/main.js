import React from 'react'
//import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

function Main() {
    return (
        <div class="formdiv">
            <br /><br />
            <h2>Parking Lot System</h2><br /><br />
            <label>Existing User: </label> &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={event =>  window.location.href='/login'}>Login</button>
            <br /><br />
            <label>New User: </label> &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={event =>  window.location.href='/signup'}>Signup</button>
            <br /><br />
        </div>
    )
}
export default Main