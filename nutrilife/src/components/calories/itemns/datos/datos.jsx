import "./datos.css"
import { useState } from "react";
import { toast } from 'react-toastify';
const Datos = ({ onSeleccion, calcular }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [edad, setEdad] = useState('');
    
    const handleCalcular = () => {
        if (altura && peso && edad) {
            onSeleccion({
                datos: altura, peso, edad,
            });
        } else {
            toast.error('You must complete the data', {
                style: { backgroundColor: 'black', color: 'white' },
                autoClose: 2000,
              });
        }
    };

    const viewData = () => {
        toast.success('Data filled correctly', {
            style: { backgroundColor: 'black', color: 'white' },
            autoClose: 2000,
          });
    }

    const handleGuardarDatos = () => {
        handleCalcular();
        viewData();
      };
      
    return(
        <div className="cardgender">
            <h2>A continuacion, ingresa tus datos</h2>
            <div class="input-container">
                <input type="number" name="altura" value={altura}  onChange={(e) => setAltura(e.target.value)}class="input" placeholder="Heigth(cms)"/>
                <div class="highlight"></div>
            </div>
            <div class="input-container">
                <input type="number" name="peso" value={peso}  onChange={(e) => setPeso(e.target.value)} class="input" placeholder="Weigth(kg)"/>
                <div class="highlight"></div>
            </div>
            <div class="input-container">
                <input type="number" name="edad" value={edad}  onChange={(e) => setEdad(e.target.value)} class="input" placeholder="Age"/>
                <div class="highlight"></div>
            </div>
            <button className="btncalories" onClick={handleGuardarDatos}>Guardar Datos</button>
            <button className="btncalories" onClick={calcular}>Calcular</button>
        </div>
    )
}

export default Datos;