import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../../../Firebase/Config';
import { toast } from 'react-toastify'; // Importamos la librería de notificaciones Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importamos los estilos de Toastify

const Empleador = () => {
    // Estados para almacenar los datos del empleador
    const [cuit, setCuit] = useState(""); // Estado para el CUIT
    const [direccionFiscal, setDireccionFiscal] = useState(""); // Estado para la dirección de la empresa
    const [razonSocial, setRazonSocial] = useState(""); // Estado para la razón social
    const [nombreDeFantasia, setNombreDeFantasia] = useState(""); // Estado para el nombre de fantasía
    const [emailEmpresa, setEmailEmpresa] = useState(""); // Estado para el email de la empresa
    const [numeroTelefonicoEmpresa, setNumeroTelefonicoEmpresa] = useState(""); // Estado para el número telefónico de la empresa
    const [situacionFiscal, setSituacionFiscal] = useState(""); // Estado para almacenar la situación fiscal seleccionada
    const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario

    const navigate = useNavigate(); // Función de navegación

    // Obtener el UID del usuario actual al cargar el componente
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserUID(user.uid);
            }
        });
        return () => unsubscribe(); // Función para limpiar el efecto
    }, []);

    // Referencia al documento en Firestore usando el UID del usuario
    const setUpdateRef = userUID ? doc(db, `users/${userUID}`) : null;

    // Función para manejar el cambio en los checkboxes de situacionFiscal
    const handleRoleChange = (e) => {
        const role = e.target.value;

        // Si el rol seleccionado ya está en situacionFiscal, lo desmarca
        if (situacionFiscal === role) {
            setSituacionFiscal("");
        } else {
            // Si el rol seleccionado no está en situacionFiscal, lo marca
            setSituacionFiscal(role);
        }
    };

    // Función para enviar los datos del empleador a Firestore
    const editButton = async () => {
        try {
            await updateDoc(setUpdateRef, {
                cuit: cuit,
                direccionFiscal: direccionFiscal,
                razonSocial: razonSocial,
                nombreDeFantasia: nombreDeFantasia,
                emailEmpresa: emailEmpresa,
                numeroTelefonicoEmpresa: numeroTelefonicoEmpresa,
                situacionFiscal: situacionFiscal
            });

            alert("¡Te recordamos que la inscripción frente a AFIP, tu número de telefono personal y tu cuenta deben ser verificados!")

            // Mostrar notificación de éxito usando Toastify
            toast.success('¡Formulario enviado con éxito!', {
                onClose: () => navigate('/Home') // Navegar a la página de inicio cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error); // Manejo de errores
        }
    }

    // JSX que define la estructura y los elementos del componente
    return (
        <>
            <section>
                <article>
                    {/* Título y descripción */}
                    <p>¡Perfecto, eres empleador!</p>
                    <p>A continuación te pediremos los datos de tu empresa.</p>
                </article>

                <div>
                    {/* Checkboxes para seleccionar la situación fiscal */}
                    <label>Situación Fiscal:</label><br />
                    {/* Cada checkbox está vinculado a la función handleRoleChange */}
                    <input type="checkbox" value="responsableinscripto" checked={situacionFiscal === "responsableinscripto"} onChange={handleRoleChange} /> Responsable Inscripto<br />
                    <input type="checkbox" value="monotributo" checked={situacionFiscal === "monotributo"} onChange={handleRoleChange} /> Monotributo<br />
                    <input type="checkbox" value="personal" checked={situacionFiscal === "personal"} onChange={handleRoleChange} /> Personal<br />

                    {/* Entradas de texto para otros datos de la empresa */}
                    <label htmlFor="name">Cuit o Dni:</label>
                    <input
                        type="text"
                        onChange={(e) => setCuit(e.target.value)}
                        required
                    />
                </div>

                <div>
            <label htmlFor="name">razonSocial</label>
            <input
            type="text"
            onChange={(e) => setRazonSocial(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="name">nombreDeFantasia</label>
            <input
            type="text"
            onChange={(e) => setNombreDeFantasia(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">direccion fiscal</label>
            <input
            type="text"
            onChange={(e) => setDireccionFiscal(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">emailEmpresa</label>
            <input
            type="text"
            onChange={(e) => setEmailEmpresa(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">NumeroTelefonicoEmpresa</label>
            <input
            type="text"
            onChange={(e) => setNumeroTelefonicoEmpresa(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">ComprobanteDeInscripcionAfip</label>
            <input
            type="file"
            required
            />
            </div>

        </section>

        <section>
            {/* Botón para enviar los datos */}
        <button onClick={editButton}>editButton</button>
        </section></>
    )
}

export default Empleador