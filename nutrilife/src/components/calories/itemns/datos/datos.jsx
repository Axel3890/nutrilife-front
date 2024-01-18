import "./datos.css"
import { useState } from "react";
const Datos = ({ onSeleccion, calcular }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [edad, setEdad] = useState('');

    const handleCalcular = () => {
        // Verifica si se ha seleccionado una opción de movimiento antes de avanzar
        if (altura && peso && edad) {
            // Llama a la función para avanzar a la siguiente etapa y pasa los datos
            onSeleccion({
                datos: altura, peso, edad,
            });
        } else {
            // Puedes manejar la falta de selección de movimiento de alguna manera
            console.error("Debes llenar los datos.");
        }
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
            <button className="btncalories" onClick={handleCalcular}>Guardar Datos</button>
            <button className="btncalories" onClick={calcular}>Calcular</button>
        </div>
    )
}

export default Datos;