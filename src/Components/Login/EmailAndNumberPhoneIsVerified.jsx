import React, { useEffect, useState } from 'react';
import { auth } from '../../../Firebase/Config'; // Importa la configuración de Firebase
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth'; // Importa funciones necesarias de Firebase
import { Button, Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material'; // Importa componentes de Material-UI
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Icono de correo

const EmailAndNumberPhoneIsVerified = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para indicar carga inicial

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsEmailVerified(user.emailVerified);
      } else {
        setIsEmailVerified(false);
      }
      setLoading(false); // Finaliza la carga una vez que se ha verificado el estado inicial
    });

    return () => unsubscribe();
  }, []);

  const handleResendVerificationEmail = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          console.log('Email de verificación reenviado');
          alert('Email de verificación reenviado. Por favor, revisa tu bandeja de entrada.');
        })
        .catch((error) => {
          console.error('Error al reenviar el email de verificación:', error.message);
          alert('Error al reenviar el email de verificación. Por favor, inténtalo nuevamente más tarde.');
        });
    }
  };

  return (
    <Grid container justifyContent="center" sx={{margin: '10rem 0'}}>
      <Grid item xs={12} sm={8} md={6}>
        <Card variant="outlined" sx={{ p: 3, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Verificación de Email 
            </Typography>
            {loading ? (
              <CircularProgress color="primary" />
            ) : (
              <>
                <Typography variant="body1" gutterBottom>
                  Tu email está {isEmailVerified ? 'verificado' : 'sin verificar'}.
                </Typography>
                {!isEmailVerified && (
                  <Button
                    variant="contained"
                    onClick={handleResendVerificationEmail}
                    startIcon={<MailOutlineIcon />}
                    sx={{ mt: 2 }}
                  >
                    Reenviar Email de Verificación
                  </Button>
                )}
                                  <Typography sx={{marginTop:'1rem'}}>
                    No olvides mirar tu casilla de spam!
                  </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EmailAndNumberPhoneIsVerified;
