
import "./home.css"
const img = require("../../utils/landing.jpg");
const Home = () => {
    return(
        <div className="landing">
        <div className="welcome">
            <div className="title"><h1>Nutri-Life: Encuentra tus recetas para llevar una vida sana</h1></div>
            <div className="buttons">
            <button class="buttonhome"> Iniciar sesion
            </button>
            <button class="buttonhome"> Busca tu receta
            </button>
            </div>

        </div>
        <div className="img">
            <img src={img} width={'400px'} height={'400px'}></img>
        </div>
    </div>
    )
};

export default Home;