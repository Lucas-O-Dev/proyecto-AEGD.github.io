import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '@mui/material/OutlinedInput';
import { Button, InputLabel, FormControlLabel, Checkbox, FormControl, FormLabel } from '@mui/material';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import 'react-toastify/dist/ReactToastify.css';
import './StylesLogin/_personaldata.scss';
// import PhoneSignin from './PhoneSignin';
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
        background: 'rgba(255, 255, 255, 0.5)', // Fondo blanco con 50% de transparencia
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
        roles: [],
        email: ""  // Nuevo campo para el correo electrónico del usuario
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
        setFormData(prevData => {
            const newRoles = prevData.roles.includes(role)
                ? prevData.roles.filter(r => r !== role)
                : [...prevData.roles, role];
            return { ...prevData, roles: newRoles };
        });
    };

    const setButton = async () => {
        if (!userUID) {
            toast.error('Usuario no autenticado');
            return;
        }

        const { nombre, apellido, direccion, localidad, cp, numeroTelefonico, roles } = formData;

        // Obtener el correo electrónico del usuario actualmente autenticado
        const userEmail = auth.currentUser.email;

        // Actualizar formData para incluir el correo electrónico
        const updatedFormData = {
            nombre,
            apellido,
            direccion,
            localidad,
            cp,
            numeroTelefonico,
            roles,
            email: userEmail  // Agregar el correo electrónico al formData
        };

        try {
            await setDoc(doc(db, `users/${userUID}`), updatedFormData);

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
                <Item sx={{ marginTop: '12px' }}>Datos personales</Item>
                <Item sx={{ marginTop: '12px', marginBottom: '12px' }}>A continuación te pediremos tus datos personales</Item>
                <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormLabel component="legend" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>¿Cuál es tu rol?</FormLabel>
                    {["Empleado", "Empleador"].map(role => (
                        <FormControlLabel
                            key={role}
                            control={
                                <Checkbox
                                    value={role}
                                    checked={formData.roles.includes(role)}
                                    onChange={handleRoleChange}
                                    inputProps={{ 'aria-label': role }}
                                />
                            }
                            label={role.charAt(0).toUpperCase() + role.slice(1)}
                        />
                    ))}
                </FormControl>
            </article>

            <div className="containerSectionsPersonalData">
                <section className="firstSectionPersonalData">
                    <InputLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nombre</InputLabel>
                    <Input
                        sx={{ height: '1.8rem' }}
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Apellido</InputLabel>
                    <Input
                        sx={{ height: '1.8rem' }}
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Dirección</InputLabel>
                    <Input
                        sx={{ height: '1.8rem' }}
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Localidad</InputLabel>
                    <Input
                        sx={{ height: '1.8rem' }}
                        type="text"
                        name="localidad"
                        value={formData.localidad}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Código Postal</InputLabel>
                    <Input
                        sx={{ height: '1.8rem' }}
                        type="text"
                        name="cp"
                        value={formData.cp}
                        onChange={handleInputChange}
                        required
                    />
                </section>

                <section className="secondSectionPersonalData">
                <Item>
                    Buscar nuevas oportunidades profesionales
                        es un proceso que, aunque desafiante,
                        puede conducir a grandes logros.
                        Es fundamental destacar la ética de trabajo,
                        la capacidad para resolver problemas y la dedicación en cada aplicación
                        y entrevista. Un currículum bien elaborado es una herramienta poderosa
                        que puede demostrar no solo las habilidades, sino también la actitud profesional.
                        Cada paso en esta búsqueda es una oportunidad para mostrar el mejor perfil a los
                        posibles empleadores. Con la preparación adecuada y una actitud positiva,
                        el éxito está al alcance.
                    </Item>
                </section>
            </div>

            <section className="containerPhoneSigninPersonalData">
                <p>Por favor verifica tu número de celular.</p>
                {/* <PhoneSignin /> */}
            </section>

            <Button onClick={setButton} sx={{ marginTop: '12px', marginBottom: '8px' }}>Guardar</Button>
        </div>
    );
};

export default PersonalData;
