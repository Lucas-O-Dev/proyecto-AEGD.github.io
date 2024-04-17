import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {setDoc, updateDoc, doc} from 'firebase/firestore'
import {db} from '../../../../Firebase/Config'
import 'react-toastify/dist/ReactToastify.css';

 const  Empleador = () => {

    const [name,setName] = useState ("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    const setUpdateRef = doc(db, 'users/mediaId1');

    const editButton = async () =>{

        try {
            await updateDoc(setUpdateRef, {
                name:name,
                email:email
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
                email:email
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
            <p>Perfecto, eres empleador.</p>
            <p>A continuación te pediremos los datos de tu empresa.</p>
            </article>

            <section>
            <div>
                    <label htmlFor="name">Nombre y Apellido:</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
            </section>

            <section>
                <button onClick={editButton}>editButton</button>
                <button onClick={setButton}>setButton</button>
            </section>
        </div>
    )
}

export default Empleador




// import React, { useState } from 'react';

// const Empleador = () => {

//     const navigate = useNavigate();

//     // Definimos los estados para cada input del formulario
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Verificar si todos los campos obligatorios están completos
//         if (!name || !email ) {
//             setError('Por favor, complete todos los campos obligatorios.');
//             return;
//         }

//     // Recopilar los valores de todos los inputs
//     const formData = {
//         name,
//         email
//         };
//         // Imprimir los valores en la consola
//         console.log('Datos enviados:', formData);


//     };

//   return (
//     <div>
//         <section>
            
//             <article>
//                 <form onSubmit={handleSubmit}>

//                 <div>
//                 </div>

//                 <button type="submit">Enviar</button>

//                 </form>
//             </article>
//         </section>
//     </div>
//   )
// }

// export default Empleador