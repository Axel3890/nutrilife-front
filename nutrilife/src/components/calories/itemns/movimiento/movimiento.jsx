import React, { useState } from 'react';
import "./movimiento.css"
import { toast } from 'react-toastify';

const Movimientos = ({ onSeleccion }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleOptionChange = (e) => {
        setOpcionSeleccionada(e.target.value);
    };

    const handleNextClick = () => {

        if (opcionSeleccionada) {

            onSeleccion({
                movimiento: opcionSeleccionada,
            });
        } else {

            toast.error('Select an option before continuing', {
                style: { backgroundColor: 'black', color: 'white' },
                autoClose: 2000,
              });
        }
    };

    return (
        <div className="cardgender">
            <h2>Now, select your level of physical activity</h2>
            <div className="actividades">
                <label>
                    <input
                        type="radio"
                        name="actividad"
                        value="Sedentary"
                        onChange={handleOptionChange}
                        checked={opcionSeleccionada === 'Sedentary'}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sofa" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z" /><path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" /><path d="M12 5v9" /></svg>
                </label>

                <label>
                    <input
                        type="radio"
                        name="actividad"
                        value="Light activity"
                        onChange={handleOptionChange}
                        checked={opcionSeleccionada === 'Light activity'}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-walk" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 21l3 -4" /><path d="M16 21l-2 -4l-3 -3l1 -6" /><path d="M6 12l2 -3l4 -1l3 3l3 1" /></svg>
                </label>

                <label>
                    <input
                        type="radio"
                        name="actividad"
                        value="Moderate activity"
                        onChange={handleOptionChange}
                        checked={opcionSeleccionada === 'Moderate activity'}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-run" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 17l5 1l.75 -1.5" /><path d="M15 21l0 -4l-4 -3l1 -6" /><path d="M7 12l0 -3l5 -1l3 3l3 1" /></svg>
                </label>

                <label>
                    <input
                        type="radio"
                        name="actividad"
                        value="High activity"
                        onChange={handleOptionChange}
                        checked={opcionSeleccionada === 'High activity'}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" /><path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                </label>

                <label>
                    <input
                        type="radio"
                        name="actividad"
                        value="Very high activity"
                        onChange={handleOptionChange}
                        checked={opcionSeleccionada === 'Very high activity'}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barbell" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" /></svg>
                </label>

            </div>
            <button className='btncalories' onClick={handleNextClick}>Next</button>
            <h3>selected option: {opcionSeleccionada || 'None'}</h3>
        </div>
    );
}

export default Movimientos;
