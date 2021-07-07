import React from 'react'
import './navbar.css'
const navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>EasyPark</div>
            <div className='navbar__item'>About Us</div>
            <div className='navbar__item'>New Booking</div>
            <div className='navbar__item'>Previous Bookings</div>    
            <button className='logout'>Logout</button>    
        </header>
    )
}

export default navbar