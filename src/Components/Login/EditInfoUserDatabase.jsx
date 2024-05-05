import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const EditInfoUserDatabase = () => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState(null);
  const [editedInfo, setEditedInfo] = useState({}); // Estado para almacenar la información editada
  const [userUID, setUserUID] = useState(null); // Estado para almacenar el UID del usuario
  const [setUpdateRef, setSetUpdateRef] = useState(null); // Referencia para actualizar en Firestore

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserUID(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Establecer la referencia para actualizar en Firestore
    if (userUID) {
      const updateRef = doc(db, `users/${userUID}`);
      setSetUpdateRef(updateRef);
    }
  }, [userUID]);

  useEffect(() => {
    const fetchData = async () => {
      if (setUpdateRef) {
        try {
          const docSnap = await getDoc(setUpdateRef);
          if (docSnap.exists()) {
            setInfoUser(docSnap.data());
            setEditedInfo(docSnap.data()); // Inicializa editedInfo con los datos de Firebase
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [setUpdateRef]);

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
              key !== 'rol' && (
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
          </div>
        )}
      </section>
    </div>
  );
};

export default EditInfoUserDatabase;
