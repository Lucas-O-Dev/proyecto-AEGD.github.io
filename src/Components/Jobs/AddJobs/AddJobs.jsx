import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Input } from '@mui/material';
import './_addjobs.scss';
import Company from '../Company';
import ObtenerFechaActual from './ObtenerFechaActual';
import RubroSelect from '../../RubroSelect/RubroSelect';

// Datos de rubros y descripciones
const rubros = {
    Agronomía: ["Ingeniero Agronomo", "Tecnico Agricola", "Operador de Maquinaria Agricola", "Encargado de Estancia", "Peon Rural", "Veterinario", "Control de Plagas", "Fumigador", "Tractorista"],
    "Tecnologia De La Informacion": ["Desarrollador de Software", "Administrador de Sistemas", "Especialista en Seguridad Informatica", "Tecnico en Redes", "Soporte Tecnico", "Analista de Datos", "Desarrollador Web", "Desarrollador de Software"],
    Construcción: ["Albañil", "Electricista", "Plomero", "Carpintero", "Pintor", "Maestro Mayor de Obras", "Arquitecto", "Ingeniero Civil", "Obrero de Construccion", "Operador de Maquinaria Pesada"],
    Administración: ["Secretario/a", "Asistente Administrativo", "Contador/a", "Analista de Recursos Humanos", "Recepcionista", "Analista de Datos", "Administrador de Oficina", "Administrador de Empresas", "Asesor Financiero"],
    Metalúrgica: ["Soldador", "Tornero", "Operador CNC", "Mecanico Industrial", "Inspector de Calidad", "Ingeniero Metalurgico", "Montaje", "Supervisor"],
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

const descriptions = {
    "Ingeniero Agronomo": "Profesional que se dedica al estudio y gestión de cultivos y suelos, optimizando la producción agrícola.",
    "Técnico Agrícola": "Asistente técnico que apoya en la implementación de prácticas agrícolas y manejo de maquinaria."
};

const nivelesEducativos = {
    secundariocompleto: 'Secundario Completo',
    secundarioincompleto: 'Secundario Incompleto',
    terciariocompleto: 'Terciario Completo',
    terciarioincompleto: 'Terciario Incompleto',
    universidadcompleta: 'Universidad Completa',
    universidadincompleta: 'Universidad Incompleta'
};

const AddJobs = () => {
    // Estado para almacenar los valores de los inputs
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
        puesto: ''
    });

    // Estado para mostrar u ocultar el template
    const [showValuesInTemplate, setShowValuesInTemplate] = useState(false);

    // Maneja el cambio de los inputs de texto
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    // Maneja el cambio del Select de rubro
    const handleRubroChange = (event) => {
        const { value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            rubro: value,
            puesto: ''
        }));
    };

    const handlePuestoChange = (event) => {
        const { value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            puesto: value
        }));
    };

    const handleNivelEducativoChange = (event) => {
        const { value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            nivelEducativo: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Valores de los inputs:', inputValues);
        setShowValuesInTemplate(true);
    };

    // Maneja el clic en el botón de editar
    const handleEditClick = () => {
        setShowValuesInTemplate(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Renderiza los elementos del menú de selección
    const renderMenuItems = (items) => {
        return items.map((item) => (
            <MenuItem key={item} value={item}>
                {item}
            </MenuItem>
        ));
    };

    return (
        <div className="firstContainerAddJobs">
            <div className="containerAddJobs">
                <div className="containerFormAddJobs">

                    <div className='conteinerArticleObtenerFechaActual'>                    
                    <p>Agrega tu oferta laboral aquí.</p>
                    <ObtenerFechaActual />
                    </div>

                    <form onSubmit={handleSubmit}>
                            <div className='conteinerRenderInputField'>
                        {renderInputField("Descripción del puesto", "descripciondelpuesto", inputValues.descripciondelpuesto, handleInputChange, "Descripción")}
                        {renderInputField("Jornada Laboral", "jornadaLaboral", inputValues.jornadaLaboral, handleInputChange, "medio-tiempo..")}
                        {renderInputField("Experiencia Requerida", "experienciaRequerida", inputValues.experienciaRequerida, handleInputChange, "Experiencia")}
                        {renderInputField("Duración", "duracion", inputValues.duracion, handleInputChange, "3 meses, 6 meses...")}
                        {renderInputField("Sueldo (opcional)", "sueldo", inputValues.sueldo, handleInputChange, "870.000 $")}
                        {renderInputField("Modalidad", "modalidad", inputValues.modalidad, handleInputChange, "Presencial/Distancia")}
                        {renderInputField("Localidad", "localidad", inputValues.localidad, handleInputChange, "Zona")}
                            </div>
                        <div className="conteinerRubroSelectAddJobs">
                        {renderSelectField("Nivel Educativo Requerido", inputValues.nivelEducativo, handleNivelEducativoChange, nivelesEducativos)}
                            <RubroSelect
                                rubros={rubros}
                                rubro={inputValues.rubro}
                                subRubro={inputValues.puesto}
                                handleRubroChange={handleRubroChange}
                                handleSubRubroChange={handlePuestoChange}
                                descriptions={descriptions}
                            />
                                                    <Button type="submit">Aceptar</Button>
                        </div>
                    </form>
                </div>
            </div>
            {showValuesInTemplate && renderTemplate(inputValues, handleEditClick)}
        </div>
    );
};

// Función para renderizar un campo de entrada
const renderInputField = (label, id, value, onChange, placeholder) => (
    <div className='containerInputAddJobs'>
        <label htmlFor={id}>{label}</label>
        <Input
                    type="text"
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
        />
    </div>
);

// Función para renderizar un campo de selección
const renderSelectField = (label, value, onChange, options) => (
    <div className='containerInputAddJobs'>
        <FormControl fullWidth>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-label`}
                value={value}
                onChange={onChange}
                input={<OutlinedInput label={label} />}
            >
                {Object.keys(options).map((option) => (
                    <MenuItem key={option} value={option}>
                        {options[option]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </div>
);

// Función para renderizar el template
const renderTemplate = (inputValues, handleEditClick) => (
    <div className="containerTemplate">
        <div className="template">
            <h3>Template</h3>
            <p>Así se va a ver tu oferta laboral...</p>
            <article>
                <p>Descripción del puesto: {inputValues.descripciondelpuesto}</p>
                <p>Jornada Laboral: {inputValues.jornadaLaboral}</p>
                <p>Experiencia Requerida: {inputValues.experienciaRequerida}</p>
                <p>Duración: {inputValues.duracion}</p>
                <p>Sueldo: {inputValues.sueldo}</p>
                <p>Nivel Educativo: {inputValues.nivelEducativo}</p>
                <p>Modalidad: {inputValues.modalidad}</p>
                <p>Localidad: {inputValues.localidad}</p>
                <p>Rubro: {inputValues.rubro}</p>
                <p>Puesto: {inputValues.puesto}</p>
            </article>
            <div className="containerButtonsTemplate">
                <Button onClick={handleEditClick}>Editar</Button>
                <Company inputValues={inputValues} />
            </div>
        </div>
    </div>
);

export default AddJobs;
