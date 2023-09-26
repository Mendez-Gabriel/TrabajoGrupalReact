import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logoIcon from '../assets/logo/logo.svg';
import 'react-multi-carousel/lib/styles.css';
import Carrousels from '../components/general/Carrousel/Carrousels';
import Imagenes from '../components/general/imagenes/Imagenes';


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

  useEffect(() => {
    const { data } = axios.get(urlMen)
      .then(({ data }) => { setInfoMen(data); })
      .catch((error) => console.log(error))
  }, [])

 useEffect(() => {
  const { data } = axios.get(urlWomen)
    .then(({ data }) => { setInfoWomen(data); })
    .catch((error) => console.log(error))
}, []);


  return (

    <section className='container text-info'>
      <Imagenes src={logoIcon} style={'img-fluid'}/>
      <Carrousels infoImage={info}/>
      <Carrousels infoImage={infoWomen}/>
      <Carrousels infoImage={infoMen}/> 
    </section>  
  )
}

export default Homepages;