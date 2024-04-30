import React from 'react';
import './StylesLogin/_signoutbutton.scss'
import { auth } from '../../../Firebase/Config'; // Asegúrate de importar 'auth' desde tu configuración de Firebase

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Cierre de sesión usando Firebase
      console.log('Usuario cerró sesión correctamente');
      // Aquí podrías redirigir al usuario a la página de inicio de sesión o a cualquier otra página
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <button onClick={handleSignOut} className='Btn'>Desloguearse</button>
  );
};

export default SignOutButton;
