import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, InputLabel, FormControl, FormControlLabel, Checkbox, FormLabel, Box, Grid } from '@mui/material';
import './_empleador.scss';

const Empleador = () => {
    const [formData, setFormData] = useState({
        cuit: "",
        direccionFiscal: "",
        razonSocial: "",
        nombreDeFantasia: "",
        emailEmpresa: "",
        numeroTelefonicoEmpresa: "",
        situacionFiscal: "",
        comprobanteDeInscripcionAfip: null
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
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: files[0] }));
    };

    const handleRoleChange = (e) => {
        const role = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            situacionFiscal: prevData.situacionFiscal === role ? "" : role
        }));
    };

    const editButton = async () => {
        if (!userUID) return;
        try {
            await updateDoc(doc(db, `users/${userUID}`), formData);
            alert("¡Te recordamos que la inscripción frente a AFIP, tu número de teléfono personal y tu cuenta deben ser verificados!");
            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate('/Home')
            });
        } catch (error) {
            console.error("Error updating document: ", error);
            toast.error('Error al enviar el formulario. Por favor, intenta nuevamente.');
        }
    };

    return (
        <section className="containerFormEmpleador" style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
            <Box mb={4}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>¡Perfecto, eres empleador!</p>
                <p>A continuación te pediremos los datos de tu empresa.</p>
            </Box>

            <Box mb={4}>
    <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <FormLabel component="legend" sx={{ fontWeight: 'bold', marginRight: 2 }}>Situación Fiscal</FormLabel>
        {["responsable Inscripto", "monotributo", "personal"].map(role => (
            <FormControlLabel
                key={role}
                control={
                    <Checkbox
                        value={role}
                        checked={formData.situacionFiscal === role}
                        onChange={handleRoleChange}
                        inputProps={{ 'aria-label': role }}
                    />
                }
                label={role.charAt(0).toUpperCase() + role.slice(1)}
            />
        ))}
    </FormControl>
</Box>


<Box mb={2} sx={{ width:'50%'}}>
    <Grid container spacing={1}>
        {[
            { label: "Cuit o Dni", name: "cuit" },
            { label: "Razón Social", name: "razonSocial" },
            { label: "Nombre de Fantasía", name: "nombreDeFantasia" },
            { label: "Dirección Fiscal", name: "direccionFiscal" },
            { label: "Email Empresa", name: "emailEmpresa" },
            { label: "Número Telefónico Empresa", name: "numeroTelefonicoEmpresa" }
        ].map(({ label, name }) => (
            <Grid item xs={12} md={6} key={name}>
                <TextField
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    label={label}
                    variant="outlined"
                    fullWidth
                    margin="dense"  // Cambia a 'dense' para reducir el margen
                    required
                    sx={{ mb: 0.2 }}  // Ajusta el margen inferior
                />
            </Grid>
        ))}
    </Grid>
</Box>


            <Box mb={4}>
                <InputLabel htmlFor="comprobanteDeInscripcionAfip" sx={{ marginBottom: '0.5rem' }}>
                    Comprobante de Inscripción AFIP
                </InputLabel>
                <input
                    type="file"
                    name="comprobanteDeInscripcionAfip"
                    onChange={handleFileChange}
                    required
                    style={{ display: 'block', marginBottom: '1rem' }}
                />
            </Box>

            <Button
                onClick={editButton}
                variant="contained"
                color="primary"
                sx={{ margin: '1rem 0' }}
            >
                Aceptar
            </Button>
        </section>
    );
};

export default Empleador;
