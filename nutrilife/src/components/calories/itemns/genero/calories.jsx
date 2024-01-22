import "./Calories.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { toast } from 'react-toastify';

const Calories = ({ onSeleccion }) => {
    const [generoSeleccionado, setGeneroSeleccionado] = useState(null);

    const handleGenderSelection = (genero) => {
        setGeneroSeleccionado(genero);
        toast.success(`Selected gender ${genero}`, {
            style: { backgroundColor: 'black', color: 'white' },
            autoClose: 2000,
          });
    };

    const handleNextClick = () => {
        if (generoSeleccionado) {
            onSeleccion({
                genero: generoSeleccionado,
            });
        
        } else {
            toast.error('Select a gende before moving forward', {
                style: { backgroundColor: 'black', color: 'white' },
                autoClose: 2000,
              });
        }
    };
    return (
        <div className="calories">
            <div className="cardgender">
                <h2>Please: select your gender</h2>
                <div className="genderButtons">
                <button className="genderButton" onClick={() => handleGenderSelection('Male')}>
                <FontAwesomeIcon icon={faMars} />
                <span> Male</span>
            </button>
            <button className="genderButton" style={{ backgroundColor: "pink" }} onClick={() => handleGenderSelection('Female')}>
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


