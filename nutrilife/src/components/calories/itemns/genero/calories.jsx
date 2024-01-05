import "./Calories.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Calories = ({ onSeleccion }) => {
    const [generoSeleccionado, setGeneroSeleccionado] = useState(null);

    const handleGenderSelection = (genero) => {
        setGeneroSeleccionado(genero);
    };
    console.log(generoSeleccionado)
    const handleNextClick = () => {
        // Verifica si se ha seleccionado un género antes de avanzar
        if (generoSeleccionado) {
            // Llama a la función para avanzar a la siguiente etapa y pasa los datos
            onSeleccion({
                genero: generoSeleccionado,
            });
        } else {
            // Puedes manejar la falta de selección de género de alguna manera
            console.error("Debes seleccionar un género antes de continuar.");
        }
    };
    return (
        <div className="calories">
            <div className="cardgender">
                <h2>Please: select your gender</h2>
                <div className="genderButtons">
                <button className="genderButton" onClick={() => handleGenderSelection('masculino')}>
                <FontAwesomeIcon icon={faMars} />
                <span> Male</span>
            </button>
            <button className="genderButton" style={{ backgroundColor: "pink" }} onClick={() => handleGenderSelection('femenino')}>
                <FontAwesomeIcon icon={faVenus} />
                <span> Female</span>
            </button>
            <button className="btncalories" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Calories;


