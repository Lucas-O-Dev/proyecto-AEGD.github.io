import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, InputLabel, FormControl, FormControlLabel, Checkbox, FormLabel } from '@mui/material';
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
        comprobanteDeInscripcionAfip: null // Agregado para manejo de archivo
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
        <section className="containerFormEmpleador">
            <article className="articleFormEmpleador">
                <p>¡Perfecto, eres empleador!</p>
                <p>A continuación te pediremos los datos de tu empresa.</p>
            </article>
            <div className="containerCheckboxRoleEmpleador">
                <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem', flexWrap: "wrap" }}>
                    <FormLabel component="legend">Situación Fiscal</FormLabel>
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
            </div>
            <div className="containerInputsEmpleador">
                {[
                    { label: "Cuit o Dni", name: "cuit" },
                    { label: "Razón Social", name: "razonSocial" },
                    { label: "Nombre de Fantasía", name: "nombreDeFantasia" },
                    { label: "Dirección Fiscal", name: "direccionFiscal" },
                    { label: "Email Empresa", name: "emailEmpresa" },
                    { label: "Número Telefónico Empresa", name: "numeroTelefonicoEmpresa" }
                ].map(({ label, name }) => (
                    <TextField
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
            </div>
            <div className="containerFileUploadEmpleador">
                <InputLabel htmlFor="comprobanteDeInscripcionAfip" sx={{ marginTop: '1rem', marginBottom: '0' }}>
                    Comprobante de Inscripción AFIP
                </InputLabel>
                <input
                    type="file"
                    name="comprobanteDeInscripcionAfip"
                    onChange={handleFileChange}
                    required
                />
            </div>
            <Button
                onClick={editButton}
                variant="contained"
                color="primary"
                sx={{ margin: '1rem' }}
            >
                Aceptar
            </Button>
        </section>
    );
};

export default Empleador;
