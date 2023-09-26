import React from 'react';
import { Link } from 'react-router-dom';

const BottonFooter = ({ Text, link }) => {

    return (
        <div>
                <li>
                    <Link to={link}>{Text}</Link>
                </li>
        </div>
    )
}

export default BottonFooter;