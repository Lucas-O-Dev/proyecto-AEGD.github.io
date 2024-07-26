import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../../Firebase/Config';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography, Paper } from '@mui/material';

const EditInfoUserDatabase = () => {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState(null);
  const [editedInfo, setEditedInfo] = useState({});
  const [userUID, setUserUID] = useState(null);
  const [setUpdateRef, setSetUpdateRef] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserUID(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
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
            setEditedInfo(docSnap.data());
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
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Box mb={2}>
          <Typography variant="h6">Editar Información del Usuario</Typography>
        </Box>
        {infoUser && (
          <Box mb={2}>
            <Typography variant="body1">Tú eres: {infoUser.roles}</Typography>
          </Box>
        )}
        {infoUser && (
          <form>
            {Object.entries(infoUser).map(([key, value]) => (
              key !== 'roles' && (
                <Box mb={2} key={key}>
                  <TextField
                    fullWidth
                    label={key}
                    value={editedInfo[key] || ''}
                    onChange={e => handleInputChange(e, key)}
                    variant="outlined"
                  />
                </Box>
              )
            ))}
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button variant="contained" color="primary" onClick={editInfoUser}>Guardar Cambios</Button>
              <Link to={'/Home'} style={{ textDecoration: 'none' }}>
                <Button variant="text" color="primary">Volver al Home</Button>
              </Link>
            </Box>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default EditInfoUserDatabase;
