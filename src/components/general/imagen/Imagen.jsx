import React from 'react';
import { Link } from 'react-router-dom';
import style from './Imagen.module.css'

const Imagen = ({ img, Title, id }) => {

    const { imgProduct, btnProduct } = style;

    return (

        <div className=' d-flex flex-column '>
            <Link to={`/productos/${id}`}>
                <button className={`btn btn-light rounded-4 mx-4 ${btnProduct}`}>
                    <img src={img} className={`d-block ${imgProduct} mx-4`} alt="..." />
                    <h5 className='text-center mx-5 m-3'>{Title}</h5>
                </button>
            </Link>
        </div>

    )
}

export default Imagen;