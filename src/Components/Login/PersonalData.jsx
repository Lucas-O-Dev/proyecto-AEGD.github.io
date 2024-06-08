import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setDoc, doc} from 'firebase/firestore'
import {db, auth} from '../../../Firebase/Config'
import 'react-toastify/dist/ReactToastify.css';
import PhoneSignin from "./PhoneSignin";

const  PersonalData = () => {
    // Estados para almacenar los datos personales
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [direccion, setDireccion] = useState ("")
    const [localidad, setLocalidad] = useState ("")
    const [cp, setCp] = useState ("")
    const [numeroTelefonico, setNumeroTelefonico] = useState("")
    const [roles, setRoles] = useState([]); // Estado para almacenar múltiples roles
    const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario

    const navigate = useNavigate();

   // Obtener el UID del usuario actual al cargar el componente
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            setUserUID(user.uid);
        }
    });
    return () => unsubscribe();
}, []);

// Referencia al documento en Firestore usando el UID del usuario
const setUpdateRef = userUID ? doc(db, `users/${userUID}`) : null;

const handleRoleChange = (e) => {
    const role = e.target.value;
    // Si el rol seleccionado ya está en roles, lo desmarca
    if (roles.includes(role)) {
        setRoles(roles.filter(r => r !== role));
    } else {
        // Si el rol seleccionado no está en roles, lo marca y desmarca los otros
        setRoles([role]);
    }
};



    // Función para guardar los datos en Firestore
    const setButton = async () => {
        try {
            await setDoc(setUpdateRef, {
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                localidad: localidad,
                cp: cp,
                numeroTelefonico: numeroTelefonico,
                roles: roles // Cambiado a 'roles' en lugar de 'rol'
            })
    
            // Determinar la ruta a la que se debe redirigir dependiendo del rol
            let redirectTo = '/Home'; // Ruta por defecto
            if (roles.includes('empleado')) {
                redirectTo = '/empleado'; // Redirigir a la ruta del panel de empleado
            } else if (roles.includes('empleador')) {
                redirectTo = '/empleador'; // Redirigir a la ruta del panel de empleador
            }
    
            // Mostrar notificación Toastify y redirigir a la ruta adecuada
            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate(redirectTo) // Navegar a la ruta especificada cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error)
        }
    }
    
    // JSX que define la estructura y los elementos del componente
    return (
        <div>
            {/* Sección de datos personales */}
            <article>
                <p>datos personales</p>
                <p>A continuación te pediremos tus datos personales </p>
            </article>

            {/* Sección de entrada de datos */}
            <section>
                <div>
                    {/* Checkboxes para seleccionar roles */}
                    <label>Roles:</label><br />
                    <input type="checkbox" value="empleado" checked={roles.includes("empleado")} onChange={handleRoleChange} />empleado <br />
                    <input type="checkbox" value="empleador" checked={roles.includes("empleador")} onChange={handleRoleChange} /> empleador<br />


                    {/* Campos de entrada para nombre, apellido y número telefónico */}
                    <label >Nombre</label>
                    <input
                        type="text"
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <label >Apellido</label>
                    <input
                        type="text"
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />

<label >direccion</label>
                    <input
                        type="text"
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />

<label >localidad</label>
                    <input
                        type="text"
                        onChange={(e) => setLocalidad(e.target.value)}
                        required
                    />

<label >Código Postal</label>
                    <input
                        type="text"
                        onChange={(e) => setCp(e.target.value)}
                        required
                    />

                    <section>

                        <p>Por favor verifica tu numero de celular.</p>
                        {/* <PhoneSignin /> */}


                    {/* <label >Numero Telefónico</label>
                    <input
                        type="text"
                        onChange={(e) => setNumeroTelefonico(e.target.value)}
                        required
                    /> */}
                    </section>

                </div>
            </section>

            {/* Botón para guardar los datos */}
            <section>
                <button onClick={setButton}>Guardar</button>
            </section>
        </div>
    )
}

export default PersonalData