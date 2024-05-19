

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './_pdf.scss'
import jsPDF from 'jspdf';

const MyComponent = () => {

  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({ 
    name: '', 
    lastName: '', 
    email: '', 
    direccion: '',
    localidad: '',
    cp: '',
    numeroTelefonico: '',
    estudiosPrimarios: '',
    estudiosSecundarios: '',
    estudiosTerciarios: '',
    estudiosUniversitarios: '',
    experienciasLaborales: '',
    aptitudes: '',
    motivo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text(JSON.stringify(formData, null, 4), 10, 10);

    // Guardar el PDF
    doc.save('formulario.pdf');

    // Mostrar un mensaje en la consola
    console.log('Formulario guardado como formulario.pdf');
    alert('Para que sus datos queden guardados, debe loguearse antes de crear el currículum. De lo contrario, después de generarlo, se borrará la información.');
    alert('¿confirmas que los datos están ingresados correctamente?')
    navigate ('/')
  };

  return (
    <form onSubmit={handleSubmit}>

    <section>
    <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Apellido:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
      />
            <label htmlFor="localidad">Localidad:</label>
      <input
        type="text"
        id="localidad"
        name="localidad"
        value={formData.localidad}
        onChange={handleChange}
      />
            <label htmlFor="cp">Código Postal:</label>
      <input
        type="text"
        id="cp"
        name="cp"
        value={formData.cp}
        onChange={handleChange}
      />
    </section>


    <section>
    <label htmlFor="numeroTelefonico">Número Telefónico:</label>
      <input
        type="text"
        id="numeroTelefonico"
        name="numeroTelefonico"
        value={formData.numeroTelefonico}
        onChange={handleChange}
      />
      <label htmlFor="estudiosPrimarios">Estudios Primarios:</label>
      <input
        type="text"
        id="estudiosPrimarios"
        name="estudiosPrimarios"
        value={formData.estudiosPrimarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosSecundarios">Estudios Secundarios:</label>
      <input
        type="text"
        id="estudiosSecundarios"
        name="estudiosSecundarios"
        value={formData.estudiosSecundarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosTerciarios">Estudios Terciarios:</label>
      <input
        type="text"
        id="estudiosTerciarios"
        name="estudiosTerciarios"
        value={formData.estudiosTerciarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosUniversitarios">Estudios Universitarios:</label>
      <input
        type="text"
        id="estudiosUniversitarios"
        name="estudiosUniversitarios"
        value={formData.estudiosUniversitarios}
        onChange={handleChange}
      />
                  <label htmlFor="experienciasLaborales">Experiencias Laborales:</label>
      <input
        type="text"
        id="experienciasLaborales"
        name="experienciasLaborales"
        value={formData.experienciasLaborales}
        onChange={handleChange}
      />
                        <label htmlFor="aptitudes">Aptitudes:</label>
      <input
        type="text"
        id="aptitudes"
        name="aptitudes"
        value={formData.aptitudes}
        onChange={handleChange}
      />
                              <label htmlFor="motivo">¿Por qué quieres trabajar?</label>
      <input
        type="text"
        id="motivo"
        name="motivo"
        value={formData.motivo}
        onChange={handleChange}
      />
    </section>
      <button type="submit">Guardar y generar PDF</button>
    </form>
  );
};

export default MyComponent;



