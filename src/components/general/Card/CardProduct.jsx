import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(({data}) => {
      setProducts(data)
    } )
    .catch(() => {alert('no se encontro la pag')})
    .finally(() => {})
    // fetch('https://fakestoreapi.com/products')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);

  return (
    <div className="card">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className='imagenCard' />
          <h1>{product.title}</h1>
          <p className='card-text'>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
