
import "./detailrecipe.css"
import { getDetail } from "../../requests/getDetail";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../loader/Loader";
import Navbar from "../Navbar/Navbar";

const Detail = () => {
    const { idDetail } = useParams();
    const [detail, setDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const email = localStorage.getItem('userEmail')
    const isLoged = localStorage.getItem("estaLogeado");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDetail(idDetail);


        if (response) {
          setDetail(response);
        } else {          alert("No hay datos disponibles.");
        }
      } catch (error) {
        console.error(error.message);      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [idDetail]);

  const addFav = async () => {
    if (isLoged === 'false') {
      alert("Debes estar logeado para agregar a favoritos.");
      return;
    }
    const recetaID = idDetail;
    try {
      const info = { email, recetaID };
      await axios.post('http://localhost:3001/addFav', info);
  
      toast.success('Receta añadida a favoritos correctamente', {
        style: { backgroundColor: 'black', color: 'white' },
        autoClose: 2000,
      });
    } catch (error) {
  

      toast.error('Error al agregar a favoritos', {
        style: { backgroundColor: 'black', color: 'white' },
        autoClose: 2000,
      });
    }
  };



    return(
      <><Navbar></Navbar>
    <div className="buttonback">
      <Link to="/recipes"><button className="back">
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Back</span>
      </button>
      </Link>
      </div>
      <div className="recipedetail">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="contenedor">
            <div className="contenedorimg">
              <img src={detail.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="contenedorgral">
              <div className="svg-container" onClick={addFav}><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="#FF0000" /></svg></div>
              <div className="contenedortitulo">
                <p className="titulo">{detail.label}</p>
              </div>
              <div className="info">
                <div className="detail-container">
                  <p className="detail">{detail.totalTime}</p>
                  <p className="specs">min</p>
                </div>
                <div className="vertical-line"></div>
                <div className="detail-container">
                  <p className="detail">{detail.calories}</p>
                  <p className="specs">kcal</p>
                </div>
                <div className="vertical-line"></div>
                <div className="detail-container">
                  <p className="detail">{detail.ingredients ? (detail.ingredients.length) : <p>Cargando ingredientes...</p>}</p>
                  <p className="specs">ingredients</p>
                </div>
              </div>
              <div className="detalle">
                <ul>
                  {detail.ingredients ? (
                    detail.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.text}</li>
                    ))
                  ) : (
                    <p>Loading ingredients...</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div></>
    )
}

export default Detail;