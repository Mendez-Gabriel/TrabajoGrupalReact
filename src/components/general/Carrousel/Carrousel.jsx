import React from 'react';
import BtnPrev from '../../specific/BtnPrev/BtnPrev';
import BtnNext from '../../specific/BtnNext/BtnNext';
import Imagen from '../imagen/imagen';

const Carrousel = ({ infoImage }) => {
console.log(infoImage)


    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner d-flex">
                    {infoImage.map((products) => {
                        return (
                            <div className="carousel-item active  d-flex ms-0" key={products.id}>
                                <Imagen imag={products.image} />
                            </div>
                        )
                    })}
                        


                    {/* <div className="carousel-item" data-bs-interval="2000">
                        
                    </div>
                    <div className="carousel-item">
                        
                    </div> */}
                </div>
                <BtnPrev />
                <BtnNext />
            </div>
        </div>
    )
}

export default Carrousel;