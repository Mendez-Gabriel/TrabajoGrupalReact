import React from 'react';
import Homepages from '../../../pages/Homepages';
import style from './Imagen.module.css'

const Imagen = ({ img, Title }) => {

    const { imgProduct } = style;

    return (

        <div className=' d-flex flex-column '>
            <img src={img} className={`d-block ${imgProduct} mx-4`} alt="..." />
            <h5 className='text-center mx-4'>{Title}</h5>
        </div>

    )
}

export default Imagen;