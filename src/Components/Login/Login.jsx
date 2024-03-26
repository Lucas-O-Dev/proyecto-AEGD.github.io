import React, { useState } from 'react';
import { auth } from '../../../Firebase/Config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

console.log('Auth inicializado:', auth); // Verifica si auth se está inicializando correctamente

const Login = () => {

  const navigate = useNavigate()
  const [registrando, setRegistrando] = useState(false);
  const [error, setError] = useState(null);

  const funcAutentication = async (e) => {
    console.log('Función de autenticación llamada');
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      if (registrando) {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        setError(null); // Limpiar errores si la autenticación tiene éxito
        console.log('Usuario autenticado correctamente');
      }
    } catch (error) {
      setError(error.message); // Manejar errores de autenticación
      console.error('Error al autenticar:', error.message);
    }
  };

  const handleClickLogin = () => {
    navigate('/Home')
  }

  return (
    <div>
      <section>
        <h3>Inicia Sesión</h3>
        <article>
          <form onSubmit={funcAutentication}>
            <input type="text" placeholder="Ingresar Email" id="email" />
            <input type="password" placeholder="Ingresar Pass" id="password" />
            <button onClick={handleClickLogin}>Loguearse</button>
          </form>
          {error && <p>{error}</p>} {/* Mostrar mensaje de error si hay un error de autenticación */}
          <SignOutButton />
        </article>
      </section>

      <section>
      <Link to={'/Register'} >¿No tienes una cuenta?</Link>
      </section>
      
    </div>
  );
};

export default Login;
