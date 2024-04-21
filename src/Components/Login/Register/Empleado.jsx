import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../../../../Firebase/Config'
import { toast } from 'react-toastify'; // Agrega esta línea


const Empleado = () => {

    const [estudiosPrimarios, setEstudiosPrimarios] = useState("")
    const [estudiosSecundarios, setEstudiosSecundarios] = useState("")
    const [estudiosTerciarios, setEstudiosTerciarios] = useState("")
    const [estudiosUniversitarios, setEstudiosUniversitarios] = useState("")
    const [experienciasLaborales, setExperienciasLaborales] = useState("")

    const navigate = useNavigate()

    const setUpdateRef = doc(db, 'users/mediaId4');

    const editButton = async () =>{

        try {
            await updateDoc(setUpdateRef, {
                estudiosPrimarios:estudiosPrimarios,
                estudiosSecundarios:estudiosSecundarios,
                estudiosTerciarios:estudiosTerciarios,
                estudiosUniversitarios:estudiosUniversitarios,
                experienciasLaborales:experienciasLaborales
            })

        // Mostrar notificación Toastify
        toast.success('¡Formulario enviado con éxito!', {
            onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error)
        }
    }

    return(

<>
<section>
            <article>
                <p>Perfecto, eres empleado.</p>
                <p>A continuación te pediremos los datos de tu curriculum.</p>
            </article>

            <div>
            <label htmlFor="name">estudiosPrimarios</label>
            <input
            type="text"
            onChange={(e) => setEstudiosPrimarios(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">estudiosSecundarios</label>
            <input
            type="text"
            onChange={(e) => setEstudiosSecundarios(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">estudiosTerciarios</label>
            <input
            type="text"
            onChange={(e) => setEstudiosTerciarios(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="name">estudiosUniversitarios</label>
            <input
            type="text"
            onChange={(e) => setEstudiosUniversitarios(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">experienciasLaborales</label>
            <textarea
            onChange={(e) => setExperienciasLaborales(e.target.value)}
            placeholder="Ingresa tus experiencias laborales aquí teniendo en cuenta el año, dónde y las tareas realizadas..."
            rows="4"
            cols="50"
            ></textarea>
            </div>


        </section>

        <section>
        <button onClick={editButton}>editButton</button>
        </section></>
    )
}

export default Empleado


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Empleado = ({ agregarDatos, subirDatosAFirebase }) => {
    
//     const navigate = useNavigate();

//     // Definimos los estados para cada input del formulario

//     const [error, setError] = useState(''); // Define setError como un estado

//     const handleSubmit = async (event) => {

//         event.preventDefault();

//         // Verificar si todos los campos obligatorios están completos
//         if ( !estudiosPrimarios || !estudiosSecundarios || !experienciasLaborales  ) {
//             setError('Por favor, complete todos los campos obligatorios.');
//             return;
//         }

//             // Recopilar los valores de todos los inputs
//         const formData = {
//         estudiosPrimarios,
//         estudiosSecundarios,
//         estudiosTerciarios,
//         estudiosUniversitarios,
//         experienciasLaborales // Agrega aquí cualquier otro campo que desees incluir
//         };

//         // Imprimir los valores en la consola
//         console.log('Datos enviados:', formData);

//          // Agregamos los datos al estado para ser enviados al componente padre
//          agregarDatos(formData);

//          // Llamamos a la función para subir los datos a Firebase
//          await subirDatosAFirebase(formData); // Esperamos a que se complete la función subirDatosAFirebase

//         // Mostrar notificación Toastify
//         toast.success('¡Formulario enviado con éxito!', {
//             onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
//         });

//     };

//   return (

//     <div>
//         <section>


            
//             <article>
//                 <form onSubmit={handleSubmit}>

//                 <div>
//                     <label htmlFor="estudiosprimarios">Estudios Primarios</label>
//                     <input
//                         type="text"
//                         id="estudiosprimarios"
//                         value={estudiosPrimarios}
//                         onChange={(e) => setEstudiosPrimarios(e.target.value)}
//                         placeholder="Título y Fecha"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="estudiossecundarios">Estudios Secundarios</label>
//                     <input
//                         type="text"
//                         id="estudiossecundarios"
//                         value={estudiosSecundarios}
//                         onChange={(e) => setEstudiosSecundarios(e.target.value)}
//                         placeholder="Título y Fecha"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="estudiosterciarios">Estudios Terciarios. (Opcional)</label>
//                     <input
//                         type="text"
//                         id="estudiosterciarios"
//                         value={estudiosTerciarios}
//                         onChange={(e) => setEstudiosTerciarios(e.target.value)}
//                         placeholder="Título y Fecha"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="estudiosuniversitarios">Estudios Universitarios. (Opcional)</label>
//                     <input
//                         type="text"
//                         id="estudiosuniversitarios"
//                         value={estudiosUniversitarios}
//                         onChange={(e) => setEstudiosUniversitarios(e.target.value)}
//                         placeholder="Título y Fecha"
//                     />
//                 </div>

//                 <div>
//                 <label htmlFor="experienciaslaborales">Experiencias Laborales</label>
//                 </div>

//                 <button type="submit">Aceptar y Subir a Firebase</button>

//                 </form>
//             </article>
//         </section>
//     </div>
//   )
// }

// export default Empleado