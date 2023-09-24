import React from 'react';
import logoIcon from '../../../assets/logo/logo.svg';
import style from './Navbar.module.css';
import BottonTonggler from '../../specific/BottonTonggler/BottonTonggler';

const NavBar = ({Element}) => {
    
    const { logoIconStyle } = style;

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
            
            <div className="container-fluid">
                <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                <BottonTonggler/>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ">
                       {Element}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;