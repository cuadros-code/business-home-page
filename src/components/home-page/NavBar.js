import React, { useState } from 'react'


export const NavBar = () => {

    const [showCheck, setShowCheck] = useState(false)

    const handleChange = () => {
        setShowCheck(!showCheck)
    } 

    return (
        <div>
            <nav className="navegation">
                <input type="checkbox" id="check" checked={showCheck}  onChange={ handleChange } />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo">BusiNet</label>
                    <ul>
                        <li><a className="active" href="#!">Home</a></li>
                        <li><a href="#!">About Us</a></li>
                        <li><a href="#!">Our Team</a></li>
                        <li><a href="#!">Contact Us</a></li>
                        <button className="sign" >Sign in</button>
                    </ul>
            </nav>
            
        </div>
    )
}
