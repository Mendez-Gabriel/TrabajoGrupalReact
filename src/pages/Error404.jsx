import React from 'react';
import Imagenes from '../components/general/imagenes/Imagenes';
import logoIcon from '../assets/logo/logo-icon.svg';

const Error404 = () => {
  return (
    <div className='vh-100 vw-100'>
        <Imagenes src={logoIcon}/>
        <h1 className='text-light'>Error404</h1>
    </div>
  )
}

export default Error404;