import React from 'react';
import { db } from '../../../Firebase/Config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Company = ({ inputValues }) => {
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const handleClick = async () => {
        try {
            await addDoc(collection(db, 'Jobs'), {
                Empresa: inputValues.Empresa,
                Puesto: inputValues.Puesto,
                Localidad: inputValues.Localidad,
                Tiempo: inputValues.Tiempo,
                Requerimientos: inputValues.Requerimientos,
                Duracion: inputValues.Duración
            });
            console.log('Documentos agregados correctamente');
            navigate('/Jobs'); // Utiliza navigate en lugar de history.push para redirigir
        } catch (error) {
            console.error('Error al agregar documentos:', error);
        }
    };

    return (
        <>
            <button onClick={handleClick}>Submit</button>
        </>
    );
};

export default Company;
