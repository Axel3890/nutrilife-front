import "./datos.css"
import { useState } from "react";
const Datos = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [edad, setEdad] = useState('');

    const handleGuardarDatos = () => {
        // Aquí puedes realizar cualquier lógica que necesites con los datos ingresados
        console.log("Datos guardados:", {
            altura,
            peso,
            edad,
        });
        // También podrías llamar a una función externa para procesar los datos, por ejemplo:
        // procesarDatos({ altura, peso, edad });
    };
    return(
        <div className="cardgender">
            <h2>A continuacion, ingresa tus datos</h2>
            <div class="input-container">
                <input type="text" name="altura" value={altura}  onChange={(e) => setAltura(e.target.value)}class="input" placeholder="Heigth"/>
                <div class="highlight"></div>
            </div>
            <div class="input-container">
                <input type="text" name="peso" value={peso}  onChange={(e) => setPeso(e.target.value)} class="input" placeholder="Weigth"/>
                <div class="highlight"></div>
            </div>
            <div class="input-container">
                <input type="text" name="edad" value={edad}  onChange={(e) => setEdad(e.target.value)} class="input" placeholder="Age"/>
                <div class="highlight"></div>
            </div>
            <button className="btncalories" onClick={handleGuardarDatos}>Guardar Datos</button>
        </div>
    )
}

export default Datos;