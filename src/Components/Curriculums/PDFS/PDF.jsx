import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, InputLabel, Container, Typography } from '@mui/material';
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
    navigate('/')
  };

  return (
    <Container sx={{ paddingTop: 4, marginBottom: 8, backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <section>
          <InputLabel htmlFor="name">Nombre</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputLabel htmlFor="lastName">Apellido</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="email"
            size="small"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputLabel htmlFor="direccion">Dirección</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
          <InputLabel htmlFor="localidad">Localidad</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="localidad"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
          />
          <InputLabel htmlFor="cp">Código Postal</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="cp"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
          />
          <InputLabel htmlFor="numeroTelefonico">Número Telefónico</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="numeroTelefonico"
            name="numeroTelefonico"
            value={formData.numeroTelefonico}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputLabel htmlFor="estudiosPrimarios">Estudios Primarios</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="estudiosPrimarios"
            name="estudiosPrimarios"
            value={formData.estudiosPrimarios}
            onChange={handleChange}
          />
          <InputLabel htmlFor="estudiosSecundarios">Estudios Secundarios</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="estudiosSecundarios"
            name="estudiosSecundarios"
            value={formData.estudiosSecundarios}
            onChange={handleChange}
          />
          <InputLabel htmlFor="estudiosTerciarios">Estudios Terciarios</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="estudiosTerciarios"
            name="estudiosTerciarios"
            value={formData.estudiosTerciarios}
            onChange={handleChange}
          />
          <InputLabel htmlFor="estudiosUniversitarios">Estudios Universitarios</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="estudiosUniversitarios"
            name="estudiosUniversitarios"
            value={formData.estudiosUniversitarios}
            onChange={handleChange}
          />
          <InputLabel htmlFor="experienciasLaborales">Experiencias Laborales</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            size="small"
            id="experienciasLaborales"
            name="experienciasLaborales"
            value={formData.experienciasLaborales}
            onChange={handleChange}
          />
          <InputLabel htmlFor="aptitudes">Aptitudes</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            size="small"
            type="text"
            id="aptitudes"
            name="aptitudes"
            value={formData.aptitudes}
            onChange={handleChange}
          />
          <InputLabel htmlFor="motivo">¿Por qué quieres trabajar?</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            size="small"
            type="text"
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
          />
        </section>
        <Button type="submit" variant="contained">Guardar y generar PDF</Button>
      </form>
    </Container>
  );
};


export default MyComponent;



