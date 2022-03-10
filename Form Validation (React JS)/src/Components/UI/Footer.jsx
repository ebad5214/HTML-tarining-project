import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='page-footer font-small mt-3'>
                <div className='footer-copyright text-center py-3'> <span style={{ color: 'black' }}>© 2021 Copyright:</span>
                    <a href='/'>Mastek.com</a>
                </div>
            </footer>
        </>
    )
};

export default Footer;