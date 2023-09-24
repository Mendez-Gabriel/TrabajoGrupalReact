import React from 'react';
import { Link } from 'react-router-dom';

const BottonNav = ({ Text, style, link }) => {
    return (
        <div>
                <li className="nav-item mx-3">
                    <Link to={link} className={`nav-link active ${style}`}>{Text}</Link>
                </li>
        </div>
    )
}

export default BottonNav;