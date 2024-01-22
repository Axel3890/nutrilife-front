import React, { useState } from 'react';
import Datos from "./itemns/datos/datos";
import Calories from "./itemns/genero/calories";
import Movimientos from "./itemns/movimiento/movimiento";
import "./Calculador.css"
import Swal from 'sweetalert2';
import Navbar from "../Navbar/Navbar";

const Calculador = () => {
    const [etapa, setEtapa] = useState("calories");
    const [datosPrevios, setDatosPrevios] = useState({});
    console.log("soy datos previos", datosPrevios);

    const avanzarEtapa = (datos) => {
        setDatosPrevios({ ...datosPrevios, ...datos });

        if (etapa === "calories") {
            setEtapa("movimientos");
        } else if (etapa === "movimientos") {
            setEtapa("datos");
        }
    };

    const calcular = () => {
        const { genero, movimiento, datos, peso, edad } = datosPrevios;

        // Convertir el string de datos a un número
        const altura = datos;
        console.log(altura)
        // Calcular el GEB según la ecuación de Harris-Benedict
        let geb = 0;
        if (genero === 'Male') {
            geb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
        } else if (genero === 'Female') {
            geb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
        }

        // Multiplicar por el factor de actividad
        let factorActividad = 1.2; // Sedentario (puedes ajustar estos valores según tus necesidades)
        if (movimiento === 'Light activity') {
            factorActividad = 1.375;
        } else if (movimiento === 'Moderate activity') {
            factorActividad = 1.55;
        } else if (movimiento === 'High activity') {
            factorActividad = 1.725;
        } else if (movimiento === 'Very high activity') {
            factorActividad = 1.9;
        }

        console.log(factorActividad)
        const caloriasDiarias = Math.round(geb * factorActividad);

        Swal.fire({
            title: 'Calorías Diarias',
            text: `Tus calorías diarias son: ${caloriasDiarias}`,
            icon: 'success',
          });Swal.fire({
            title: 'Calorías Diarias',
            text: `Tus calorías diarias son: ${caloriasDiarias}`,
            icon: 'success',
          });
        // Puedes almacenar o mostrar el resultado según tus necesidades
    };

    return (
        <><Navbar></Navbar>
        <div className="calculador">
            {etapa === "calories" && <Calories onSeleccion={avanzarEtapa} />}
            {etapa === "movimientos" && <Movimientos onSeleccion={avanzarEtapa} />}
            {etapa === "datos" && <Datos onSeleccion={avanzarEtapa} calcular={calcular} />}
        </div></>
    );
};

export default Calculador;