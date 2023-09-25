import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import ItemStart from '../ItemStart/ItemStart'

const Item = (
  // los props estan silenciados asi no haya error
  // {image, title, description, category, price}
  ) => {
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
  //  desconstruyo lo que es el item, para despues muetearlo y desmutear los props
  const { image, title, description, category,price } = item

  return (
    <div className="container">

      <div className="card mb-3 " >
        <div className="row g-0 text-start">
          <div className="col-md-4 text-center">
            <img src={image} className="img-fluid rounded-start w-75" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text lh-lg">{description}</p>
              <p className="card-text"><small className="text-muted">{category}</small></p>
              <div className="row">
                <div className="col">
                  <ItemStart nombre={'star-fill'} />
                  <ItemStart nombre={'star-fill'} />
                  <ItemStart nombre={'star-half'} />
                  <ItemStart nombre={'star'} />
                  <ItemStart nombre={'star'} />
                </div>
              </div>
              <h5 className="card-title">${price}</h5>
              <div className="input-group mb-3 w-50">
                <input type="number" min={1} className="form-control" aria-describedby="button-add" />
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