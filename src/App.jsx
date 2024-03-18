import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import LoginView from './Components/Login/LoginView'
import DashBoardView from './Components/Login/DashBoardView'
import EditProfileView from './Components/Login/EditProfileView'
import SignOutView from './Components/Login/SignOutView'
import PublicProfileView from './Components/Login/PublicProfileView'
import ChooseUserNameView from './Components/Login/ChooseUserNameView'
import Courses from './Components/Courses/Courses'
import CourseDetails from './Components/Courses/CourseDetails'
import Curriculums from './Components/Curriculums/Curriculums'
import Jobs from './Components/Jobs/Jobs'
import Cart from './Components/Cart/Cart'
import AddJobs from './Components/Jobs/AddJobs/AddJobs'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
import { CartProvider } from './Components/Context/CartContext'; // Importa el proveedor del contexto del carrito
import './App.css'


function App() {

  return (
<>

<CartProvider>
<BrowserRouter>
<Navbar/>
<Routes>

          <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginView />} />
            <Route path="/DashBoard" element={<DashBoardView />} />
            <Route path="/Dashboard/Profile" element={<EditProfileView />} />
            <Route path="/Signout" element={<SignOutView />} />
            <Route path="/u/:username" element={<PublicProfileView />} />
            <Route path="/choose-username" element={<ChooseUserNameView />} />
          <Route path="/Courses" element={<Courses />} />         
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/course/:id" element={<CourseDetails  />} />{/* Actualiza la ruta para los detalles del curso */}
          <Route path="/AddJobs" element={<AddJobs />} />
          <Route element={<ProtectedRoutes canActivate={true}/>}>

          <Route path="/Curriculums" element={<Curriculums />} />

          </Route>

</Routes>
</BrowserRouter>
</CartProvider>
</>
)}

export default App
