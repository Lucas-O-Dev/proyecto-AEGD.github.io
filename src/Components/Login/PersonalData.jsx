import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '@mui/material/OutlinedInput';
import { Button, InputLabel, FormControlLabel, Checkbox, FormControl, FormLabel } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import 'react-toastify/dist/ReactToastify.css';
import './StylesLogin/_personaldata.scss'
import PhoneSignin from './PhoneSignin'
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';

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

    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography['body-sm'],
        textAlign: 'center',
        fontWeight: theme.fontWeight.md,
        color: theme.vars.palette.text.secondary,
        border: '1px solid',
        borderColor: theme.palette.divider,
        padding: theme.spacing(1),
        borderRadius: theme.radius.md,
    }));


    const navigate = useNavigate();
    const userUID = useAuth();

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        localidad: "",
        cp: "",
        numeroTelefonico: "",
        roles: []
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
            roles: prevData.roles === role ? "" : role
        }));
    };

    const setButton = async () => {
        if (!userUID) {
            toast.error('Usuario no autenticado');
            return;
        }

        const { nombre, apellido, direccion, localidad, cp, numeroTelefonico, roles } = formData;

        try {
            await setDoc(doc(db, `users/${userUID}`), {
                nombre,
                apellido,
                direccion,
                localidad,
                cp,
                numeroTelefonico,
                roles
            });

            const redirectTo = roles.includes('Empleado') ? '/empleado' : roles.includes('Empleador') ? '/empleador' : '/Home';

            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate(redirectTo)
            });
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            toast.error('Error al enviar el formulario');
        }
    };

    return (
        <div className="containerPrincipalPersonalData">

            <article className="firstArticlePersonalData">
<Item sx={{marginTop: '12px'}}>Datos personales</Item>                
<Item sx={{marginTop: '12px', marginBottom: '12px'}}>A continuación te pediremos tus datos personales</Item>
            </article>

            <div className="containerSectionsPersonalData">

                <section className="firstSectionPersonalData">
                    <div>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend" >¿Cúal es tu rol?</FormLabel>
                            {["Empleado", "Empleador"].map(role => (
                                <FormControlLabel
                                    key={role}
                                    control={
                                        <Checkbox
                                            value={role}
                                            checked={formData.roles === role}
                                            onChange={handleRoleChange}
                                            inputProps={{ 'aria-label': role }}
                                        />
                                    }
                                    label={role.charAt(0).toUpperCase() + role.slice(1)}
                                />
                            ))}
                        </FormControl>
                    </div>

                    <InputLabel>Nombre</InputLabel>
                    <Input
                        size="small"

                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required />

                    <InputLabel>Apellido</InputLabel>
                    <Input
                        size="small"

                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        required />

                </section>

                <section className="secondSectionPersonalData">
                    <InputLabel>Dirección</InputLabel>
                    <Input
                        type="text"
                        size="small"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        required />

                    <InputLabel>Localidad</InputLabel>
                    <Input
                        size="small"
                        type="text"
                        name="localidad"
                        value={formData.localidad}
                        onChange={handleInputChange}
                        required />

                    <InputLabel>Código Postal</InputLabel>
                    <Input
                        size="small"
                        type="text"
                        name="cp"
                        value={formData.cp}
                        onChange={handleInputChange}
                        required />
                </section>
            </div>

            <section className="containerPhoneSigninPersonalData">
                <p>Por favor verifica tu número de celular.</p>
                <PhoneSignin />
            </section>

            <Button onClick={setButton}>Guardar</Button>
        </div>
    );
};

export default PersonalData;
