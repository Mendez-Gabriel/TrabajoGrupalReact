import React from 'react';
import { Link } from 'react-router-dom';

const BottonNav = ({ Text, style, link }) => {
    return (
        <div>
            <Link to={link} className='link-underline link-underline-opacity-0'>
                <li className="nav-item mx-3">
                    <a className={`nav-link active ${style}`} aria-current="page" href="#">{Text}</a>
                </li>
            </Link>
        </div>
    )
}

export default BottonNav;