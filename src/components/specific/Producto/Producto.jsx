import React from 'react'


const Producto = ({title,image,category,description,price}) => {
  return (
   
      <div className="card " >
        <img src={image} className="card-img-top w-25 mx-auto d-block"  alt={`${title} image`}  />
        <div className="card-body">
          <a className="card-title h5 text-decoration-none text-dark">{title}</a>
          <p className="card-text">{price}</p>
          <button className='btn btn-sm btn-primary'>Leer Mas</button>

        </div>
      </div>
  )
}

export default Producto