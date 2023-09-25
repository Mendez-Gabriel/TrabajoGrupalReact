import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const Item = () => {
  const [item, setItem] = useState({})
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/15')
      .then(({ data }) => {
        setItem(data)
        // console.log(data)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { })

  }, [])
  console.log(item)

  return (
    <div className="container">

      <div className="card mb-3 " style={{ maxWidth: '1000px' }}>
        <div className="row g-0 text-start">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text lh-lg">{item.description}</p>
              <p className="card-text"><small className="text-muted">{item.category}</small></p>
              <div className="row">
                <div className="col">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                </div>
              </div>
              <h5 className="card-title">${item.price}</h5>
              <div className="input-group mb-3 w-50">
                <input type="number" min={1} className="form-control" aria-describedby="button-add"/>
                  <button className="btn btn-outline-success" type="button" id="button-add">Agregar al Carrito <i className="bi bi-cart-check"></i></button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Item