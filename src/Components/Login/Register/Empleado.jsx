import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore'
import { db, auth } from '../../../../Firebase/Config'
import { toast } from 'react-toastify'; // Agrega esta línea
import RubroSelect from '../../RubroSelect/RubroSelect'
import Input from '@mui/material/OutlinedInput';
import { Button, InputLabel } from '@mui/material';
import ArticleFirstEmpleado from "./ArticleFirstEmpleado";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import './_empleado.scss'

// Estructura de datos que contiene los rubros y sus sub-rubros
const rubros = {
    Agronomía: ["Ingeniero Agronomo", "Tecnico Agricola", "Operador de Maquinaria Agricola", "Encargado de Estancia", "Peon Rural", "Veterinario", "Control de Plagas", "Fumigador", "Tractorista"],
    "Tecnologia De La Informacion": ["Desarrollador de Software", "Administrador de Sistemas", "Especialista en Seguridad Informatica", "Tecnico en Redes", "Soporte Tecnico", "Analista de Datos", "Desarrollador Web", "Desarrollador de Software"],
    Construcción: ["Albañil", "Electricista", "Plomero", "Carpintero", "Pintor", "Maestro Mayor de Obrasd", "Arquitecto", "Ingeniero Civil", "Obrero de Construccion", "Operador de Maquinaria Pesada"],
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


const Empleado = () => {

    const [estudiosPrimarios, setEstudiosPrimarios] = useState("")
    const [estudiosSecundarios, setEstudiosSecundarios] = useState("")
    const [estudiosTerciarios, setEstudiosTerciarios] = useState("")
    const [estudiosUniversitarios, setEstudiosUniversitarios] = useState("")
    const [experienciasLaborales, setExperienciasLaborales] = useState("")
    const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario
    const [inputValues, setInputValues] = useState({
        rubro: '',
        puesto: '' // Añadimos subRubro al estado
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
            puesto: '' // Reinicia puesto al cambiar el rubro
        });
    };

    const handlePuestoChange = (event) => {
        const { value } = event.target;
        setInputValues({
            ...inputValues,
            puesto: value
        });
    };

    // Referencia al documento en Firestore usando el UID del usuario
    const setUpdateRef = userUID ? doc(db, `users/${userUID}`) : null;

    const editButton = async () => {

        try {
            await updateDoc(setUpdateRef, {
                estudiosPrimarios: estudiosPrimarios,
                estudiosSecundarios: estudiosSecundarios,
                estudiosTerciarios: estudiosTerciarios,
                estudiosUniversitarios: estudiosUniversitarios,
                experienciasLaborales: experienciasLaborales
            })

            // Mostrar notificación Toastify
            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error)
        }
    }

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    return (

        <>
            <section>
                <ArticleFirstEmpleado/>
                <div className="containerFormEmpleado">
                <div className="firstSectionEmpleado">
                <div>
                    <InputLabel htmlFor="name">Estudios Primarios</InputLabel>
                    <Input
                    size="small"
                        type="text"
                        onChange={(e) => setEstudiosPrimarios(e.target.value)}
                        required />
                </div>

                <div>
                    <InputLabel htmlFor="name">Estudios Secundarios</InputLabel>
                    <Input
                                        size="small"
                        type="text"
                        onChange={(e) => setEstudiosSecundarios(e.target.value)}
                        required />
                </div>

                <div>
                    <InputLabel htmlFor="name">Estudios Terciarios</InputLabel>
                    <Input
                                        size="small"
                        type="text"
                        onChange={(e) => setEstudiosTerciarios(e.target.value)} />
                </div>

                <div>
                    <InputLabel htmlFor="name">Estudios Universitarios</InputLabel>
                    <Input
                    size="small"
                        type="text"
                        onChange={(e) => setEstudiosUniversitarios(e.target.value)}
                        required />
                </div>

                </div>

                <div className="secondSectionEmleado">
                <div>
                    <InputLabel htmlFor="name">Experiencias Laborales</InputLabel>
                    <Textarea aria-label="minimum height" onChange={(e) => setExperienciasLaborales(e.target.value)}
                        placeholder="Ingresa tus experiencias laborales aquí teniendo en cuenta el año, dónde y las tareas realizadas..."
                        rows="4"
                        cols="50" />

                </div>


                <div>
                    <RubroSelect
                        rubros={rubros}
                        rubro={inputValues.rubro}
                        subRubro={inputValues.subRubro}
                        handleRubroChange={handleRubroChange}
                        handleSubRubroChange={handlePuestoChange}
                    />
                </div>

                <Button onClick={editButton}>Aceptar</Button>
                </div>
                </div>
            </section>
</>
    )
}

export default Empleado
