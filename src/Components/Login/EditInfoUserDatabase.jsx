import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const EditInfoUserDatabase = () => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState(null);
  const [editedInfo, setEditedInfo] = useState({}); // Estado para almacenar la información editada

  useEffect(() => {
    const fetchData = async () => {
      const setUpdateRef = doc(db, 'users', 'mediaId4');
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
    };

    fetchData();
  }, []);

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const editInfoUser = async () => {
    try {
      // Actualizar los datos en Firebase
      const setUpdateRef = doc(db, 'users', 'mediaId4');
      await updateDoc(setUpdateRef, editedInfo);

      toast.success('Datos Editados Correctamente.', {
        onClose: () => navigate('/Home')
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
      <article>
    {infoUser && (
      <p>Tú eres: {infoUser.rol}</p>
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
            <Link to={'/Home'} ><p>Volver al Home</p></Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default EditInfoUserDatabase;
