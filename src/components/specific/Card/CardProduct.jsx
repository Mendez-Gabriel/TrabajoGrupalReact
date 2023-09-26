import React from 'react';
import styles from './CardProduct.modules.css'; 

function CardProduct({image, title, price}) {

  return (
    <div className="card-container">
        <div className="card-product col-12 col-md-4 col-xl-2">
          <div className="card-content">
            <img src={image} alt={title} className="product-image" />
            <h1 className="product-title">{title}</h1>
            <div className='precio mb-3'>${price}</div>
            <a href='#'>Ver más</a>
          </div>
        </div>
    </div>
  );
}

export default CardProduct
