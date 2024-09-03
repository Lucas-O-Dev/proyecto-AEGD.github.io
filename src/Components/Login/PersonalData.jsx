import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, InputLabel, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import Input from '@mui/material/OutlinedInput';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import 'react-toastify/dist/ReactToastify.css';
import './StylesLogin/_personaldata.scss';
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

    const navigate = useNavigate();
    const userUID = useAuth();

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        localidad: "",
        cp: "",
        rol: "",  // Cambia roles a rol ya que ahora solo es uno
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
        setFormData(prevData => ({
            ...prevData,
            rol: role // Solo un rol puede ser seleccionado
        }));
    };

    const Item = styled('div')(({ theme }) => ({
        ...theme.typography.body,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.secondary,
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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
            email: userEmail  // Agregar el correo electrónico al formData
        };

        try {
            await setDoc(doc(db, `users/${userUID}`), updatedFormData);

            const redirectTo = rol === 'Empleado' ? '/empleado' : rol === 'Empleador' ? '/empleador' : '/Home';

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
                <Item>A continuación te pediremos tus datos personales</Item>
                <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>
                    <FormLabel component="legend" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>¿Cuál es tu rol?</FormLabel>
                    <RadioGroup
                        row
                        aria-label="role"
                        name="rol"
                        value={formData.rol}
                        onChange={handleRoleChange}
                    >
                        {["Empleado", "Empleador"].map(role => (
                            <FormControlLabel
                                key={role}
                                value={role}
                                control={<Radio />}
                                label={role.charAt(0).toUpperCase() + role.slice(1)}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </article>

            <div className="containerSectionsPersonalData">
                <section className="firstSectionPersonalData">
                    <InputLabel>Nombre</InputLabel>
                    <Input
                        sx={{ height: '1.8rem', marginTop: '0.2rem' }}
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel>Apellido</InputLabel>
                    <Input
                        sx={{ height: '1.8rem', marginTop: '0.2rem' }}
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel>Dirección</InputLabel>
                    <Input
                        sx={{ height: '1.8rem', marginTop: '0.2rem' }}
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel>Localidad</InputLabel>
                    <Input
                        sx={{ height: '1.8rem', marginTop: '0.2rem' }}
                        type="text"
                        name="localidad"
                        value={formData.localidad}
                        onChange={handleInputChange}
                        required
                    />

                    <InputLabel>Código Postal</InputLabel>
                    <Input
                        sx={{ height: '1.8rem', marginTop: '0.2rem' }}
                        type="text"
                        name="cp"
                        value={formData.cp}
                        onChange={handleInputChange}
                        required
                    />
                </section>

                <section className="secondSectionPersonalData">
                    <Item>
                        Buscar nuevas oportunidades profesionales es un proceso que, aunque desafiante,
                        puede conducir a grandes logros. Es fundamental destacar la ética de trabajo,
                        la capacidad para resolver problemas y la dedicación en cada aplicación y entrevista.
                    </Item>
                </section>

            </div>
            <section className="thirdContainerPersonalData">
                <Button onClick={setButton} sx={{ marginTop: '1.2rem', marginBottom: '1.2rem', width: '12%', paddingLeft: '4rem', paddingRight: '4rem' }} variant="outlined"> Aceptar </Button>

            </section>
        </div>
    );
};

export default PersonalData;
