import React from 'react';
import { Link } from 'react-router-dom';

const BottonFooter = ({ Text, link }) => {

    return (
        <div>
            <li className='list-group-item mx-2'>
                <Link to={link} className='text-decoration-none'>{Text}</Link>
            </li>
        </div>
    )
}

export default BottonFooter;