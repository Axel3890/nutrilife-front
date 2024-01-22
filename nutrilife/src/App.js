import { Route, Routes } from "react-router-dom";
import fondo2 from "../src/utils/fondo2.jpg"
import './App.css';
import Home from "./components/home/home"
import Login from "./components/login/login";
import Calculador from "./components/calories/Calculador";
import Recipes from "./components/recipes/recipes";
import Detail from "./components/detailrecipe/detailrecipe";
import appfirebase from "./credenciales";
import { useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Favoritos from "./components/Favoritos/Favoritos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const auth = getAuth(appfirebase);


function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  });

  return (
    <div className="App" style={{ backgroundImage: `url(${fondo2})`, height: '100vh' }}>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/calories" element={<Calculador />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favoritos />} />
        <Route path="/detail/:idDetail" element={<Detail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
