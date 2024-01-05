import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
    <div className="nav">
 <header>
        <div className="logo">Nutri Life</div>
        <input type="checkbox" id="nav_check" hidden></input>
        <nav>
            <ul>
                <li>
                    <Link to="/Home"><a href="" className="active">Home</a></Link>
                </li>
                <li>
                    <Link to="/recipes"><a href="">Recipes</a></Link>
                </li>
                <li>
                    <Link to="/calories"><a href="">Calories</a></Link>
                </li>
                <li>
                    <Link to="/favorites"><a href="">Favorites</a></Link>
                </li>
                <li>
                    <Link to="/login"><a href="">Sesion</a></Link>
                </li>
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </header>
    </div>
    )
};

export default Navbar;