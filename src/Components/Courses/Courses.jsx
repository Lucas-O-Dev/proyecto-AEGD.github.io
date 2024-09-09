import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import CoursesList from './CoursesList';
import { Box, Typography, Paper } from '@mui/material';

const Courses = () => {
  // Estado para almacenar la lista de cursos
  const [cursos, setCursos] = useState([]);

  // Efecto para cargar los cursos desde Firestore al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      const cursosRef = collection(db, 'Cursos'); // Referencia a la colección "Cursos" en Firestore
      try {
        // Obtiene los documentos de la colección "Cursos"
        const querySnapshot = await getDocs(cursosRef);
        // Mapea los documentos a objetos JavaScript
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualiza el estado con los datos de los cursos
        setCursos(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Llama a la función fetchData para obtener los cursos
    fetchData();
  }, []); // Se ejecuta solo al montar el componente ([] como dependencia vacía)

  return (
    <Box
      sx={{
        padding: '2rem 6rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Información principal */}
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
          Cursos En Línea - Asociación Empresarial
        </Typography>
      </Paper>

      {/* Lista de cursos */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CoursesList courses={cursos} />
      </Box>
    </Box>
  );
};

export default Courses;
