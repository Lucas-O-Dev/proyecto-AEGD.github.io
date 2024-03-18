import React from "react";
import { Link } from "react-router-dom"
import './_courseslist.scss'

const CoursesList = ({ courses }) => {

  return (
    
    <div className="containerList">
      {courses.map((course) => (
        <div key={course.id} className="card">
        <div className="card-details">
        <h3>{course.course}</h3>
        <p>{course.duration}</p>
          <p>{course.description}</p>
        </div>
        {/* Utiliza Link en lugar de un enlace <a> para la navegación */}
        <Link className="card-button" to={`/course/${course.id}`}>More info</Link>
      </div>
      ))}
    </div>
  );
};

export default CoursesList;
