import React from "react";
import { Link } from "react-router-dom";
import './_courseslist.scss';

const CoursesList = ({ courses }) => {
  try {
    return (
      <div className="containerList">
        {courses.map((course) => {
          console.log("Course data:", course); // Agregar console.log con los datos del curso
          return (
            <div key={course.id} className="card">
              <div className="card-details">
                <h3>{course.course}</h3>
                <p>{course.duration}</p>
                <p>{course.description}</p>
              </div>
              {/* Utiliza Link en lugar de un enlace <a> para la navegación */}
              <Link className="card-button" to={`/course/${course.id}`}>More info</Link>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error rendering CoursesList:", error);
    return (
      <div className="error-message">
        Something went wrong while rendering the courses list.
      </div>
    );
  }
};

export default CoursesList;
