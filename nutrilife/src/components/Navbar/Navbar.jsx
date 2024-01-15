import "./Navbar.css"
import { Link } from "react-router-dom";

import appfirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appfirebase)
const Navbar = () =>{
    const estaLogeado = localStorage.getItem('estaLogeado');
    console.log("navbar", estaLogeado)

    const desloguear = async () => {
        try {
            await auth.signOut();
            localStorage.setItem('estaLogeado', 'false');
            console.log("Usuario deslogeado con éxito");
        } catch (error) {
            console.error("Error al intentar desloguear:", error.message);
        }
    }
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
              {estaLogeado ? (
                <a href="" onClick={desloguear}>
                  Logout
                </a>
              ) : (
                <Link to="/login">
                  <a href="">Login</a>
                </Link>
              )}
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