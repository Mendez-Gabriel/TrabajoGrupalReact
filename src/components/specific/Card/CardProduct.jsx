import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './CardProduct.modules.css';

function CardProduct({ image, title, price,id}) {

  return (

    <div className="card-product">
      <div className="card-content">
        <img src={image} alt={title} className="product-image" style={{width: '200px', height:'200px'}} />
        <h1 className="product-title">{title}</h1>
        <div className='precio mb-3'>${price}</div>
        <Link to={`/productos/${id}`}>Ver más</Link>
      </div>
    </div>
  );
}

export default CardProduct
