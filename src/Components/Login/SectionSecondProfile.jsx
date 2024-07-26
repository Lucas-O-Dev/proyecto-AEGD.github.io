import React, { useCallback, useEffect, useState } from 'react';
import { Button, InputLabel, Input } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './StylesLogin/_sectionsecondprofile.scss';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { updateDoc, doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore'; // Añadido arrayUnion
import { db, auth } from '../../../Firebase/Config';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [userUID, setUserUID] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserUID(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  return userUID;
};

const SectionSecondProfile = () => {
  const userUID = useAuth();
  const [infoUser, setInfoUser] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    capacitacion: "", // Nuevo campo para el correo electrónico del usuario
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const setButton = async () => {
    if (!userUID) {
      toast.error('Amiguito, no estás logueado, así que inicia sesión.');
      return;
    }

    const { capacitacion } = formData;

    try {
      // Añade la nueva capacitación al arreglo existente usando arrayUnion
      await updateDoc(doc(db, `users/${userUID}`), {
        capacitaciones: arrayUnion(capacitacion),
      });
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async (uid) => {
      try {
        const userRef = doc(db, `users/${uid}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setInfoUser(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userUID) {
      fetchUserData(userUID);
    }
  }, [userUID]);

  return (
    <div className="sectionSecondProfile">
      <section className="firstSectionSecondSectionProfile">
        <div className="conteinerEditLanguageProfile">
          <h4>Idioma del perfil</h4>
          <div>
            <EditIcon />
          </div>
        </div>
        <p>Español</p>
        <div className="conteinerEditLanguageProfile">
          <h4>Perfil público</h4>
          <div>
            <EditIcon />
          </div>
        </div>
        <p>http://localhost:5173/profile</p>
      </section>

      <section className="secondSectionSecondSectionProfile">
        <article>
          <h4>Estas son tus capacitaciones hechas en nuestra web!</h4>
          <InputLabel>Capacitacion Nueva</InputLabel>
          <Input
            sx={{ height: '1.8rem' }}
            type="text"
            name="capacitacion"
            value={formData.capacitacion}
            onChange={handleInputChange}
            required
          />

          <Button onClick={setButton}>Guardar</Button>

          {infoUser && infoUser.capacitaciones && (
            <div>
              {infoUser.capacitaciones.map((capacitacion, index) => (
                <p key={index}>
                  <BookmarkAddedIcon /> {capacitacion}
                </p>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
};

export default SectionSecondProfile;
