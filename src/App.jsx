import React from 'react';
// 1. import `ChakraProvider` component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/Context/CartContext'; // Importa el proveedor del contexto del carrito
import './App.css';
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PersonalData from './Components/Login/PersonalData'
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
import CourseDetails from './Components/Courses/CourseDetails'
import Curriculums from './Components/Curriculums/Curriculums'
import Layout from './Components/Layout/Layout';

function App() {

  return (

    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          {/* Rutas donde se renderizará la Navbar y el Footer */}
          <Route path="/Home" element={<Layout><Home /></Layout>} />
          <Route path="/Profile" element={<Layout><Profile /></Layout>} />
          <Route path="/EditInfoUserDatabase" element={<Layout><EditInfoUserDatabase /></Layout>} />
          <Route path="/OfertasLaborales" element={<Layout><Jobs /></Layout>} />
          <Route path="/AddJobs" element={<Layout><AddJobs /></Layout>} />
          <Route path="/Cursos" element={<Layout><Courses /></Layout>} />
          <Route path="/course/:id" element={<Layout><CourseDetails /></Layout>} />
          {/* Otras rutas */}
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PersonalData" element={<PersonalData/>} />
          <Route path="/Empleado" element={<Empleado />} />
          <Route path="/Empleador" element={<Empleador />} />
          <Route path="/curriculum" element={<Curriculums /> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}




export default App;
