import React, { useState, useEffect } from "react";
import './_empleador.scss';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '@mui/material/OutlinedInput';
import { Button, InputLabel, FormControlLabel, Checkbox, FormControl, FormLabel } from '@mui/material';

const Empleador = () => {
    const [formData, setFormData] = useState({
        cuit: "",
        direccionFiscal: "",
        razonSocial: "",
        nombreDeFantasia: "",
        emailEmpresa: "",
        numeroTelefonicoEmpresa: "",
        situacionFiscal: ""
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
        <>
            <section className="containerFormEmpleador">
                <article>
                    <p>¡Perfecto, eres empleador!</p>
                    <p>A continuación te pediremos los datos de tu empresa.</p>
                </article>
                <div className="containerCheckboxRoleEmpleador">

        <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row' }}>
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

                                                <div key={name}>
                                                    <InputLabel htmlFor={name}>{label}</InputLabel>
                                                    <Input
                                                    sx={{ height: '1.8rem' }}
                                                    name={name}
                                                    onChange={handleInputChange}
                                                    required
                        />
                    </div>

                ))}
                    </div>
                <div>
                    <InputLabel htmlFor="comprobanteDeInscripcionAfip">Comprobante de Inscripción AFIP</InputLabel>
                    <Input
                                            type="file"
                                            name="comprobanteDeInscripcionAfip"
                                            required  
                    />
                </div>
                        <Button sx={{margin: '1rem'}} onClick={editButton}>Enviar</Button>
                                    </section>
        </>
    );
};

export default Empleador;
