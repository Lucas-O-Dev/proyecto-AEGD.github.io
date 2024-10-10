import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImg from './StylesLogin/pexelssteve1266808.jpg';
import { auth } from '../../../Firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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

const Login = () => {

  const navigate = useNavigate()
  const [error, setError] = useState(null);

  const funcAutentication = async (e) => {
    console.log('Función de autenticación llamada');
    e.preventDefault();

    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;
      console.log('Usuario autenticado correctamente');
      console.log('UID del usuario:', user.uid); // Imprime el UID del usuario autenticado
      setError(null); // Limpiar errores si la autenticación tiene éxito
      navigate('/Home')
    } catch (error) {
      setError(error.message); // Manejar errores de autenticación
      console.error('Error al autenticar:', error.message);
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="conteinerLoginForm">

        <Container component="main" sx={{ width: '100%', padding:'6rem' }}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Iniciar Sesión
            </Typography>
            <Box
              component="form"
              onSubmit={funcAutentication}
              noValidate
              sx={{ mt: 0.3, border: 'none', justifyContent: 'center', alignItems:'center', flexDirection:'column', width:'96%'}}
            >
              <TextField
                margin="normal"
                required

                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
              Aceptar 
             </Button>
              <Grid item xs display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>

<Link href="/ResetPasswordFirebase" variant="body2" margin={4}>
  ¿Olvidaste tu clave?
</Link>

<Link href="/register" variant="body2">
  {"¿No tienes una cuenta? Registrarse."}
</Link>

</Grid>

            </Box>

          </Box>

          <Copyright sx={{ mt: 1 }} />
        </Container>

      </div>
    </ThemeProvider>
  );
}

export default Login