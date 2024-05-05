import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Config";
import './_courses.scss'; // Estilos SCSS del componente
import CoursesList from "./CoursesList";

// Componente principal de la página de cursos
const Courses = () => {
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
        <h2>Cursos En Línea - Mariano Moreno</h2>
        <p>¡Iniciá En Febrero!</p>
      </div>
      <div className="containerCoursesList">
        {/* Renderiza el componente CoursesList pasando la lista de cursos como prop */}
        <CoursesList courses={cursos} />
      </div>
    </div>
  );
};

export default Courses; // Exporta el componente Courses
