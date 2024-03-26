import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Empleador = () => {

    const navigate = useNavigate();

    // Definimos los estados para cada input del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Verificar si todos los campos obligatorios están completos
        if (!name || !email ) {
            setError('Por favor, complete todos los campos obligatorios.');
            return;
        }

    // Recopilar los valores de todos los inputs
    const formData = {
        name,
        email
        };
        // Imprimir los valores en la consola
        console.log('Datos enviados:', formData);

        // Mostrar notificación Toastify
        toast.success('¡Formulario enviado con éxito!', {
            onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
        });

    };

  return (
    <div>
        <section>
            <article>
            <p>Perfecto, eres empleador.</p>
            <p>A continuación te pediremos los datos de tu empresa.</p>
            </article>
            
            <article>
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

                <button type="submit">Enviar</button>

                </form>
            </article>
        </section>
    </div>
  )
}

export default Empleador