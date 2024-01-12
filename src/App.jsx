import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepages from './pages/Homepages';
import NavBar from './components/general/NavBar/NavBar';
import BottonNav from './components/specific/BottonNav/BottonNav';
import Productos from './pages/Productos';
import Masculino from './pages/Masculino';
import Femenino from './pages/Femenino';
import Item from './components/specific/Item/Item'
import Footer from "./components/general/Footer/Footer";
import BottonFooter from "./components/specific/BottonFooter/BottonFooter";
import Error404 from './pages/Error404';
import Contact from './pages/contact/Contact';

function App() {
  const is404Page = window.location.pathname === '*';


  return (
    <BrowserRouter>
      <NavBar
        Element={
          <>
            <BottonNav link={'/'} Text={'Home'} style={'nav-link active text-light'}/>
            <BottonNav link={'/productos'} Text={'Productos'} style={'nav-link active text-light'}/>
            <BottonNav link={'/masculino'} Text={'Masculino'} style={'nav-link active text-light'}/>
            <BottonNav link={'/femenino'} Text={'Femenino'} style={'nav-link active text-light'}/> 
            <BottonNav link={'/contacto'} Text={'Contacto'} style={'nav-link active text-light'}/> 
          </>
        }
      />
      <Routes>
        <Route path='/' Component={Homepages}/>
        <Route path='/productos' Component={Productos}/>
        <Route path='/masculino' Component={Masculino}/>
        <Route path='/femenino' Component={Femenino}/>
        <Route path='/contacto' Component={Contact}/>
        <Route path='/productos/:id' Component={Item}/>
        <Route path='*' Component={Error404}/>
      </Routes>
      {is404Page ? null : 
      <Footer
        elements={
          <>
            <BottonFooter Text={"Terminos y condiciones"} link={"/*"} />
            <BottonFooter Text={"Servicios"} link={"/*"} />
            <BottonFooter Text={"Contactanos"} link={"/*"} />
          </>
        }
      />}
    </BrowserRouter>
  );
}

export default App;
