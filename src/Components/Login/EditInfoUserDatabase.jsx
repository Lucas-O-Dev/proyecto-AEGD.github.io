import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import EmailAndNumberPhoneIsVerified from './EmailAndNumberPhoneIsVerified';

const EditInfoUserDatabase = () => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState(null);
  const [editedInfo, setEditedInfo] = useState({}); // Estado para almacenar la información editada
  const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario
  const [setUpdateRef, setSetUpdateRef] = useState(null); // Referencia para actualizar en Firestore

  // Este useEffect se ejecuta una vez al montar el componente.
  // Se suscribe al cambio de estado de autenticación.
  useEffect(() => {
    // auth.onAuthStateChanged es un método que recibe un callback y se ejecuta
    // cada vez que cambia el estado de autenticación (inicio o cierre de sesión).
    const unsubscribe = auth.onAuthStateChanged(user => {
      // Si el usuario está autenticado (user no es null),
      // guarda el UID del usuario en el estado con setUserUID.
      if (user) {
        setUserUID(user.uid);
      }
    });

    // Devuelve una función de limpieza que se ejecuta al desmontar el componente,
    // cancelando la suscripción a los cambios de estado de autenticación.
    return () => unsubscribe();
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente.

  // Este useEffect se ejecuta cada vez que cambia el valor de userUID.
  useEffect(() => {
    // Solo ejecuta el contenido si userUID tiene un valor.
    if (userUID) {
      // Crea una referencia al documento en Firestore correspondiente al usuario autenticado.
      const updateRef = doc(db, `users/${userUID}`);
      // Guarda la referencia del documento en el estado con setSetUpdateRef.
      setSetUpdateRef(updateRef);
    }
  }, [userUID]); // Dependencia: se ejecuta cuando userUID cambia.

  // Este useEffect se ejecuta cada vez que cambia el valor de setUpdateRef.
  useEffect(() => {
    // Función asíncrona para obtener los datos del usuario desde Firestore.
    const fetchData = async () => {
      // Solo ejecuta el contenido si setUpdateRef tiene un valor.
      if (setUpdateRef) {
        try {
          // Obtiene el documento desde Firestore utilizando la referencia guardada en setUpdateRef.
          const docSnap = await getDoc(setUpdateRef);

          // Verifica si el documento existe.
          if (docSnap.exists()) {
            // Si existe, guarda los datos del documento en el estado con setInfoUser
            // y también inicializa editedInfo con los mismos datos.
            setInfoUser(docSnap.data());
            setEditedInfo(docSnap.data()); // Inicializa editedInfo con los datos de Firebase
          } else {
            // Si el documento no existe, muestra un mensaje en la consola.
            console.log('No such document!');
          }
        } catch (error) {
          // Si ocurre un error al obtener el documento, muestra el error en la consola.
          console.log(error);
        }
      }
    };

    // Llama a la función fetchData para obtener los datos del usuario.
    fetchData();
  }, [setUpdateRef]); // Dependencia: se ejecuta cuando setUpdateRef cambia.


  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const editInfoUser = async () => {
    try {
      if (setUpdateRef) {
        // Actualizar los datos en Firebase
        await updateDoc(setUpdateRef, editedInfo);

        toast.success('Datos Editados Correctamente.', {
          onClose: () => navigate('/Home')
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <article>
          {infoUser && (
            <p>Tú eres: {infoUser.roles}</p>
          )}
        </article>
      </section>
      <section>
        {infoUser && (
          <div>
            <h2>Datos de Firebase:</h2>
            {/* Mapear los datos para mostrar cada dato con un input editable */}
            {Object.entries(infoUser).map(([key, value]) => (
              // Excluimos el dato de "Rol" de los inputs editables
              key !== 'roles' && (
                <div key={key}>
                  <span>{key}: </span>
                  <input
                    type="text"
                    value={editedInfo[key] || ''}
                    onChange={e => handleInputChange(e, key)}
                  />
                </div>
              )
            ))}
            <button onClick={editInfoUser}>Guardar Cambios</button>
            <Link to={'/Home'}><p>Volver al Home</p></Link>
            <EmailAndNumberPhoneIsVerified />
          </div>
        )}
      </section>
    </div>
  );
};

export default EditInfoUserDatabase;
