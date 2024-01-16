import "./Navbar.css"
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import appfirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appfirebase)

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(''); // Estado para la página actual
  const location = useLocation();

  useEffect(() => {
    // Actualiza el estado de la página actual cuando cambia la ubicación
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="nav">
      <header>
        <div className="logo">Nutri Life</div>
        <input type="checkbox" id="nav_check" hidden></input>
        <nav>
          <ul>
            <li>
              <Link to="/Home" className={currentPage === '/Home' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className={currentPage === '/recipes' ? 'active' : ''}>
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/calories" className={currentPage === '/calories' ? 'active' : ''}>
                Calories
              </Link>
            </li>
            <li>
              <Link to="/favorites" className={currentPage === '/favorites' ? 'active' : ''}>
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/login" className={currentPage === '/login' ? 'active' : ''}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </div>
  );
};

export default Navbar;
