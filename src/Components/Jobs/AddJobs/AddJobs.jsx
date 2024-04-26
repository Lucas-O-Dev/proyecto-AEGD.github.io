import React, { useState } from 'react';
import './_addjobs.scss';
import Company from '../Company';

const AddJobs = () => {
    const [inputValues, setInputValues] = useState({
        Empresa: '',
        Puesto: '',
        Tiempo: '',
        Localidad: '',
        Requerimientos: '',
        Duración: ''
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
                        <form onSubmit={handleSubmit}>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Empresa">Empresa</label>
                                <input
                                    type="text"
                                    id="Empresa"
                                    name="Empresa"
                                    value={inputValues.Empresa}
                                    onChange={handleInputChange}
                                    placeholder="El nombre de tu empresa..."
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Puesto">Puesto</label>
                                <input
                                    type="text"
                                    id="Puesto"
                                    name="Puesto"
                                    value={inputValues.Puesto}
                                    onChange={handleInputChange}
                                    placeholder="Mantenimiento y Limpieza..."
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Tiempo">Tiempo</label>
                                <input
                                    type="text"
                                    id="Tiempo"
                                    name="Tiempo"
                                    value={inputValues.Tiempo}
                                    onChange={handleInputChange}
                                    placeholder="Tiempo Completo, Por Hora..."
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Localidad">Localidad</label>
                                <input
                                    type="text"
                                    id="Localidad"
                                    name="Localidad"
                                    value={inputValues.Localidad}
                                    onChange={handleInputChange}
                                    placeholder="Tu Ubicación..."
                                />
                            </div>

                            {/* Nuevos inputs */}
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Requerimientos">Requerimientos</label>
                                <input
                                    type="text"
                                    id="Requerimientos"
                                    name="Requerimientos"
                                    value={inputValues.Requerimientos}
                                    onChange={handleInputChange}
                                    placeholder="Habilidades"
                                />
                            </div>
                            <div className='containerInputAddJobs'>
                                <label htmlFor="Duración">Duración</label>
                                <input
                                    type="text"
                                    id="Duración"
                                    name="Duración"
                                    value={inputValues.Duración}
                                    onChange={handleInputChange}
                                    placeholder="3 Meses, 6 Meses, 1 Año o Más..."
                                />
                            </div>

                            <button type="submit">Aceptar</button>
                        </form>
                        <p>Template</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                </div>
                <div className="containerTemplate">
                    <div className="template">
                        <h3>Template</h3>
                        {showValuesInTemplate && (
                                <article>
                                    <h2>{inputValues.Empresa}</h2>
                                    <p>{inputValues.Puesto}</p>
                                    <p>{inputValues.Localidad}</p>
                                    <p>{inputValues.Tiempo}</p>
                                    {/* Mostrar otros campos */}
                                    <p>{inputValues.Requerimientos}</p>
                                    <p>{inputValues.Duración}</p>
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
