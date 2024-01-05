
import "./detailrecipe.css"
import { getDetail } from "../../requests/getDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { idDetail } = useParams();
    const [detail, setDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDetail(idDetail);
        console.log("soy response", response)
        // Verifica si hay datos en la respuesta antes de establecer el estado
        if (response) {
          setDetail(response);
        } else {
          // Maneja la situación en la que no hay datos
          alert("No hay datos disponibles.");
        }
      } catch (error) {
        console.error(error.message);
        // Puedes manejar el error de alguna manera (mostrar un mensaje, redirigir, etc.)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [idDetail]);


    return(
        <div className="recipedetail">
            <div className="contenedor">
                <div className="contenedorimg">
                    <img src={detail.image} style={{overflow: "hidden"}}></img>
                </div>
                <div className="contenedorgral">
                <div className="svg-container"> <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div>
                    <div className="contenedortitulo">
                        <p className="titulo">{detail.label}</p>
                    </div>
                    <div className="info">
                        <div className="detail-container">
                            <p className="detail">{detail.totalTime}</p>
                            <p className="specs">min</p>
                        </div>
                        <div className="detail-container">
                            <p className="detail">{detail.calories}</p>
                            <p className="specs">kcal</p>
                        </div>
                        <div className="detail-container">
                            <p className="detail"></p>
                            <p className="specs">ingredientes</p>
                        </div>
                    </div>
                    <div className="detalle">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam modi nulla porro explicabo quasi, quas placeat, odit soluta, nemo vitae neque quibusdam. Cupiditate repellendus, necessitatibus tempore consectetur quasi odit inventore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;