import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../Firebase/Config';
import './StylesLogin/_resetpasswordfirebase.scss'
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const ResetPasswordFirebase = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Email de restablecimiento de contraseña enviado.');
      setError('');
      navigate ('/login')
    } catch (error) {
      setError('Error al enviar el email de restablecimiento.');
      setMessage('');
    }
  };

  return (
    <div className="conteinerPrincipalResetPasswordFirebaseComponent">
      <Box 
      className="conteinerResetPasswordFirebaseComponent" 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Restablecer contraseña
      </Typography>
      <form onSubmit={handleResetPassword} style={{ width: '100%' }}>
        <TextField
          type="email"
          label="Ingresa tu email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Enviar
        </Button>
      </form>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
    </div>
  );
};

export default ResetPasswordFirebase;
