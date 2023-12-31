import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import ItemStart from '../ItemStart/ItemStart'
import { useParams } from 'react-router-dom'
import Carrousels from '../../general/Carrousel/Carrousels'

const Item = () => {
  const urlBase = `https://fakestoreapi.com/products/`;
  const [info, setInfo] = useState([]);
  let params = useParams()

  const [item, setItem] = useState({})
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(({ data }) => {
        setItem(data)
        // console.log(data)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { })

  }, [])
  
  useEffect(() => {
    const { data } = axios.get(urlBase)
      .then(({ data }) => { setInfo(data); })
      .catch((error) => console.log(error))
  }, []);

  //  desconstruyo lo que es el item, para despues muetearlo y desmutear los props
  const { image, title, description, category, price } = item

  return (
    <div className="container ">

      <div className="card my-5" >
        <div className="row g-0">
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
              <div className="input-group mb-3 w-50 mx-auto">
                <input type="number" min={1} className="form-control form-control-sm" aria-describedby="button-add" />
                <button className="btn btn-sm btn-outline-success" type="button" id="button-add">Agregar al Carrito <i className="bi bi-cart-check"></i></button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='text-info mb-3'>
      <Carrousels infoImage={info}/>

      </div>
    </div>

  )
}

export default Item