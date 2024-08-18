import React from 'react'
import logo from '../img/logo.png'

const Header = () => {

    return (
        <div >
            <nav className='navbar'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Abstract | Help Center</p>
                </div>
                <div className="nav-button">
                    <button type="button" className="btn btn-outline-light btn-sm">Submit a request</button>
                </div>
            </nav>
           

        </div>
    )
}

export default Header
