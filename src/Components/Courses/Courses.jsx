import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Config";
import './_courses.scss'; // Estilos SCSS del componente
import CoursesList from "./CoursesList";
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';

// Componente principal de la página de cursos
const Courses = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
  }));

  // Estado para almacenar la lista de cursos
  const [cursos, setCursos] = useState([]);

  // Efecto para cargar los cursos desde Firestore al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      const cursosRef = collection(db, "Cursos"); // Referencia a la colección "Cursos" en Firestore

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
        console.error("Error fetching courses:", error);
      }
    };

    // Llama a la función fetchData para obtener los cursos
    fetchData();
  }, []); // Se ejecuta solo al montar el componente ([] como dependencia vacía)

  // Renderiza la estructura del componente
  return (
    <div className="containerCourses">
      <div className="containerInfoCourses">
        <Item>Cursos En Línea - Asociación Empresarial</Item>
        <div className="containerImgContainerInfoCourses">
          
        </div>
        <Item className="secondItemInfoCourses">Puedes seleccionar el curso que mejor se adapte a tus objetivos profesionales y alcanzar el puesto de trabajo que deseas.</Item>
      </div>
      <div className="containerCoursesList">
        {/* Renderiza el componente CoursesList pasando la lista de cursos como prop */}
        <CoursesList courses={cursos} />
      </div>
    </div>
  );
};

export default Courses; // Exporta el componente Courses
