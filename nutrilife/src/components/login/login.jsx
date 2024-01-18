import "./login.css"
import React,  { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import appfirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from "../Navbar/Navbar";
const auth = getAuth(appfirebase);

const Login = () => {
    const [estaLogeado, setEstaLogeado] = useState(false);
    const [registrando, setRegistrando] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        if (container && registerBtn && loginBtn) {
            registerBtn.addEventListener('click', () => {
                container.classList.add("active");
            });

            loginBtn.addEventListener('click', () => {
                container.classList.remove("active");
            });
        }
        const unsubscribe = auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                setEstaLogeado(true);
                localStorage.setItem('estaLogeado', 'true');
            } else {

                setEstaLogeado(false);
                localStorage.setItem('estaLogeado', 'false');
            }
        });

        return () => unsubscribe();
    }, []);

    console.log("soy está logeado", estaLogeado)

    const autenticacion = async (event) => {
        event.preventDefault();
        const correo = event.target.email.value;
        const contraseña = event.target.password.value;
        console.log(correo, contraseña);
    
        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                Swal.fire({
                    title: "Good job!",
                    text: "you have registered successfully!",
                    icon: "success"
                  });
            } else {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                Swal.fire("Welcome!", correo);
                localStorage.setItem('userEmail', correo)
            }
        } catch (error) {
            console.error("Error de autenticación:", error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error, check the data carefully",
              });
        }
    };


    return(
        <><Navbar></Navbar>
        <div className="login">
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={autenticacion}>
                        <h1>Creat your account</h1>
                        {/* REGISTRARSE */}

                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="sumbit">Sign up</button>
                    </form>
                </div>
                {/* INICIO SESION */}
                <div className="form-container sign-in">
                    <form onSubmit={autenticacion}>
                        <h1>Log in</h1>

                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Did you forget your password?</a>
                        <button type="sumbit">Log in</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-pannel toggle-left">
                            <h1>Welcome!</h1>
                            <p>¿Do you already have an account? Log in to see the best recipes</p>
                            <button className="hidden" id="login" onClick={() => setRegistrando(!registrando)}>Log in</button>
                        </div>
                        <div className="toggle-pannel toggle-right">
                            <h1>Hello! Don't have an account yet?</h1>
                            <p>Register to discover a world of recipes!</p>
                            <button className="hidden" id="register" onClick={() => setRegistrando(!registrando)}>Sign up</button>

                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
};



export default Login;