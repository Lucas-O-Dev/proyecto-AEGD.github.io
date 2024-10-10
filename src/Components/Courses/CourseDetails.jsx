import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../../Firebase/Config';
import { Box, Button, CircularProgress, Fade, Typography } from '@mui/material';
import myImage from '../../assets/800_imagen.jpg';
import LaptopIcon from '@mui/icons-material/Laptop';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FourthConteinerCourseDetail from './FourthConteinerCourseDetail';
import FifthConteinerCourseDetail from './FifthConteinerCourseDetail';
import SixthConteinerCourseDetail from './SixthConteinerCourseDetail';
import SeventhConteinerCourseDetail from './SeventhConteinerCourseDetail';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, 'Cursos', id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setCourse({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('No se encontró ningún curso con ese ID');
        }
      } catch (error) {
        console.error('Error al obtener el curso:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h5">No se encontró el curso.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', display: 'flex', width: '100%', flexDirection: 'column' }}>
      {/* Sección principal del curso */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '1rem', md: '5rem' },
          padding: { xs: '2rem', md: '6rem' },
        }}
      >
        {/* Información del curso */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ marginBottom: '10px', color: '#031b4e' }}>
            Curso de {course.course}
          </Typography>
          <Typography variant="body1">{course.description}</Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '10px',
            }}
          >
            <FavoriteIcon sx={{ color: 'red', cursor: 'pointer' }} />
            Curso Gratis.
          </Typography>
        </Box>

        {/* Imagen del curso y botón de acción */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img
            src={myImage}
            alt="Descripción del curso"
            style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain' }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Empezar Curso!
          </Button>
          <Typography variant="body2" sx={{ marginTop: '10px', color: '#777' }}>
            *Accede a este y a más de 112 cursos gratis!
          </Typography>
        </Box>
      </Box>

      {/* Sección de detalles adicionales */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '1rem', md: '2rem' },
          marginTop: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: { xs: '1rem', md: '1rem 6rem' },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <LaptopIcon /> Modalidad 100% {course.modality}.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
            El contenido está disponible las 24 horas del día para que puedas estudiar en tu propio horario.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <WorkspacePremiumIcon /> Certificado Internacional.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
            Al finalizar el Curso de {course.course}, puedes obtener un certificado de estudios, con validez internacional.
          </Typography>
        </Box>
      </Box>

      {/* Renderización de contenedores hijos */}
      <FourthConteinerCourseDetail course={course} />
      <FifthConteinerCourseDetail course={course} />
      <SixthConteinerCourseDetail course={course} />
      <SeventhConteinerCourseDetail course={course} />
    </Box>
  );
};

export default CourseDetails;
