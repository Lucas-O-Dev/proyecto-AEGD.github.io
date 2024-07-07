import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import { Container, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import { Fade } from '@mui/material';


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
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Fade in={!loading}>
          <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2, padding: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Detalles del Curso
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Nombre: {course.course}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Descripción: {course.description}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Duración: {course.duration}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => addToCart(course)}>
                Agregar al carrito
              </Button>
            </CardContent>
          </Card>
        </Fade>
      )}
    </Container>
  );
};

export default CourseDetails;

