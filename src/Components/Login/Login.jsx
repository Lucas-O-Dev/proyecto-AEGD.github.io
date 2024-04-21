import React, { useState } from 'react';
import { auth } from '../../../Firebase/Config';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import './StylesLogin/_login.scss'

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
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;
      console.log('Usuario autenticado correctamente');
      console.log('UID del usuario:', user.uid); // Imprime el UID del usuario autenticado
      setError(null); // Limpiar errores si la autenticación tiene éxito
      navigate('/Home')
    } catch (error) {
      setError(error.message); // Manejar errores de autenticación
      console.error('Error al autenticar:', error.message);
    }
  };

  return (
    <div className='conteinerPrincipalLogin'>

      <section className='sectionOneLogin'>
        <h2>Inicia Sesión</h2>
        <article className='articleOneLogin'>
          <form onSubmit={funcAutentication} className='formOneLogin'>
              <div className="coolinput">
              <label for="input" className="text">Name:</label>
              <input type="text" placeholder="Email" name="input" className="input" id='email'/>
              <label for="contraseña" className="text">Contraseña</label>
              <input type="text" placeholder="Contraseña" name="contraseña" className="input" id='password'/>
              </div>
            <button type='submit'>Loguearse</button>
          </form>
          {error && <p>{error}</p>} {/* Mostrar mensaje de error si hay un error de autenticación */}
          <SignOutButton />
        </article>
      </section>

      <section className='sectionTwoLogin'>
      <Link to={'/Register'} ><p>¿No tienes una cuenta?</p></Link>
      </section>
      
    </div>
  );
};

export default Login;
