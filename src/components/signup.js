import React from 'react'

function Signup() {
    return (
        <div class="formdiv">
            <h2>Signup for New User</h2>
            <form action="">
                Name: <input type="text" placeholder="Enter name here" required></input><br />
                Email: <input type="email" placeholder="Enter email here" required></input><br />
                Phone Number: <input type="text" placeholder="Enter phone number here" required></input><br />
                Password: <input id="password" type="password" placeholder="Enter password here" min="0" required></input><br />
                Confirm Password: <input id="cpassword" type="password" placeholder="Re-enter password here" required></input><br />
                City: <input id="city" type="text" placeholder="Enter city here" required></input><br />
                Vehicle Number: <input id="vehicleno" type="text" placeholder="Enter vehicle number here" required></input><br /><br />
                <button type="submit">Sign Up</button>
                <br /><br />
            </form>
        </div>
    )
}
export default Signup
