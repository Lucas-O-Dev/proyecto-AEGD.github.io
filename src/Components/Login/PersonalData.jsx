import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, InputLabel, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, OutlinedInput, Box, Grid } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';

// Custom hook to handle authentication state
const useAuth = () => {
    const [userUID, setUserUID] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserUID(user.uid);
            }
        });
        return () => unsubscribe();
    }, []);

    return userUID;
};

const PersonalData = () => {
    const navigate = useNavigate();
    const userUID = useAuth();

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        localidad: "",
        cp: "",
        rol: "",
        email: ""
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }, []);

    const handleRoleChange = (e) => {
        const role = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            rol: role
        }));
    };

    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body1,
        textAlign: 'center',
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
    }));

    const setButton = async () => {
        if (!userUID) {
            toast.error('Usuario no autenticado');
            return;
        }

        const { nombre, apellido, direccion, localidad, cp, rol } = formData;
        const userEmail = auth.currentUser.email;

        const updatedFormData = {
            nombre,
            apellido,
            direccion,
            localidad,
            cp,
            rol,
            email: userEmail
        };

        try {
            await setDoc(doc(db, `users/${userUID}`), updatedFormData);

            const redirectTo =
                rol === 'Empleado' ? '/empleado' :
                    rol === 'Empleador' ? '/empleador' :
                        rol === 'Profesor' ? '/profesor' :
                            '/Home';


            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate(redirectTo)
            });
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            toast.error('Error al enviar el formulario');
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Item>A continuación te pediremos tus datos personales.</Item>
            <FormControl
                component="fieldset"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centra horizontalmente
                    marginBottom: 2
                }}
            >
                <FormLabel
                    component="legend"
                    sx={{
                        textAlign: 'center', // Centra el texto dentro del FormLabel
                        marginBottom: 1, // Espacio entre el label y los radio buttons
                    }}
                >
                    ¿Cuál es tu rol?
                </FormLabel>
                <RadioGroup
                    row // Hace que los radio buttons se alineen horizontalmente
                    aria-label="role"
                    name="rol"
                    value={formData.rol}
                    onChange={handleRoleChange}
                    sx={{
                        justifyContent: 'center', // Centra los radio buttons horizontalmente
                    }}
                >
                    {["Empleado", "Empleador", "Profesor"].map(role => (
                        <FormControlLabel
                            key={role}
                            value={role}
                            control={<Radio />}
                            label={role.charAt(0).toUpperCase() + role.slice(1)}
                        />
                    ))}
                </RadioGroup>
            </FormControl>



            <Grid container spacing={0.2} justifyContent="center" alignItems="center">
  {["nombre", "apellido", "direccion", "localidad", "cp"].map(field => (
    <Grid 
    key={field} 
    container 
    sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      width: '100%'
    }}
  >
    <InputLabel 
      sx={{ 
        textAlign: 'center', 
        width: '100%' 
      }}
    >
      {field.charAt(0).toUpperCase() + field.slice(1)}
    </InputLabel>
    <OutlinedInput
      sx={{ 
        width: { xs: '100%', sm: '80%', md: '60%' },  // Ancho responsive
        height: '2rem',
        textAlign: 'center'
      }}
      type="text"
      name={field}
      value={formData[field]}
      onChange={handleInputChange}
      required
    />
  </Grid>
  
  ))}
</Grid>


            <Button
                onClick={setButton}
                sx={{ marginTop: 2, width: '40%', display: 'flex' }}
                variant="contained"
                color="primary"
            >
                Aceptar
            </Button>
            <Item>
                Buscar nuevas oportunidades profesionales es un proceso que, aunque desafiante,
                puede conducir a grandes logros. Es fundamental destacar la ética de trabajo,
                la capacidad para resolver problemas y la dedicación en cada aplicación y entrevista.
            </Item>
        </Box>
    );
};

export default PersonalData;
