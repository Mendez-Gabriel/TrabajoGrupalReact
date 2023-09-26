import React from 'react';
import { Link } from 'react-router-dom';
import style from './Imagen.module.css'
import Imagenes from '../imagenes/Imagenes';

const Imagen = ({ img, Title, id }) => {

    const { imgProduct, btnProduct, padding } = style;

    return (

        <div className=' d-flex flex-column mx-2 '>
            <Link to={`/productos/${id}`}>
                <button className={`btn btn-light rounded-4  ${btnProduct}`}>
                    <div className='flex-column '>  
                        <Imagenes src={img} style={imgProduct}/>                     
                        <h5 className={`${padding}`}>{Title}</h5>
                    </div>
                </button>
            </Link>
        </div>

    )
}

export default Imagen;