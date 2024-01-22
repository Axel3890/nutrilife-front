import "./Navbar.css";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import appfirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(appfirebase);

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [user, setUser] = useState(null); // Nuevo estado para el usuario actual
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);

    // Verifica el estado de autenticación al cargar la página
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Limpia el evento al desmontar el componente
    return () => unsubscribe();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Después de cerrar sesión, puedes redirigir a la página de inicio o realizar otras acciones necesarias
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <div className="nav">
      <header>
        <div className="logo">Nutri Life</div>
        <input type="checkbox" id="nav_check" hidden></input>
        <nav>
          <ul>
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
              {user ? (
                // Si el usuario está autenticado, muestra el enlace de "Logout"
                <Link to="/login" onClick={handleLogout} className={currentPage === '/login' ? 'active' : ''}>Logout</Link>
              ) : (
                // Si el usuario no está autenticado, muestra el enlace de "Login"
                <Link to="/login" className={currentPage === '/login' ? 'active' : ''}>
                  Login
                </Link>
              )}
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

