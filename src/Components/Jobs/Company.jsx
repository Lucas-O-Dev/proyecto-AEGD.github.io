import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase/Config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Company = ({ inputValues }) => {

    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const [users, setUsers] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            const usersRef = collection(db, "users");
            
            try {
                const querySnapshot = await getDocs(query(usersRef, where("rubro", "==", inputValues.rubro)));
                
                const usersData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchData();
    }, [inputValues.rubro]);
    

    const prueba = () => {
        console.log(users)
    }

    const handleClick = async () => {
        try {
            await addDoc(collection(db, 'Jobs'), {
                descripcion: inputValues.descripciondelpuesto,
                jornadaLaboral: inputValues.jornadaLaboral,
                experienciaRequerida: inputValues.experienciaRequerida,
                duracion: inputValues.duracion,
                sueldo: inputValues.sueldo,
                nivelEducativo: inputValues.nivelEducativo,
                modalidad: inputValues.modalidad,
                localidad: inputValues.localidad,
                rubro: inputValues.rubro,
                nivelEducativo: inputValues.nivelEducativo,
                puesto: inputValues.puesto
            });
            console.log('Documentos agregados correctamente');


            // funcion 


            navigate('/Jobs'); // Utiliza navigate  para redirigir
        } catch (error) {
            console.error('Error al agregar documentos:', error);
        }

        
    };

    return (
        <>
            <button onClick={prueba}>prueba</button>
            <Button onClick={handleClick}>Submit</Button>
        </>
    );
};

export default Company;                                 

