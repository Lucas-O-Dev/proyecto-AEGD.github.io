import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../Firebase/Config';
import { getDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GppGoodIcon from '@mui/icons-material/GppGood';
import './StylesLogin/_sectiononeprofile.scss';
import BasicPopover from './BasicPopover';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';

const SectionOneProfile = () => {

  const navigate = useNavigate()
  const [infoUser, setInfoUser] = useState(null);
  const [userUID, setUserUID] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserUID(user.uid);
      } else {
        setUserUID(null);
      }
    });
    return () => unsubscribe();
  }, []);

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

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    width: '40%',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    background: '#dee2e6', 
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.radius.md,
  }));

  const handleClick = () => {
    navigate ('/EmailIsVerified?')
  }

  const NavigateToDocumentation = () => {
    navigate ('/Documentation')
  }

  return (
    <div className='sectionOneProfile'>
      <div className="firstContainerSectionOneProfile">
        <Button sx={{ marginTop: "1rem", marginRight: "1rem" }}>
          <CameraAltIcon />
        </Button>
      </div>

      <div className="secondContainerSectionOneProfile">
        <div className="conteinerInfoUserProfile">
          <article className='firstArticleConteinerInfoUserProfile'>
            <section className="sectionFirstArticleConteinerInfoUserProfile">
              <h2>{infoUser?.nombre} {infoUser?.apellido}</h2>
              <Button variant="outlined" size='small' sx={{ height: '80%', gap: '1rem', textTransform: 'none' }} onClick={handleClick}>
                <GppGoodIcon />
                Verificar
              </Button>
            </section>
            <section className="sectionSecondArticleConteinerInfoUserProfile">
              <div className="containerUbicationAndButtonContactInformation">
                <p>{infoUser?.direccion}</p>
                <BasicPopover infoUser={infoUser}/>
              </div>
            </section>
            <section className="sectionThirdArticleConteinerInfoUserProfile">
              <Button variant="contained" size='small' sx={{ textTransform: 'none' }}>
                Tengo interés en...
              </Button>
              <Button variant="outlined" size='small' sx={{ textTransform: 'none' }}>
                <Link to="/EditInfoUserDatabase">¿Deseas editar tus datos?</Link>
              </Button>
              <Button size='small' sx={{ textTransform: 'none' }} onClick={NavigateToDocumentation}>
                Más
              </Button>
            </section>
          </article>
        </div>
      </div>

      <div className="ThirdConteinerSectionOneProfile">
        <article className='firstArticleThirdConteinerSectionOneProfile'>
        {infoUser && infoUser.rol === 'Empleado' && (
  <Item>
    <section className='firstSectionFirstArticleThirdConteinerSectionOneProfile'>
      <p>Se busca empleo en...</p>
      <p>{infoUser.rubro}</p>
    </section>
  </Item>
)}
          <Item>
            <section className='secondSectionFirstArticleThirdConteinerSectionOneProfile'>
              <p>Muestra tus capacitaciones en una sección de tu perfil para que te descubran fácilmente.</p>
            </section>
          </Item>
        </article>
      </div>
    </div>
  );
};

export default SectionOneProfile;
