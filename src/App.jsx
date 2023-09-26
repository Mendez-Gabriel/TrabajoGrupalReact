import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepages from "./pages/Homepages";
import NavBar from "./components/general/NavBar/NavBar";
import BottonNav from "./components/specific/BottonNav/BottonNav";
import Productos from "./pages/Productos";
import Masculino from "./pages/Masculino";
import Femenino from "./pages/Femenino";
import Footer from "./components/general/footer/Footer";
import BottonFooter from "./components/specific/BottonFooter/BottonFooter";

function App() {
  return (
    <BrowserRouter>
      <NavBar
        Element={
          <>
            <BottonNav link={"/"} Text={"Home"} style={"text-light"} />
            <BottonNav
              link={"/productos"}
              Text={"Productos"}
              style={"text-light"}
            />
            <BottonNav
              link={"/masculino"}
              Text={"Femenino"}
              style={"text-light"}
            />
            <BottonNav
              link={"/femenino"}
              Text={"Masculino"}
              style={"text-light"}
            />
          </>
        }
      />
      <Routes>
        <Route path="/" Component={Homepages} />
        <Route path="/productos" Component={Productos} />
        <Route path="/masculino" Component={Masculino} />
        <Route path="/femenino" Component={Femenino} />
        <Route path="*" Component={""} />
      </Routes>
      <Footer
        elements={
          <>
            <BottonFooter Text={"Terminos y condiciones"} link={"/*"} />
            <BottonFooter Text={"Servicios"} link={"/*"} />
            <BottonFooter Text={"Contactanos"} link={"/*"} />
          </>
        }
      />
    </BrowserRouter>
  );
}

export default App;
