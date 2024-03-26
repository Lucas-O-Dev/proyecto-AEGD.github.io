import React, { useState } from 'react';
import { auth } from '../../../../Firebase/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate(); // Declara useNavigate

  const [registrando, setRegistrando] = useState(false);

  const funcAutentication = async (e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    setRegistrando(true); // Actualiza el estado para indicar que se está registrando

    try {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      console.log('Usuario registrado con éxito');
      navigate('/PersonalData');
      // Realiza acciones adicionales si es necesario
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Maneja el error de forma apropiada, ya sea mostrándolo al usuario o registrándolo para su posterior análisis
    } finally {
      setRegistrando(false); // Restablece el estado después de completar la operación
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <article>
        <form onSubmit={funcAutentication}>
          <input type="text" placeholder="Ingresar Email" id="email" />
          <input type="password" placeholder="Ingresar Pass" id="password" />
          <button type="submit">Registrarse</button>
        </form>
      </article>
      <section>
      <Link to={'/Login'} >¿Ya tienes una cuenta?</Link>
      </section>
    </div>
  );
};

export default Register;
