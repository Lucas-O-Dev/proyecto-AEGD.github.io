import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../../../../Firebase/Config'
import { toast } from 'react-toastify'; // Agrega esta línea

const Empleador = () => {

    const [cuit, setCuit] = useState("")
    const [direccionEmpresa,setDireccionEmpresa] = useState("")
    const [razonSocial,setRazonSocial] = useState("")
    const [nombreDeFantasia,setNombreDeFantasia] = useState("")
    const [emailEmpresa,setEmailEmpresa] = useState("")
    const [numeroTelefonicoEmpresa,setNumeroTelefonicoEmpresa] = useState("")
    const [nacimiento,setNacimiento] = useState("")
    const [nacionalidad,setNacionalidad] = useState("")
    const [dni,setDni] = useState("")


    const navigate = useNavigate()

    const setUpdateRef = doc(db, 'users/mediaId4');

    const editButton = async () =>{

        try {
            await updateDoc(setUpdateRef, {
                cuit:cuit,
                direccionEmpresa:direccionEmpresa,
                razonSocial,
                nombreDeFantasia:nombreDeFantasia,
                emailEmpresa:emailEmpresa,
                numeroTelefonicoEmpresa:numeroTelefonicoEmpresa
            })

        // Mostrar notificación Toastify
        toast.success('¡Formulario enviado con éxito!', {
            onClose: () => navigate('/Home') // Navegar a la ruta especificada cuando se cierre la notificación
            });
        } catch (error) {
            console.log(error)
        }
    }

    return(

<>
<section>
            <article>
                <p>Perfecto, eres empleador.</p>
                <p>A continuación te pediremos los datos de tu empresa.</p>
            </article>

            <div>
            <label htmlFor="name">cuit</label>
            <input
            type="text"
            onChange={(e) => setCuit(e.target.value)}
            required
            />
            </div>

            <div>
            <label htmlFor="name">direccion de la Empresa</label>
            <input
            type="text"
            onChange={(e) => setDireccionEmpresa(e.target.value)}
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
        <button onClick={editButton}>editButton</button>
        </section></>
    )
}

export default Empleador