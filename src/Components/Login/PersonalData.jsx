import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Si estás usando React Router, si no lo estás usando, puedes eliminar esta importación

const PersonalData = ({ agregarDatos, subirDatosAFirebase }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroTelefonico, setNumeroTelefonico] = useState('');
    const [rol, setRol] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Si estás usando React Router, si no lo estás usando, puedes eliminar esta línea
    

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        try {
            if (!name || !email || !localidad || !direccion || !numeroTelefonico || !rol) {
                setError('Por favor, complete todos los campos obligatorios.');
                return;
            }

            const formData = {
                name,
                email,
                localidad,
                direccion,
                numeroTelefonico,
                rol
            };

            console.log("Datos del formulario:", formData);

            // Agregamos los datos al estado para ser enviados al componente padre
            agregarDatos(formData);

            // Llamamos a la función para subir los datos a Firebase
            await subirDatosAFirebase(formData); // Esperamos a que se complete la función subirDatosAFirebase

            // Redireccionar según el rol seleccionado
            if (rol === 'empleado') {
                navigate('/Empleado'); // Navegamos a la ruta para el empleado
            } else if (rol === 'empleador') {
                navigate('/Empleador'); // Navegamos a la ruta para el empleador
            }
        } catch (error) {
            console.error('Error en handleSubmit:', error);
            setError('Error al procesar el formulario. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <>
            <div>
                <h1>Datos Personales</h1>
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
                        <button type="submit">Aceptar y Subir a Firebase</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </section>
            </div>
        </>
    );
};

export default PersonalData;
