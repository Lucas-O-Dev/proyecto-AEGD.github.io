import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import { Container, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import { Fade } from '@mui/material';
import './_coursedetails.scss'


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
<>
<div className="firstConteinerCourseDetails">
  
</div> 
<div className="secondConteinerCourseDetails">

</div>
</>
  );
};

export default CourseDetails;

{/* <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
{loading ? (
  <CircularProgress />
) : (
  <Fade in={!loading}>
    <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2, padding: 3 }}>
      <CardContent>
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          Curso: {course.course}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          Descripción: {course.description}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          Duración: {course.duration}
        </Typography>
      </CardContent>
    </Card>
  </Fade>
)}
</Container> */}

