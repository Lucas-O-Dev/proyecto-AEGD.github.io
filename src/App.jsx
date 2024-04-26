import React from 'react';
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
import Navbar from './Components/Navbar/Navbar'; // Importa la Navbar
import EditInfoUserDatabase from './Components/Login/EditInfoUserDatabase';
import Jobs from './Components/Jobs/Jobs';
import AddJobs from './Components/Jobs/AddJobs/AddJobs';
import Courses from './Components/Courses/Courses';
import CourseDetails from './Components/Courses/CourseDetails'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          {/* Rutas donde se renderizará la Navbar */}
          <Route path="/Home" element={<WithNavbar><Home /></WithNavbar>} />
          <Route path="/Profile" element={<WithNavbar><Profile /></WithNavbar>} />
          <Route path="/PersonalData" element={<WithNavbar><PersonalData /></WithNavbar>} />
          <Route path="/Empleado" element={<WithNavbar><Empleado /></WithNavbar>} />
          <Route path="/Empleador" element={<WithNavbar><Empleador /></WithNavbar>} />
          <Route path="/EditInfoUserDatabase" element={<WithNavbar><EditInfoUserDatabase /></WithNavbar>} />
          <Route path="/Jobs" element={<WithNavbar><Jobs /></WithNavbar>} />
          <Route path="/AddJobs" element={<WithNavbar><AddJobs /></WithNavbar>} />
          <Route path="/Courses" element={<WithNavbar><Courses /></WithNavbar>} />
          <Route path="/course/:id" element={<WithNavbar><CourseDetails /></WithNavbar>} />
          {/* Otras rutas */}
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// Componente que envuelve los componentes con la Navbar
const WithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default App;
