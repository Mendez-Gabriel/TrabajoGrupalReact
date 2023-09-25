import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logoIcon from '../assets/logo/logo.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Imagen from '../components/general/imagen/imagen';



const Homepages = () => {


  const urlBase = `https://fakestoreapi.com/products/`;
  const urlMen = `https://fakestoreapi.com/products/category/men's%20clothing`;
  const urlWomen = `https://fakestoreapi.com/products/category/women's%20clothing`; 

  const [info, setInfo] = useState([]);
  const [infoMen, setInfoMen] = useState([]);
  const [infoWomen, setInfoWomen] = useState([]);




  useEffect(() => {
    const { data } = axios.get(urlBase)
      .then(({ data }) => { setInfo(data); })
      .catch((error) => console.log(error))
  }, []);
  // console.log(info);

  useEffect(() => {
    const { data } = axios.get(urlMen)
      .then(({ data }) => { setInfoMen(data); })
      .catch((error) => console.log(error))
  }, [])

 console.log(infoMen);

 useEffect(() => {
  const { data } = axios.get(urlWomen)
    .then(({ data }) => { setInfoWomen(data); })
    .catch((error) => console.log(error))
}, []);

  const responsive = {
    superLargeDesktop: {
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
      <img src={logoIcon} alt="" />
      <div className='pb-5 mt-5'>
        <h3>Productos Destacados</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {info.map((item, index) => (
              <Imagen key={index} img={item.image} Title={item.title} id={item.id} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className='pb-5 mt-5'>
        <h3>Destacados para Mujer</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {infoMen.map((item, index) => (
              <Imagen key={index} img={item.image} Title={item.title} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className='pb-5  mt-5'>
        <h3>Destacados para Hombre</h3>
        <div className='pt-3 '>
          <Carousel responsive={responsive}>
            {infoWomen.map((item, index) => (
              <Imagen key={index} img={item.image} Title={item.title} />
            ))}
          </Carousel>
        </div>
      </div>

    </section>



  )
}

export default Homepages;