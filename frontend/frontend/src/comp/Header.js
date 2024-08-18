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
            <div className="help-center">
                <div className="help-content">

                    <h1 className='text-center center'>How can we help? </h1>
                    <form class="d-flex my-4" role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-light" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Header
