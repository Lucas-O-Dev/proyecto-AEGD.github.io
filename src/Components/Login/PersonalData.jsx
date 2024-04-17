import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setDoc, updateDoc, doc} from 'firebase/firestore'
import {db} from '../../../Firebase/Config'
import 'react-toastify/dist/ReactToastify.css';

const  Empleador = () => {

    const [name,setName] = useState ("")
    const [email, setEmail] = useState("")
    const [localidad,setLocalidad] = useState ("")
    const [direccion, setDireccion] = useState("")
    const [numeroTelefonico, setNumeroTelefonico] = useState("")

    const navigate = useNavigate();

    const setUpdateRef = doc(db, 'users/mediaId4');

    const editButton = async () =>{

        try {
            await updateDoc(setUpdateRef, {
                name:name,
                email:email,
                localidad:localidad,
                direccion:direccion,
                numeroTelefonico:numeroTelefonico
            })

        // Mostrar notificación Toastify
        toast.success('Datos Editados Correctamente.', {
        onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
        });
        } catch (error) {
            console.log(error)
        }
    }

    const setButton = async () =>{
        try {
            await setDoc(setUpdateRef, {
                name:name,
                email:email,
                localidad:localidad,
                direccion:direccion,
                numeroTelefonico:numeroTelefonico
            })

        // Mostrar notificación Toastify
        toast.success('¡Formulario enviado con éxito!', {
        onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Localidad</label>
                    <input
                    type="email"
                    onChange={(e) => setLocalidad(e.target.value)}
                    required
                    />

                    <label htmlFor="email">direccion</label>
                    <input
                    type="email"
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                    />

                    <label htmlFor="email">numeroTelefonico</label>
                    <input
                    type="email"
                    onChange={(e) => setNumeroTelefonico(e.target.value)}
                    required
                    />

                </div>
            </section>

            <section>
                <button onClick={editButton}>editButton</button>
                <button onClick={setButton}>setButton</button>
            </section>
        </div>
    )
}

export default Empleador




