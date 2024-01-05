import "./login.css"
import React,  { useEffect, useState } from "react";

import appfirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appfirebase);

const Login = () => {
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
    }, []);

    const [registrando, setRegistrando] = useState(false)
    console.log(registrando)

    const autenticacion = async(event) => {
        event.preventDefault();
        const correo = event.target.email.value;
        const contraseña = event.target.password.value;
        console.log(correo, contraseña)

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            try {
                signInWithEmailAndPassword(auth, correo, contraseña);
                alert("ingresaste")
            } catch (error) {
                alert("El correo o la contraseña son incorrectos");
            }
        }
    }
    return(
        <div className="login">
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={autenticacion}>
                        <h1>Creat your account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i class="fa fa-google" aria-hidden="true"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-linked-in"></i></a>
                        </div>
                {/* REGISTRARSE */}
                        <span>Or use your email to register</span>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button type="sumbit">Sign up</button>
                    </form>
                </div>
                 {/* INICIO SESION */}
                <div className="form-container sign-in">
                <form onSubmit={autenticacion}>
                        <h1>Log in</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i class="fa-brands fa-google"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linked-in"></i></a>
                        </div>
                        <span>Or use your email and password</span>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <a href="#">Did you forget your password?</a>
                        <button type="sumbit">Log in</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-pannel toggle-left">
                            <h1>Welcome!</h1>
                            <p>¿Do you already have an account? Log in to see the best recipes</p>
                            <button className="hidden" id="login" onClick={()=>setRegistrando(!registrando)}>Log in</button>
                        </div>
                        <div className="toggle-pannel toggle-right">
                            <h1>Hello! Don't have an account yet?</h1>
                            <p>Register to discover a world of recipes!</p>
                            <button className="hidden" id="register" onClick={()=>setRegistrando(!registrando)}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Login;