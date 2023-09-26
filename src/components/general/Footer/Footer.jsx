import React from 'react';
import BottonFooter from '../../specific/BottonFooter/BottonFooter';

const Footer = ({ elements }) => {
  return (
    <footer>
      <div className='container-fluid row'>
        <div className='col-12'>
          <h1 className='text-info'>Sobre Nosotros</h1>
          <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi recusandae doloribus maxime culpa! Id porro ab iusto provident expedita ipsum cum rerum praesentium, laudantium architecto blanditiis nisi adipisci exercitationem!</p>
        </div>
      </div>

      <div className='container-fluid row'>

        <div className="col-lg-6">
          <p className='text-info'>&copy; {new Date().getFullYear()} Trendy Threads</p>
        </div>

        <div className='col-lg-6 d-flex justify-content-center'>
          {elements}
        </div>

      </div>


    </footer>
  );
}

export default Footer;