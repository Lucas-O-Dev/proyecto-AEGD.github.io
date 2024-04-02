import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { collection, addDoc} from 'firebase/firestore'
import { db, auth } from '../../../Firebase/Config';



const PersonalData = () => {


    // Definimos los estados para cada input del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroTelefonico, setNumeroTelefonico] = useState('');
    const [rol, setRol] = useState('');
    const [error, setError] = useState('');
    const [userID, setUserID] = useState(null); // Estado para guardar el UID del usuario
    const navigate = useNavigate(); // Inicializamos useNavigate

    useEffect(() => {
        // Cuando el componente se monta, obtenemos el UID del usuario
        const currentUser = auth.currentUser;
        if (currentUser) {
            const uid = currentUser.uid;
            setUserID(uid);
        }
    }, []);

// Función para manejar el envío del formulario
const handleSubmit = async  (event) => {
    event.preventDefault();
    // Verificar si todos los campos obligatorios están completos
    if (!name || !email || !localidad || !direccion || !numeroTelefonico || !rol) {
        setError('Por favor, complete todos los campos obligatorios.');
        return;
    }

      // Obtener el ID único del usuario autenticado
      const currentUser = auth.currentUser;
      const userID = currentUser ? currentUser.uid : null;

    // Crear un objeto con los datos del formulario
    const formData = {
        name,
        email,
        localidad,
        direccion,
        numeroTelefonico,
        rol
    };

    // Mostrar los datos del formulario en la consola
    console.log("Datos del formulario:", formData);

    // Obtener una referencia a la colección "personalData" utilizando el ID único del usuario como identificador del documento
    const userFormDataRef = collection(db, `users/${userID}/personalData`);


    try {
      // Añadir un nuevo documento a la colección "personalData" utilizando el ID único del usuario como identificador del documento
      await addDoc(userFormDataRef, formData);
      console.log("Documento agregado correctamente a Firestore con el ID único del usuario como identificador.");
      setError(""); // Limpiar el mensaje de error si la operación tiene éxito
    } catch (error) {
      console.error("Error al agregar el documento a Firestore:", error);
      setError("Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
    }

    // Redireccionar según el rol seleccionado
    if (rol === 'empleado') {
        navigate('/Empleado'); // Navegamos a la ruta para el empleado
    } else if (rol === 'empleador') {
        navigate('/Empleador'); // Navegamos a la ruta para el empleador
    }
};

    return (
        <>
            <div>
                <h1>Datos Personales, tu UID es {userID}</h1>
            </div>

            <div>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre y Apellido:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="localidad">Localidad</label>
                            <input
                                type="text"
                                id="localidad"
                                value={localidad}
                                onChange={(e) => setLocalidad(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="direccion">Dirección</label>
                            <input
                                type="text"
                                id="direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="numerotelefonico">Numero de celular</label>
                            <input
                                type="text"
                                id="numerotelefonico"
                                value={numeroTelefonico}
                                onChange={(e) => setNumeroTelefonico(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Rol:</label>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="rol"
                                        value="empleado"
                                        checked={rol === 'empleado'}
                                        onChange={() => setRol('empleado')}
                                        required
                                    />
                                    Empleado
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="rol"
                                        value="empleador"
                                        checked={rol === 'empleador'}
                                        onChange={() => setRol('empleador')}
                                        required
                                    />
                                    Empleador
                                </label>
                            </div>
                        </div>
                        <button type="submit">Aceptar</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </section>
            </div>
        </>
    );
};

export default PersonalData;