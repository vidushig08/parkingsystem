import React from 'react'
//import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import './home.css'
import Parking from './parking2.jpg';
function Main() {
    return (
        <div>
            <div className="leftdiv">
                <img src={Parking} alt="" />
            </div>
            <div class="firstdiv">
            <br />
            <h1>PARKING LOT SYSTEM</h1><br />
            <label>Existing User: </label> &nbsp;&nbsp;&nbsp;&nbsp;
            <button  class="home-btn" onClick={event =>  window.location.href='/login'}>Login</button>
            <br /><br />
            <label>New User: </label> &nbsp;&nbsp;&nbsp;&nbsp;
            <button class="home-btn" id="signup-btn" onClick={event =>  window.location.href='/signup'}>Sign Up</button>
            <br /><br />
        </div>
        </div>
        
    )
}
export default Main