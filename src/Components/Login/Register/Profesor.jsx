import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { Button, InputLabel,Typography } from '@mui/material';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';


const nivelesEducativos = {
    secundariocompleto: 'Secundario Completo',
    secundarioincompleto: 'Secundario Incompleto',
    terciariocompleto: 'Terciario Completo',
    terciarioincompleto: 'Terciario Incompleto',
    universidadcompleta: 'Universidad Completa',
    universidadincompleta: 'Universidad Incompleta'
};

const Profesor = () => {
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

        const Item = styled(Sheet)(({ theme }) => ({
          ...theme.typography.body,
          textAlign: 'center',
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.text.secondary,
          border: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius:'0.5rem',
          padding: theme.spacing(2),
          marginTop: theme.spacing(4),
        }));

    // Función para renderizar un campo de selección
const renderSelectField = (label, value, onChange, options) => (
        <FormControl fullWidth sx={{marginTop:'1rem'}}>
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
<Box>
<Item>
        <Typography variant="body1">
          Perfecto, eres empleado.
        </Typography>
      </Item>
      <Item>
        <Typography variant="body1">
          A continuación te pediremos los datos de tu curriculum.
        </Typography>
      </Item>
</Box>

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
sx={{margin: '1', padding:'0'}}
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

</Box>
);
};

export default Profesor;
