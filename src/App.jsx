import React, { useState, useEffect } from 'react';
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
import { collection, addDoc} from 'firebase/firestore'
import { db, auth } from '../Firebase/Config';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar'; // Importa la Navbar

function App() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Cuando el componente se monta, obtenemos el UID del usuario
    const obtenerUserID = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        setUserID(uid);
      }
    };
    obtenerUserID(); // Llamamos a la función que obtiene el userID
  }, []);

  const agregarDatos = (nuevosDatos) => {
    if (nuevosDatos && typeof nuevosDatos === 'object') {
        // Aquí puedes implementar la lógica específica para trabajar con objetos
        // Por ejemplo, podrías fusionar el objeto nuevosDatos con el estado actual datos
        const nuevosDatosFusionados = {...datos, ...nuevosDatos};
        setDatos(nuevosDatosFusionados);
    } else {
        console.error('Error: nuevosDatos no es un objeto');
    }
}


  // Función para subir los datos a Firebase
  const subirDatosAFirebase = async (formData) => {
    try {
      // Obtener una referencia a la colección "personalData" utilizando el ID único del usuario como identificador del documento
      const currentUser = auth.currentUser;
      const userID = currentUser ? currentUser.uid : null;
      const userFormDataRef = collection(db, `users/${userID}/personalData`);

      // Añadir un nuevo documento a la colección "personalData" utilizando el ID único del usuario como identificador del documento
      await addDoc(userFormDataRef, formData);
      console.log("Documento agregado correctamente a Firestore con el ID único del usuario como identificador.");
      // Aquí podrías agregar lógica adicional después de subir los datos si es necesario
    } catch (error) {
      console.error("Error al agregar el documento a Firestore:", error);
      // Aquí podrías manejar el error de alguna forma si es necesario
    }
  };

  return (
    <CartProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          {/* Rutas donde se renderizará la Navbar */}
          <Route path="/Home" element={<WithNavbar><Home /></WithNavbar>} />
          <Route path="/Profile" element={<WithNavbar><Profile /></WithNavbar>} />
          <Route path="/PersonalData" element={<WithNavbar><PersonalData agregarDatos={agregarDatos} subirDatosAFirebase={subirDatosAFirebase} /></WithNavbar>} />
          <Route path="/Empleado" element={<WithNavbar><Empleado agregarDatos={agregarDatos} subirDatosAFirebase={subirDatosAFirebase} /></WithNavbar>} />
          <Route path="/Empleador" element={<WithNavbar><Empleador /></WithNavbar>} />
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
