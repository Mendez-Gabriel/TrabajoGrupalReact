import React from 'react';

const Imagenes = ({ src, style }) => {
  return (
    <>
      <img src={src} className={style} alt="..." />
    </>
  )
}

export default Imagenes;