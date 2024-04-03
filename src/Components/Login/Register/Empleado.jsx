import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Empleado = ({ agregarDatos, subirDatosAFirebase }) => {
    
    const navigate = useNavigate();

    // Definimos los estados para cada input del formulario
    const [estudiosPrimarios, setEstudiosPrimarios] = useState('')
    const [estudiosSecundarios, setEstudiosSecundarios] = useState('')
    const [estudiosTerciarios, setEstudiosTerciarios] = useState('')
    const [estudiosUniversitarios, setEstudiosUniversitarios] = useState('')
    const [experienciasLaborales, setExperienciasLaborales] = useState('')
    const [error, setError] = useState(''); // Define setError como un estado

    const handleSubmit = async (event) => {

        event.preventDefault();

        // Verificar si todos los campos obligatorios están completos
        if ( !estudiosPrimarios || !estudiosSecundarios || !experienciasLaborales  ) {
            setError('Por favor, complete todos los campos obligatorios.');
            return;
        }

            // Recopilar los valores de todos los inputs
        const formData = {
        estudiosPrimarios,
        estudiosSecundarios,
        estudiosTerciarios,
        estudiosUniversitarios,
        experienciasLaborales // Agrega aquí cualquier otro campo que desees incluir
        };

        // Imprimir los valores en la consola
        console.log('Datos enviados:', formData);

         // Agregamos los datos al estado para ser enviados al componente padre
         agregarDatos(formData);

         // Llamamos a la función para subir los datos a Firebase
         await subirDatosAFirebase(formData); // Esperamos a que se complete la función subirDatosAFirebase

        // Mostrar notificación Toastify
        toast.success('¡Formulario enviado con éxito!', {
            onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
        });

    };

  return (

    <div>
        <section>

            <article>
            <p>Perfecto, eres empleado.</p>
            <p>A continuación te pediremos los datos de tu curriculum.</p>
            </article>
            
            <article>
                <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="estudiosprimarios">Estudios Primarios</label>
                    <input
                        type="text"
                        id="estudiosprimarios"
                        value={estudiosPrimarios}
                        onChange={(e) => setEstudiosPrimarios(e.target.value)}
                        placeholder="Título y Fecha"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estudiossecundarios">Estudios Secundarios</label>
                    <input
                        type="text"
                        id="estudiossecundarios"
                        value={estudiosSecundarios}
                        onChange={(e) => setEstudiosSecundarios(e.target.value)}
                        placeholder="Título y Fecha"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estudiosterciarios">Estudios Terciarios. (Opcional)</label>
                    <input
                        type="text"
                        id="estudiosterciarios"
                        value={estudiosTerciarios}
                        onChange={(e) => setEstudiosTerciarios(e.target.value)}
                        placeholder="Título y Fecha"
                    />
                </div>

                <div>
                    <label htmlFor="estudiosuniversitarios">Estudios Universitarios. (Opcional)</label>
                    <input
                        type="text"
                        id="estudiosuniversitarios"
                        value={estudiosUniversitarios}
                        onChange={(e) => setEstudiosUniversitarios(e.target.value)}
                        placeholder="Título y Fecha"
                    />
                </div>

                <div>
                <label htmlFor="experienciaslaborales">Experiencias Laborales</label>
                <textarea
                    id="experienciaslaborales"
                    value={experienciasLaborales}
                    onChange={(e) => setExperienciasLaborales(e.target.value)}
                    placeholder="Ingresa tus experiencias laborales aquí teniendo en cuenta el año, dónde y las tareas realizadas..."
                    rows="4" cols="50" // Ajusta el número de filas y columnas según sea necesario
                ></textarea>
                </div>

                <button type="submit">Aceptar y Subir a Firebase</button>

                </form>
            </article>
        </section>
    </div>
  )
}

export default Empleado