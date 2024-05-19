import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import './_addjobs.scss';
import Company from '../Company';
import ObtenerFechaActual from './ObtenerFechaActual';

// Estructura de datos que contiene los rubros y sus sub-rubros
const rubros = {
    Agronomía: ["Tractorista", "Tambero"],
    Programación: ["Frontend", "Backend", "Fullstack"],
    Construcción: ["Albañil", "Arquitecto"],
    Administración: ["Contador", "Secretaria"],
    Metalúrgica: ["Soldador", "Operario"],
    "Empleado de Comercio": ["Cajero", "Reponedor"],
    Varios: ["Subrubro 1", "Subrubro 2"]
};

const nivelesEducativos = {
    secundariocompleto: null,
    secundarioincompleto:null,
    terciariocompleto:null,
    terciarioincompleto:null,
    universidadcompleta:null,
    universidadincompleta:null
}

const AddJobs = () => {
    // Estado para almacenar los valores de los inputs

    //inputvalues es un objeto con varias propiedades... descripciondelpuesto,jornadaLaboral, etc.
    const [inputValues, setInputValues] = useState({
        descripciondelpuesto: '',
        jornadaLaboral: '',
        experienciaRequerida: '',
        duracion: '',
        sueldo: '',
        nivelEducativo: '',
        modalidad: '',
        localidad: '',
        rubro: '',
        subRubro: '' // Añadimos subRubro al estado
    });

    // Estado para mostrar u ocultar el template
    const [showValuesInTemplate, setShowValuesInTemplate] = useState(false);

    // Maneja el cambio de los inputs de texto
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Extrae el nombre y valor del input
        setInputValues({
            ...inputValues, // Mantiene los valores anteriores
            [name]: value // Actualiza el valor del input específico
        });
    };

    // Maneja el cambio del Select de rubro
    const handleRubroChange = (event) => {
        const { value } = event.target; // Extrae el valor seleccionado
        setInputValues({
            ...inputValues, // Mantiene los valores anteriores
            rubro: value, // Actualiza el rubro seleccionado
            subRubro: '' // Reinicia subRubro al cambiar el rubro
        });
    };

    const handleNivelEducativoChange = (event) => {
        const  {value} = event.target
        setInputValues({
            ...inputValues,
            nivelEducativo: value
        })
    }

    // Maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        console.log('Valores de los inputs:', inputValues); // Muestra los valores en la consola
        setShowValuesInTemplate(true); // Muestra el template con los valores
    };

    // Maneja el clic en el botón de editar
    const handleEditClick = () => {
        setShowValuesInTemplate(false); // Oculta el template
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página hacia arriba
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
                                {/* <label htmlFor="nivelEducativo">Nivel educativo mínimo</label>
                                <input
                                    type="text"
                                    id="nivelEducativo"
                                    name="nivelEducativo"
                                    value={inputValues.nivelEducativo}
                                    onChange={handleInputChange}
                                    placeholder="nivel Educativo"
                                /> */}
                                <Select
                                placeholder='Nivel Educativo Requerido'
                                value={inputValues.nivelEducativo}
                                onChange={handleNivelEducativoChange}>
                                    {Object.keys(nivelesEducativos).map((nivelEducativo) => (
                                        <option key={nivelEducativo} value={nivelEducativo}>
                                            {nivelEducativo}
                                        </option>
                                    ))}
                                </Select>
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

                            {/* Select para rubro */}
                            <div className="containerInputAddJobs">
                                <label htmlFor="rubro">Rubro</label>
                                <Select
                                    placeholder='Selecciona un rubro'
                                    value={inputValues.rubro}
                                    onChange={handleRubroChange} // Maneja el cambio del rubro
                                >
                                    {Object.keys(rubros).map((rubro) => (
                                        <option key={rubro} value={rubro}>
                                            {rubro}
                                        </option>
                                    ))}
                                </Select>
                            </div>

                            {/* Select para sub-rubro, se muestra solo si se selecciona un rubro */}
                            {inputValues.rubro && (
                                <div className="containerInputAddJobs">
                                    <label htmlFor="subRubro">Sub-Rubro</label>
                                    <Select
                                        placeholder='Selecciona un sub-rubro'
                                        value={inputValues.subRubro}
                                        onChange={(e) => setInputValues({ ...inputValues, subRubro: e.target.value })} // Maneja el cambio del sub-rubro
                                    >
                                        {rubros[inputValues.rubro].map((subRubro) => (
                                            <option key={subRubro} value={subRubro}>
                                                {subRubro}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                            )}

                            <button type="submit">Aceptar</button>
                        </form>
                    </div>
                </div>
                <div className="containerTemplate">
                    <div className="template">
                        <h3>Template</h3>
                        {/* Condición showValuesInTemplate:
La expresión {showValuesInTemplate && ( ... )} es una forma común en React de renderizar condicionalmente contenido. Aquí, showValuesInTemplate es una variable (probablemente un estado o una prop) que evalúa a true o false.
Si showValuesInTemplate es true, entonces el contenido dentro de los paréntesis será renderizado. Si es false, nada será renderizado. */}
                        {showValuesInTemplate && (
                            // Elemento <article>:

// Si showValuesInTemplate es true, se renderiza un elemento HTML <article>. Este elemento es un contenedor semántico que suele usarse para encapsular contenido relacionado de manera independiente.

// Dentro del <article> hay varios elementos <p>. Cada uno de estos elementos muestra una etiqueta o descripción seguida del valor correspondiente de inputValues.
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
                                <p>Sub-Rubro: {inputValues.subRubro}</p>
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
