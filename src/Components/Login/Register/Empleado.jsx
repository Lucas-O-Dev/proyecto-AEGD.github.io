import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {updateDoc, doc} from 'firebase/firestore'
import {db,auth} from '../../../../Firebase/Config'
import { toast } from 'react-toastify'; // Agrega esta línea
import RubroSelect from '../../RubroSelect/RubroSelect'

const rubros = {
    Agronomía: ["Tractorista", "Tambero"],
    Programación: ["Frontend", "Backend", "Fullstack"],
    Construcción: ["Albañil", "Arquitecto"],
    Administración: ["Contador", "Secretaria"],
    Metalúrgica: ["Soldador", "Operario"],
    "Empleado de Comercio": ["Cajero", "Reponedor"],
    Varios: ["Subrubro 1", "Subrubro 2"]
};


const Empleado = () => {

    const [estudiosPrimarios, setEstudiosPrimarios] = useState("")
    const [estudiosSecundarios, setEstudiosSecundarios] = useState("")
    const [estudiosTerciarios, setEstudiosTerciarios] = useState("")
    const [estudiosUniversitarios, setEstudiosUniversitarios] = useState("")
    const [experienciasLaborales, setExperienciasLaborales] = useState("")
    const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario
    const [inputValues, setInputValues] = useState({
        rubro: '',
        subRubro: '' // Añadimos subRubro al estado
    });
    const navigate = useNavigate()

   // Obtener el UID del usuario actual al cargar el componente
   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            setUserUID(user.uid);
        }
    });
    return () => unsubscribe();
}, []);


    // Maneja el cambio del Select de rubro
    const handleRubroChange = (event) => {
        const { value } = event.target; // Extrae el valor seleccionado
        setInputValues({
            ...inputValues, // Mantiene los valores anteriores
            rubro: value, // Actualiza el rubro seleccionado
            subRubro: '' // Reinicia subRubro al cambiar el rubro
        });
    };

    const handleSubRubroChange = (event) => {
        const { value } = event.target;
        setInputValues({
            ...inputValues,
            subRubro: value
        });
    };

// Referencia al documento en Firestore usando el UID del usuario
const setUpdateRef = userUID ? doc(db, `users/${userUID}`) : null;

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


            <div>
                            <RubroSelect
                                rubros={rubros}
                                rubro={inputValues.rubro}
                                subRubro={inputValues.subRubro}
                                handleRubroChange={handleRubroChange}
                                handleSubRubroChange={handleSubRubroChange}
                            />
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