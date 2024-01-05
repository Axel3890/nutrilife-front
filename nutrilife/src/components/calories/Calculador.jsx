import React, { useState } from 'react';
import Datos from "./itemns/datos/datos";
import Calories from "./itemns/genero/calories";
import Movimientos from "./itemns/movimiento/movimiento";
import "./Calculador.css"
const Calculador = () => {
    const [etapa, setEtapa] = useState("calories");
    const [datosPrevios, setDatosPrevios] = useState({});
    console.log(datosPrevios);

    const avanzarEtapa = (datos) => {
        setDatosPrevios({ ...datosPrevios, ...datos });

        if (etapa === "calories") {
            setEtapa("movimientos");
        } else if (etapa === "movimientos") {
            setEtapa("datos");
        }
    };

    return (
        <div className="calculador">
            {etapa === "calories" && <Calories onSeleccion={avanzarEtapa} />}
            {etapa === "movimientos" && <Movimientos onSeleccion={avanzarEtapa} />}
            {etapa === "datos" && <Datos datosPrevios={datosPrevios} />}
        </div>
    );
};

export default Calculador;