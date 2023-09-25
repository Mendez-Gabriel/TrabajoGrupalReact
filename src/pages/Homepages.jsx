import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Imagen from '../components/general/imagen/imagen';



const Homepages = () => {


  const urlBase = `https://fakestoreapi.com/products/`;

  const [info, setInfo] = useState([]);




  useEffect(() => {
    const { data } = axios.get(urlBase)
      .then(({ data }) => {
        console.log(data);
        setInfo(data);
      })
      .catch((error) => console.log(error))
  }, []);
  console.log(info);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (

    <section className='container text-info'>
      <div className='pb-5'>
        <h3>Productos Destacados</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {info.map((item, index) => (
              <Imagen key={index} img={item.image} Title={item.title}/>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='pb-5'>
        <h3>Destacados para Mujer</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {info.map((item, index) => (
              <Imagen key={index} img={item.image}  Title={item.title}/>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='pb-5'>
        <h3>Destacados para Hombre</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {info.map((item, index) => (
              <Imagen key={index} img={item.image}  Title={item.title}/>
            ))}
          </Carousel>
        </div>
      </div>

    </section>



  )
}

export default Homepages;