import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepages from './pages/Homepages';
import NavBar from './components/general/NavBar/NavBar';
import BottonNav from './components/specific/BottonNav/BottonNav';
import Productos from './pages/Productos';
import Masculino from './pages/Masculino';
import Femenino from './pages/Femenino';
import Item from './components/specific/Item/Item'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar 
        Element={
          <>
            <BottonNav link={'/'} Text={'Home'} style={'nav-link active text-light'}/>
            <BottonNav link={'/productos'} Text={'Productos'} style={'nav-link active text-light'}/>
            <BottonNav link={'/masculino'} Text={'Femenino'} style={'nav-link active text-light'}/>
            <BottonNav link={'/femenino'} Text={'Masculino'} style={'nav-link active text-light'}/> 
          </>
        }
      />
      <Routes>
        <Route path='/' Component={Homepages}/>
        <Route path='/productos' Component={Productos}/>
        <Route path='/masculino' Component={Masculino}/>
        <Route path='/femenino' Component={Femenino}/>
        <Route path='/productos/:id' Component={Item}/>
        <Route path='*' Component={""}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
