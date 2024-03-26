import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Empleado = () => {

    const navigate = useNavigate();

    // Definimos los estados para cada input del formulario
    const [nombreyApellido, setNombreyApellido] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('')
    const [direccion, setDireccion] = useState('')
    const [estudiosPrimarios, setEstudiosPrimarios] = useState('')
    const [estudiosSecundarios, setEstudiosSecundarios] = useState('')
    const [estudiosTerciarios, setEstudiosTerciarios] = useState('')
    const [error, setError] = useState(''); // Define setError como un estado

    const handleSubmit = (event) => {
        event.preventDefault();
        // Verificar si todos los campos obligatorios están completos
        if (!nombreyApellido || !email || !celular || !direccion || !estudiosPrimarios || !estudiosSecundarios  ) {
            setError('Por favor, complete todos los campos obligatorios.');
            return;
        }

            // Recopilar los valores de todos los inputs
        const formData = {
        nombreyApellido,
        email,
        direccion,
        celular,
        estudiosPrimarios,
        estudiosSecundarios,
        estudiosTerciarios // Agrega aquí cualquier otro campo que desees incluir
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
            <p>Perfecto, eres empleado.</p>
            <p>A continuación te pediremos los datos de tu curriculum.</p>
            </article>
            
            <article>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombreyApellido">Nombre y Apellido:</label>
                    <input
                        type="text"
                        id="nombreyApellido"
                        value={nombreyApellido}
                        onChange={(e) => setNombreyApellido(e.target.value)}
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
                    <label htmlFor="celular">Celular</label>
                    <input
                        type="text"
                        id="celular"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="direccion">Direccion</label>
                    <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estudiosprimarios">Estudios Primarios</label>
                    <input
                        type="text"
                        id="estudiosprimarios"
                        value={estudiosPrimarios}
                        onChange={(e) => setEstudiosPrimarios(e.target.value)}
                        placeholder="Título y Fecha"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estudiossecundarios">Estudios Secundarios</label>
                    <input
                        type="text"
                        id="estudiossecundarios"
                        value={estudiosSecundarios}
                        onChange={(e) => setEstudiosSecundarios(e.target.value)}
                        placeholder="Título y Fecha"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estudiosterciarios">Estudios Terciarios. (Opcional)</label>
                    <input
                        type="text"
                        id="estudiosterciarios"
                        value={estudiosTerciarios}
                        onChange={(e) => setEstudiosTerciarios(e.target.value)}
                        placeholder="Título y Fecha"
                    />
                </div>

                <button type="submit">Enviar</button>

                </form>
            </article>
        </section>
    </div>
  )
}

export default Empleado