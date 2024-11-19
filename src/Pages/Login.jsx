import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Auth.module.css';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/endpoints"

function Login() {
  
  const { login } = useUser(); // Obtener la función login del context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Estado para manejar errores
  const [success, setSuccess] = useState(false); // Estado para manejar éxito

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Resetear errores antes de hacer la solicitud

    try {
      const usuario = await login({ email, password });
      console.log("Login exitoso:", usuario);
      setSuccess(true); // Indicar éxito
    } catch (err) {
      console.error("Error en login:", err.message);
      setError(err.message); // Capturar y mostrar error
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>} {/* Mostrar error */}
      {success && <p className={styles.success}>Login exitoso!</p>} {/* Mostrar éxito */}
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className={styles.link}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;