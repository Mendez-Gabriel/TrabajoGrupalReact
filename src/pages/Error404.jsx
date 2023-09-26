import React from 'react';
import Imagenes from '../components/general/imagenes/Imagenes';
import logoIcon from '../assets/logo/logo-icon.svg';
import BottonFooter from '../components/specific/BottonFooter/BottonFooter';

const Error404 = () => {
    return (
        <div className='container-fluid min-vh-100 min-vw-100'>
            <Imagenes src={logoIcon} />
            <div className='d-flex justify-content-center'>
                <i class="bi bi-bag-x text-warning fs-1"></i>
                <h1 className='text-light mx-5'>Error404</h1>
                <i class="bi bi-bag-x text-warning fs-1"></i>
            </div>
            <div className='d-flex justify-content-center m-3'>
                <button className='btn btn-outline-primary m-3 d-flex'>
                    <i class="bi bi-arrow-left-short me-2"></i>
                    <BottonFooter Text={'Home'} link={'/'} />
                </button>
                <button className='btn btn-outline-primary m-3 d-flex'>
                    <i class="bi bi-arrow-clockwise me-2"></i>
                    <BottonFooter Text={'Recargar'} link={'*'} />
                </button>
            </div>
        </div>
    )
}

export default Error404;