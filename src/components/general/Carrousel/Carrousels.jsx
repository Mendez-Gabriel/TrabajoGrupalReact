import React from 'react';
import Carousel from 'react-multi-carousel';
import Imagen from '../imagen/imagen';

const Carrousels = ({ infoImage }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 783 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 783, min: 0 },
      items: 1
    }
  };

  return (

    <div className='pb-5 mt-5'>
      <h3>Productos Destacados</h3>
      <div className='pt-3 '>
        <Carousel responsive={responsive}>
          {infoImage.map((item, index) => (
            <Imagen key={index} img={item.image} Title={item.title} id={item.id} />
          ))}
        </Carousel>
      </div>
    </div>

  )
}

export default Carrousels;