import React, { useEffect, useState } from 'react'
import Producto from '../components/specific/Producto/Producto'
import axios from 'axios'

const Productos = () => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(({ data }) => {
        setProductos(data)
        // console.log(data)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { })

  }, [])
  return (
    <>
      <div className="container-fluid text-center mt-2">
       
        <div className="row mx-3">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar..." aria-describedby="button-shearch"/>
            <button className="btn btn-outline-secondary" type="button" id="button-shearch">Buscar</button>
        </div>
          {
            productos.map((producto) => (
              <div className="col-12 col-md-4 mb-4" key={producto.id}>
                <Producto title={producto.title} image={producto.image} category={producto.category} description={producto.description} price={producto.price} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Productos