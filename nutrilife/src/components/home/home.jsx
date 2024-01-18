import { Link } from "react-router-dom";
import wallpaper2 from "../../utils/wallpaper2.jpg";

import "./home.css"
const Home = () => {
    return(
        <div className="landing" style={{ backgroundImage: `url(${wallpaper2})`, height: '100vh', backgroundSize: 'cover' }}>
        <div className="welcome">
            <div className="title"><h1>NUTRILIFE</h1></div>
            <h3>Find your recipes here to lead your healthy life</h3>
            <div className="buttons">
            <Link to="/login"><button> Log In
            </button></Link>
           <Link to="/recipes"><button> Find recipes
            </button></Link>
            </div>

        </div>
    </div>
    )
};

export default Home;