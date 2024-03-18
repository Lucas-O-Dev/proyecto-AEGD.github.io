import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Config";
import './_courses.scss';
import CoursesList from "./CoursesList";

const Courses = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cursosRef = collection(db, "Cursos");

      try {
        const querySnapshot = await getDocs(cursosRef);
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCursos(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerCourses">
      <div className="containerInfoCourses">
        <h2>Cursos En Línea - Mariano Moreno</h2>
        <p>¡Iniciá En Febrero!</p>
      </div>
      <div className="containerCoursesList">
        <CoursesList courses={cursos} />
      </div>
    </div>
  );
};

export default Courses;
