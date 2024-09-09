import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem';
import ThirdSectionEmpleado from "./ThirdSectionEmpleado";
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify';
import RubroSelect from '../../RubroSelect/RubroSelect';
import TextField from '@mui/material/TextField';
import { Button, InputLabel } from '@mui/material';
import ArticleFirstEmpleado from "./ArticleFirstEmpleado";

const rubros = {
    // Estructura de datos que contiene los rubros y sus sub-rubros
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

const nivelesEducativos = {
    secundariocompleto: 'Secundario Completo',
    secundarioincompleto: 'Secundario Incompleto',
    terciariocompleto: 'Terciario Completo',
    terciarioincompleto: 'Terciario Incompleto',
    universidadcompleta: 'Universidad Completa',
    universidadincompleta: 'Universidad Incompleta'
};

const Empleado = () => {
    const [formData, setFormData] = useState({
        experienciasLaborales: "",  // Añadido: valor inicial vacío
        nivelEducativo: "",         // Añadido: valor inicial vacío
        tituloAcademico: "",         // Añadido: valor inicial vacío
        rubro: "",                  // Añadido: valor inicial vacío
        puesto: ""                  // Añadido: valor inicial vacío
    });
    const [userUID, setUserUID] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserUID(user.uid);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRubroChange = (event) => {
        const { value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            rubro: value,
            puesto: ""
        }));
    };

    const handlePuestoChange = (event) => {
        const { value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            puesto: value
        }));
    };

    const handleNivelEducativoChange = (event) => {
        const { value } = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            nivelEducativo: value
        }));
    };

        // Renderiza los elementos del menú de selección
        const renderMenuItems = (items) => {
            return items.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ));
        };

    // Función para renderizar un campo de selección
const renderSelectField = (label, value, onChange, options) => (
        <FormControl fullWidth sx={{margin:'0.1rem 0'}}>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-label`}
                value={value}
                onChange={onChange}
                input={<OutlinedInput label={label}
                />}
            >
                {Object.keys(options).map((option) => (
                    <MenuItem key={option} value={option}>
                        {options[option]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
);

const editButton = async () => {
    if (!userUID) return;
    try {
      await updateDoc(doc(db, `users/${userUID}`), formData);
      toast.success('¡Formulario enviado con éxito!', {
        onClose: () => {
          navigate('/Home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    } catch (error) {
      console.error("Error updating document: ", error);
      toast.error('Error al enviar el formulario. Por favor, intenta nuevamente.');
    }
  };

  return (
<Box
  sx={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Alinea elementos en el eje vertical (ya que flexDirection es column)
    alignItems: 'center',     // Alinea elementos en el eje horizontal
    flexDirection: 'column',
  }}
>
<ArticleFirstEmpleado />
<Box
      className="containerFormEmpleado"
      sx={{
        marginTop:'1rem',
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        
        {[
          { label: "Título Académico", name: "tituloAcademico" },
          { label: "Experiencias Laborales", name: "experienciasLaborales" }
        ].map(({ label, name }) => (
          <TextField
sx={{margin: '0.2rem 0', padding:'0'}}
          key={name}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            label={label}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        ))}
        {renderSelectField("Nivel Educativo", formData.nivelEducativo, handleNivelEducativoChange, nivelesEducativos)}
        <RubroSelect
          rubros={rubros}
          rubro={formData.rubro}
          subRubro={formData.puesto}
          handleRubroChange={handleRubroChange}
          handleSubRubroChange={handlePuestoChange}
        />
      </Box>
    </Box>

        <Box className="secondSectionEmleado" sx={{p: 2,display: 'flex', justifyContent: 'center' }}>
            <Button
                onClick={editButton}
                variant="contained"
                color="primary"
            >
                Aceptar
            </Button>
        </Box>
        <ThirdSectionEmpleado />
</Box>
);
};

export default Empleado;
