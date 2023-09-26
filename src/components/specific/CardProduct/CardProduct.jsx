import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardProduct.modules.css';

function CardProduct({ image, title, price,id}) {

  return (
      <div className="card">
        <img src={image} alt={title} className="product-image"></img>
        <h3 className="mt-4">{title}</h3>
        <h5 className='precio bg-success mt-2'>${price}</h5>
        <div>
          <button>
        <Link to={`/productos/${id}`} className='leer-mas btn btn-light'>Ver más</Link>
        </button>
        </div>
      </div>
  );
}

export default CardProduct
