import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PersonalData from './Components/Login/PersonalData';
import Register from './Components/Login/Register/Register';
import Profile from './Components/Login/Profile';
import Empleado from './Components/Login/Register/Empleado';
import Empleador from './Components/Login/Register/Empleador';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditInfoUserDatabase from './Components/Login/EditInfoUserDatabase';
import Jobs from './Components/Jobs/Jobs';
import AddJobs from './Components/Jobs/AddJobs/AddJobs';
import Courses from './Components/Courses/Courses';
import CourseDetails from './Components/Courses/CourseDetails';
import Curriculums from './Components/Curriculums/Curriculums';
import Layout from './Components/Layout/Layout';
import Documentation from './Components/Documentation/Documentation';
import JobDetails from './Components/Jobs/JobDetails';
import EmailAndNumberPhoneIsVerified from './Components/Login/EmailAndNumberPhoneIsVerified';
import ResetPasswordFirebase from './Components/Login/ResetPasswordFirebase';
import ServicesUser from './Components/Login/ServicesUser';
import Profesor from './Components/Login/Register/Profesor';

function App() {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours === 20 && minutes === 59) {
        sendEmail()
      }
    };

    // Ejecuta la función cada minuto
    const intervalId = setInterval(checkTime, 60000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  const sendEmail = async () => {
    try {
      const res = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(data);
        setError(null);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setError(error.message);
      setResponse(null);
    }
  };

  return (
    <>
      {/* <button onClick={sendEmail}>Send Email</button> */}
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/Home" element={<Layout><Home /></Layout>} />
          <Route path="/Documentation" element={<Layout><Documentation /></Layout>} />
          <Route path="/Profile" element={<Layout><Profile /></Layout>} />
          <Route path="/EditInfoUserDatabase" element={<Layout><EditInfoUserDatabase /></Layout>} />
          <Route path="/trabajos" element={<Layout><Jobs /></Layout>} />
          <Route path='/trabajo/:id' element={<Layout><JobDetails /></Layout>} />
          <Route path="/AddJobs" element={<Layout><AddJobs /></Layout>} />
          <Route path="/cursos" element={<Layout><Courses /></Layout>} />
          <Route path="/course/:id" element={<Layout><CourseDetails /></Layout>} />
          <Route path='/EmailIsVerified' element={<Layout><EmailAndNumberPhoneIsVerified /></Layout>} />
          <Route path='/ServicesUser' element={<Layout><ServicesUser /></Layout>} />
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Profesor" element={<Profesor />} />
          <Route path="/Empleado" element={<Empleado />} />
          <Route path="/Empleador" element={<Empleador />} />
          <Route path="/curriculum" element={<Curriculums />} />
          <Route path='/ResetPasswordFirebase' element={<ResetPasswordFirebase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
