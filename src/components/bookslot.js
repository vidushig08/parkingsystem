import React from 'react'
import './bookslot.css'
import Navbar from './navbar'

const bookslot = () => {
    return (
        <div >
            <Navbar></Navbar>
            <form action="" class="bookslotform">
                <h2>Book A Slot</h2>
                <label htmlFor="">Date: </label>
                <input id="date" type="date" /><br />
                <label htmlFor="">Start Time: </label>
                <input id="s-time" type="time" /><br />
                <label htmlFor="">End Time: </label>
                <input id="e-time" type="time" /><br />
                <button className="book" type="submit">Book Slot</button>
            </form>
        </div>
    )
}

export default bookslot
