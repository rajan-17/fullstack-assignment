import React from 'react'
import logo from '../img/logo.png'
const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h4 className='my-3'>Abstract</h4>
                        <p>Branches</p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className='my-3'>Resources</h4>
                        <p>Blog</p>
                        <p>Help center</p>
                        <p>Release Notes</p>
                        <p>Status</p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className='my-3'>Community</h4>
                        <p>Twitter</p>
                        <p>Linkedin</p>
                        <p>Facebook</p>
                        <p>Dribbble</p>
                        <p>Podcast</p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className='my-3'>Company</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>

                        <h5>Contact us</h5>
                        <p>info@abstract.com</p>
                    </div>
                </div>


            </div>
            <hr />
            <div className="copyright">
                <img className="logo" src={logo} alt="" />
                <h5>Copyright 2022
                    Abstract Studio Design, Inc.
                    All rights reserved</h5>
            </div>

        </div>
    )
}

export default Footer
