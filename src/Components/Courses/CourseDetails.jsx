import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../../Firebase/Config';
import { Box, Button, CircularProgress, Fade, Typography } from '@mui/material';
import myImage from '../../assets/pngegg.png';
import LaptopIcon from '@mui/icons-material/Laptop';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FourthConteinerCourseDetail from './FourthConteinerCourseDetail';
import FifthConteinerCourseDetail from './FifthConteinerCourseDetail';

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

  return (
    <Box sx={{ padding: { xs: '10px', md: '20px' }, backgroundColor: '#f9f9f9' }}>
      {/* Sección principal del curso */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}
      >
        {/* Información del curso */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ marginBottom: '10px' }}>
            Curso de {course ? course.course : '...'}.
          </Typography>
          {loading ? (
            <Fade in={loading} timeout={500}>
              <CircularProgress />
            </Fade>
          ) : (
            <>
              <Typography variant="body1">{course.description}</Typography>
              <Typography variant="body2" sx={{ marginTop: '1rem' }}>
                Duración: {course.duration}.
              </Typography>
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
            </>
          )}
        </Box>

        {/* Imagen del curso y botón de acción */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img
            src={myImage}
            alt="Descripción del curso"
            style={{ width: '100%', height: '8rem', objectFit: 'contain' }}
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
      {!loading && course && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '20px',
            marginTop: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
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
              sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <WorkspacePremiumIcon /> Certificado Internacional.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
              Al finalizar el Curso de {course.course}, puedes obtener un certificado de estudios, con validez internacional.
            </Typography>
          </Box>
        </Box>
      )}

      {/* Otros contenedores de detalles del curso */}
      <FourthConteinerCourseDetail />
      <FifthConteinerCourseDetail />
    </Box>
  );
};

export default CourseDetails;
