import React, { useState, useEffect, useContext } from 'react';
import './_coursedetails.scss';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

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
      }
    };

    fetchCourse();
  }, [id]);

  return (
    <div className="conteinerDetails">
      {course ? (
        <div className="cardDetails">
          <h3>Detalles del Curso</h3>
          <p>Nombre: {course.course}</p>
          <p>Descripción: {course.description}</p>
          <p>Duración: {course.duration}</p>
          <button onClick={() => addToCart(course)}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CourseDetails;
