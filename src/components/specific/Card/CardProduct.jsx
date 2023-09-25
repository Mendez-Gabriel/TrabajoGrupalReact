import React, { useEffect, useState } from 'react';
import styles from './CardProduct.modules.css';
// import axios from 'axios';


function CardProduct({image, title, description, price}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get("https://fakestoreapi.com/products/category/electronic")
    // .then(({data}) => {
    //   console.log(data)
    // } )
    // .catch(() => {alert('no se encontro la pag')})
    // .finally(() => {})
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="card-prodct">
      {products.map((product) => (
        <div key={product.id} className="card-product">
          <img src={product.image} alt={product.title}></img>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className='precio mb-3'>${product.price}</div>
            <span className={`leer-mas ${product.description.length > 1 ? 'active' : '' }`}><a href='./Item/Item.jsx'>Leer más</a></span>
          </div>
      ))}
    </div>
  );
}

export default CardProduct;