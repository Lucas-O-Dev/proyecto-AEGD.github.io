import React, { useState } from 'react';
import Empleado from './Empleado';
import PersonalData from '../PersonalData';

const ComponentePadre = () => {
  const [datos, setDatos] = useState([]);

  // Función para agregar datos al estado
  const agregarDatos = (nuevosDatos) => {
    setDatos([...datos, ...nuevosDatos]);
  };

  // Función para subir los datos a Firebase
  const subirDatosAFirebase = () => {
    // Aquí puedes usar Firebase para subir los datos
    // Por ejemplo:
    // firebase.firestore().collection('nombreColeccion').doc('nombreDocumento').set(datos);
  };

  return (
    <div>
      <Empleado agregarDatos={agregarDatos} />
      <PersonalData agregarDatos={agregarDatos} />
    </div>
  );
};

export default ComponentePadre;
