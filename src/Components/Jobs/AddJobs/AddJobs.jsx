import React, { useState } from 'react';
import { Select } from '@chakra-ui/react'
import './_addjobs.scss';
import Company from '../Company';
import ObtenerFechaActual from './ObtenerFechaActual';

const AddJobs = () => {
    const [inputValues, setInputValues] = useState({
        descripciondelpuesto: '',
        jornadaLaboral: '',
        experienciaRequerida: '',
        duracion: '',
        sueldo: '',
        nivelEducativo: '',
        modalidad: '',
        localidad: '',
        rubro: ''
    });
    const [showValuesInTemplate, setShowValuesInTemplate] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Valores de los inputs:', inputValues);
        setShowValuesInTemplate(true);
    };

    const handleEditClick = () => {
        setShowValuesInTemplate(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="firstContainerAddJobs">
                <div className="containerAddJobs">
                    <div className="containerFormAddJobs">
                        <p>Agrega tu oferta laboral aquí.</p>
                        <ObtenerFechaActual />
                        <form onSubmit={handleSubmit}>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="descripciondelpuesto">Descripción del puesto.</label>
                                <input
                                    type="text"
                                    id="descripciondelpuesto"
                                    name="descripciondelpuesto"
                                    value={inputValues.descripciondelpuesto}
                                    onChange={handleInputChange}
                                    placeholder="descripcion del puesto"
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="jornadaLaboral">Jornada Laboral</label>
                                <input
                                    type="text"
                                    id="jornadaLaboral"
                                    name="jornadaLaboral"
                                    value={inputValues.jornadaLaboral}
                                    onChange={handleInputChange}
                                    placeholder="tiempo completo, medio-tiempo.."
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="experienciaRequerida">Experiencia Requerida</label>
                                <input
                                    type="text"
                                    id="experienciaRequerida"
                                    name="experienciaRequerida"
                                    value={inputValues.experienciaRequerida}
                                    onChange={handleInputChange}
                                    placeholder="experiencia"
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="duracion">Duración</label>
                                <input
                                    type="text"
                                    id="duracion"
                                    name="duracion"
                                    value={inputValues.duracion}
                                    onChange={handleInputChange}
                                    placeholder="3 meses, 6 meses..."
                                />
                            </div>

                            {/* Nuevos inputs */}
                            <div className='containerInputAddJobs'>
                                <label htmlFor="sueldo">Sueldo. (opcional)</label>
                                <input
                                    type="text"
                                    id="sueldo"
                                    name="sueldo"
                                    value={inputValues.sueldo}
                                    onChange={handleInputChange}
                                    placeholder="870.000 $"
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="nivelEducativo">Nivel educativo mínimo</label>
                                <input
                                    type="text"
                                    id="nivelEducativo"
                                    name="nivelEducativo"
                                    value={inputValues.nivelEducativo}
                                    onChange={handleInputChange}
                                    placeholder="nivel Educativo"
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="modalidad">Modalidad</label>
                                <input
                                    type="text"
                                    id="modalidad"
                                    name="modalidad"
                                    value={inputValues.modalidad}
                                    onChange={handleInputChange}
                                    placeholder="Presencial o a Distancia"
                                />
                            </div>

                            <div className='containerInputAddJobs'>
                                <label htmlFor="localidad">Localidad</label>
                                <input
                                    type="text"
                                    id="localidad"
                                    name="localidad"
                                    value={inputValues.localidad}
                                    onChange={handleInputChange}
                                    placeholder="Zona"
                                />
                            </div>

                            <div className="containerInputAddJobs">
                            <Select
    placeholder='Rubros'
    value={inputValues.rubro} // Establece el valor seleccionado del Select
    onChange={(e) => setInputValues({ ...inputValues, rubro: e.target.value })} // Actualiza inputValues con el valor seleccionado
>
    <option value="Agronomía">Agronomía</option>
    <option value="Programación">Programación</option>
    <option value="Construcción">Construcción</option>
    <option value="Administración">Administración</option>
    <option value="Metalúrgica">Metalúrgica</option>
    <option value="Empleado de Comercio">Empleado de Comercio</option>
    <option value="Varios">Varios</option>
</Select>

                            </div>

                            <button type="submit">Aceptar</button>
                        </form>

                    </div>
                </div>
                <div className="containerTemplate">
                    <div className="template">
                        <h3>Template</h3>
                        {showValuesInTemplate && (
                                <article>
                                    <p>Descripción del puesto: {inputValues.descripciondelpuesto}</p>
                                    <p>Jornada Laboral: {inputValues.jornadaLaboral}</p>
                                    <p>Experiencia Requerida: {inputValues.experienciaRequerida}</p>
                                    <p>Duracion: {inputValues.duracion}</p>
                                    {/* Mostrar otros campos */}
                                    <p>Sueldo: {inputValues.sueldo}</p>
                                    <p>Nivel Educativo: {inputValues.nivelEducativo}</p>
                                    <p>Modalidad: {inputValues.modalidad}</p>
                                    <p>Localidad: {inputValues.localidad}</p>
                                    <p>Rubro: {inputValues.rubro}</p>
                                </article>
                        )}
                        <div className="containerButtonsTemplate">
                            <button onClick={handleEditClick}>Editar</button>

                            <Company inputValues={inputValues} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddJobs;

// import React, { useState } from 'react';
// import './_addjobs.scss';

// const AddJobs = () => {
//     const [inputValues, setInputValues] = useState({
//         Empresa: '',
//         Puesto: '',
//         Tiempo: '',
//         Localidad: ''
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputValues({
//             ...inputValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Valores de los inputs:', inputValues);
//     };

//     const handleEditClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return (
//         <>
//             <div className="firstContainerAddJobs">
//                 <div className="containerAddJobs">
//                     <div className="containerFormAddJobs">

//                         <p>Agrega tu oferta laboral aquí.</p>

//                         <form onSubmit={handleSubmit}>

//                             <div className='containerInputAddJobs'>

//                                 <label htmlFor="input1">Empresa</label>
//                                 <input
//                                     type="text"
//                                     id="input1"
//                                     name="input1"
//                                     value={inputValues.input1}
//                                     onChange={handleInputChange}
//                                     placeholder="El nombre de tu empresa..."
//                                 />

//                             </div>

//                             <div className='containerInputAddJobs'>

//                                 <label htmlFor="input2">Puesto</label>
//                                 <input
//                                     type="text"
//                                     id="input2"
//                                     name="input2"
//                                     value={inputValues.input2}
//                                     onChange={handleInputChange}
//                                     placeholder="Mantenimiento y Limpieza..."
//                                 />

//                             </div>

//                             <div className='containerInputAddJobs'>

//                                 <label htmlFor="input3">Tiempo</label>
//                                 <input
//                                     type="text"
//                                     id="input3"
//                                     name="input3"
//                                     value={inputValues.input3}
//                                     onChange={handleInputChange}
//                                     placeholder="Tiempo Completo, Por Hora..."
//                                 />
//                             </div>

//                             <div className='containerInputAddJobs'>
//                                 <label htmlFor="input4">Localidad</label>
//                                 <input
//                                     type="text"
//                                     id="input4"
//                                     name="input4"
//                                     value={inputValues.input4}
//                                     onChange={handleInputChange}
//                                     placeholder="Tu Ubicación..."
//                                 />
//                             </div>

//                             <button type="submit">Aceptar</button>

//                         </form>

//                         <p>Tu oferta laboral se verá así.</p>

//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
//                         </svg>

//                     </div>
//                 </div>

//                 <div className="containerTemplate">
//                     <div className="template">

//                     <h3>Template</h3>

//                     <h2>Titulo</h2>

//                     <article>

//                         <p>Parrafo1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repudiandae!</p>
//                         <p>Parrafo2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repudiandae</p>
//                         <p>Parrafo3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repudiandae</p>

//                     </article>

//                     <div className="containerButtonsTemplate">
//                         <button onClick={handleEditClick}>Editar</button>
//                         <button>Publicar</button>
//                     </div>

//                 </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddJobs;
