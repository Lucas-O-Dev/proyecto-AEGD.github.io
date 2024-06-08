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
import ResponsiveAppBar from './Components/Navbar/Navbar';
import EditInfoUserDatabase from './Components/Login/EditInfoUserDatabase';
import Jobs from './Components/Jobs/Jobs';
import AddJobs from './Components/Jobs/AddJobs/AddJobs';
import Courses from './Components/Courses/Courses';
import CourseDetails from './Components/Courses/CourseDetails'
import Curriculums from './Components/Curriculums/Curriculums'

function App() {

  return (

    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          {/* Rutas donde se renderizará la Navbar */}
          <Route path="/Home" element={<WithNavbar><Home /></WithNavbar>} />
          <Route path="/Profile" element={<WithNavbar><Profile /></WithNavbar>} />
          <Route path="/EditInfoUserDatabase" element={<WithNavbar><EditInfoUserDatabase /></WithNavbar>} />
          <Route path="/OfertasLaborales" element={<WithNavbar><Jobs /></WithNavbar>} />
          <Route path="/AddJobs" element={<WithNavbar><AddJobs /></WithNavbar>} />
          <Route path="/Cursos" element={<WithNavbar><Courses /></WithNavbar>} />
          <Route path="/course/:id" element={<WithNavbar><CourseDetails /></WithNavbar>} />
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

// Componente que envuelve los componentes con la Navbar
const WithNavbar = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
};

export default App;
