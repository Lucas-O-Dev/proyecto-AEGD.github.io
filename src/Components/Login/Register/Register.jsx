import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../../../../Firebase/Config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../StylesLogin/pexelssteve1266808.jpg'
import './_register.scss'

console.log('Auth inicializado:', auth); // Verifica si auth se está inicializando correctamente

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        aegd.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Register = () => {
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const funcAutentication = async (e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (!isValidEmail(correo)) {
      setEmailError("Por favor ingresa un correo electrónico válido.");
      alert(emailError)
      return;
    }

    if (contraseña.length < 8 || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contraseña)) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres y al menos un símbolo especial.");
      alert(passwordError)
      return;
    }

    setRegistrando(true);

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      await sendEmailVerification(auth.currentUser).then(() => {
        console.log("email enviado")
      })
      console.log('Usuario registrado con éxito');
      navigate('/PersonalData');
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Este correo electrónico ya está en uso.");
      } else {
        console.error('Error al registrar usuario:', error);
      }
    } finally {
      setRegistrando(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={defaultTheme}>

    <div className="containerPrincipalRegister">

    <div className='containerImgLoginLeft' style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '4%',
          height: '100vh',
        }}>

        </div>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box component="form" noValidate onSubmit={funcAutentication} sx={{ mt: 2 }} >
            <Grid item xs={12} marginBottom={4}>
              <TextField
                size='small'
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size='small'
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={registrando}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Ya tienes una cuenta? Iniciá Sesión.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
      </Container>

      <div className='containerImgLoginRight' style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '4%',
          height: '100vh',
        }}>

        </div>

    </div>
      
    </ThemeProvider>
  );
}

export default Register;
