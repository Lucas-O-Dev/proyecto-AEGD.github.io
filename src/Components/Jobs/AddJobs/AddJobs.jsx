import React, { useState } from 'react';
import Select from '@mui/material/Select';
import './_addjobs.scss';
import Company from '../Company';
import ObtenerFechaActual from './ObtenerFechaActual';
import RubroSelect from '../../RubroSelect/RubroSelect';
import { MenuItem } from '@mui/material';

// Estructura de datos que contiene los rubros y sus sub-rubros
const rubros = {
    Agronomía: ["Ingeniero Agronomo", "Tecnico Agricola", "Operador de Maquinaria Agricola", "Encargado de Estancia", "Peon Rural", "Veterinario", "Control de Plagas", "Fumigador", "Tractorista"],
    "Tecnologia De La Informacion": ["Desarrollador de Software", "Administrador de Sistemas", "Especialista en Seguridad Informatica", "Tecnico en Redes", "Soporte Tecnico", "Analista de Datos", "Desarrollador Web", "Desarrollador de Software"],
    Construcción: ["Albañil", "Electricista", "Plomero", "Carpintero", "Pintor", "Maestro Mayor de Obras", "Arquitecto", "Ingeniero Civil", "Obrero de Construccion", "Operador de Maquinaria Pesada"],
    Administración: ["Secretario/a", "Asistente Administrativo" ,"Contador/a", "Analista de Recursos Humanos", "Recepcionista", "Analista de Datos", "Administrador de Oficina", "Administrador de Empresas", "Asesor Financiero"],
    Metalúrgica: ["Soldador", "Tornero","Operador CNC", "Mecanico Industrial", "Inspector de Calidad", "Ingeniero Metalurgico", "Montaje", "Supervisor"],
    "Empleado de Comercio": ["Cajero/a", "Vendedor/a", "Repositor/a", "Encargado de Tienda", "Personal de Atencion Al Cliente", "Jefe de Ventas", "Personal de Logistica y Almacen"],
    "Servicio Domestico": ["Empleada Domestica", "Niñera", "Cuidador de Personas Mayores", "Jardinero", "Chofer Particular", "Cocinero/a", "Mantenimiento del Hogar"],
    Salud: ["Medico/a", "Enfermero/a", "Asistente Medico", "Tecnico de Laboratorio", "Fisioterapeuta", "Psicologo/a", "Nutricionista"],
    Educación: ["Maestro/a", "Profesor/a", "Director/a de Escuela", "Tutor", "Asistente de Educacion Especial", "Psicopedagogo", "Bibliotecario"],
    "Transporte y Logistica": ["Chofer de Camion", "Conductor de Transporte Publico", "Operador de Montacargas", "Coordinador de Logistica", "Despachante de Aduana", "Encargado de Almacen"],
    "Turismo y Hospitalidad": ["Guía Turístico", "Recepcionista de Hotel", "Cocinero/a", "Camarero/a", "Gerente de Hotel", "Coordinador de Eventos", "Personal de Mantenimiento de Hoteles"],
    "Industria Alimentaria": ["Operario de Planta", "Ingeniero en Alimentos", "Técnico en Control de Calidad", "Encargado de Producción", "Desarrollador de Productos", "Personal de Logística"],
    Textil: ["Diseñador de Moda", "Costurero/a", "Operario de Máquina de Coser", "Encargado de Producción", "Técnico en Confección", "Control de Calidad"],
    "Energía y Minería": ["Ingeniero de Energía", "Técnico en Energías Renovables", "Minero", "Geólogo", "Técnico en Exploración", "Operador de Equipos Pesados"],
    Automotriz: ["Mecánico de Autos", "Mecánico de Motos", "Electromecánico de Vehículos", "Chapista", "Pintor de Autos", "Técnico en Diagnóstico Automotriz", "Asesor de Servicio Automotriz", "Gerente de Taller Automotriz", "Vendedor de Repuestos Automotrices"]
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
        puesto: '' // Añadimos subRubro al estado
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
            puesto: '' // Reinicia subRubro al cambiar el rubro
        });
    };

    const handlePuestoChange = (event) => {
        const { value } = event.target;
        setInputValues({
            ...inputValues,
            puesto: value
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
                                        <MenuItem key={nivelEducativo} value={nivelEducativo}>
                                        {nivelEducativo}
                                        </MenuItem>
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

                            <div className='conteinerRubroSelectAddJobs'>
                            <RubroSelect
                                rubros={rubros}
                                rubro={inputValues.rubro}
                                subRubro={inputValues.subRubro}
                                handleRubroChange={handleRubroChange}
                                handleSubRubroChange={handlePuestoChange}
                            />
                            </div>

                            <button type="submit">Aceptar</button>
                        </form>
                    </div>
                </div>
                {/* */}<div className="containerTemplate">
                    <div className="template">
                        <h3>Template</h3>
                        <p>Así se va a ver tu oferta laboral...</p>
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
                                <p>Puesto: {inputValues.puesto}</p>
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
