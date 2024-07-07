import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import { Container, Card, CardContent, Typography, CircularProgress, Button } from '@mui/material';
import { Fade } from '@mui/material';

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const docRef = doc(db, 'Jobs', id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setJob({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log('No se encontró ningún trabajo con ese ID');
        }
      } catch (error) {
        console.error('Error al obtener el trabajo', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
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
                Detalles del Trabajo
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Descripción: {job.descripcion}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Duración: {job.duracion}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Experiencia Requerida: {job.experienciaRequerida}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Jornada Laboral: {job.jornadaLaboral}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Localidad: {job.localidad}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Modalidad: {job.modalidad}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Nivel Educativo: {job.nivelEducativo}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Puesto: {job.puesto}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Rubro: {job.rubro}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Sueldo: {job.sueldo}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Contactar con la empresa
              </Button>
            </CardContent>
          </Card>
        </Fade>
      )}
    </Container>
  );
};

export default JobDetails;

