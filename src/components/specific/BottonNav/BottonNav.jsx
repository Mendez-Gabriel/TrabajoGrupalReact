import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BottonNav.module.css';

const BottonNav = ({ Text, style, link }) => {

    const { hover } = styles

    return (
        <div>
                <li className={`nav-item mx-5 py-2 ${hover}`}>
                    <Link to={link} className={`nav-link active  ${style}`}>{Text}</Link>
                </li>
        </div>
    )
}

export default BottonNav;