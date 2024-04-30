import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setDoc, doc} from 'firebase/firestore'
import {db} from '../../../Firebase/Config'
import 'react-toastify/dist/ReactToastify.css';

const  Empleador = () => {

    const [name,setName] = useState ("")
    const [emailPersonal, setEmailPersonal] = useState("")
    const [localidad,setLocalidad] = useState ("")
    const [numeroTelefonico, setNumeroTelefonico] = useState("")
    const [rol, setRol] = useState(""); // Nuevo estado para el rol

    const navigate = useNavigate();

    const setUpdateRef = doc(db, 'users/mediaId4');

    const setButton = async () => {
        try {
            await setDoc(setUpdateRef, {
                name: name,
                emailPersonal: emailPersonal,
                localidad: localidad,
                numeroTelefonico: numeroTelefonico,
                rol: rol // Incluir el rol en el nuevo documento
            })
    
            // Determinar la ruta a la que se debe redirigir dependiendo del rol
            let redirectTo = '/Home'; // Ruta por defecto
            if (rol === 'empleado') {
                redirectTo = '/empleado'; // Redirigir a la ruta del panel de administrador
            } else if (rol === 'empleador') {
                redirectTo = '/empleador'; // Redirigir a la ruta del panel de empleado
            }
    
            // Mostrar notificación Toastify y redirigir a la ruta adecuada
            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate(redirectTo) // Navegar a la ruta especificada cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <article>
            <p>datos personales</p>
            <p>A continuación te pediremos tus datos personales </p>
            </article>

            <section>
            <div>
                    <label htmlFor="name">Nombre y Apellido:</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        onChange={(e) => setEmailPersonal(e.target.value)}
                        required
                    />

                    <label htmlFor="localidad">Localidad</label>
                    <input
                    type="email"
                    onChange={(e) => setLocalidad(e.target.value)}
                    required
                    />

                    <label htmlFor="numerotelefonico">numeroTelefonico</label>
                    <input
                    type="email"
                    onChange={(e) => setNumeroTelefonico(e.target.value)}
                    required
                    />

                    <label htmlFor="rol">Rol:</label>
                    <input
                    type="text"
                    placeholder="'¿empleado o empleador?"
                    onChange={(e) => setRol(e.target.value)}
                    required
                    />

                </div>
            </section>

            <section>
                <button onClick={setButton}>setButton</button>
            </section>
        </div>
    )
}

export default Empleador




