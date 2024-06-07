// import React, { useState } from 'react';
// import { auth } from '../../../Firebase/Config';
// import {signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate, Link } from 'react-router-dom';
// import SignOutButton from './SignOutButton';
// import './StylesLogin/_login.scss'
// import LogInButton from './LogInButton';


// console.log('Auth inicializado:', auth); // Verifica si auth se está inicializando correctamente

// const Login = () => {

//   const navigate = useNavigate()
//   const [error, setError] = useState(null);

//   const funcAutentication = async (e) => {
//     console.log('Función de autenticación llamada');
//     e.preventDefault();

//     const correo = e.target.email.value;
//     const contraseña = e.target.password.value;

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
//       const user = userCredential.user;
//       console.log('Usuario autenticado correctamente');
//       console.log('UID del usuario:', user.uid); // Imprime el UID del usuario autenticado
//       setError(null); // Limpiar errores si la autenticación tiene éxito
//       navigate('/Home')
//     } catch (error) {
//       setError(error.message); // Manejar errores de autenticación
//       console.error('Error al autenticar:', error.message);
//     }
//   };

//   return (
//     <div className='conteinerPrincipalLogin'>

//       <section className='sectionOneLogin'>
//         <h2>Inicia Sesión</h2>
//         <article className='articleOneLogin'>
//           <form onSubmit={funcAutentication} className='formOneLogin'>
//               <div className="coolinput">
//               <label for="input" className="text">Name:</label>
//               <input type="text" placeholder="Email" name="input" className="input" id='email'/>
//               <label for="contraseña" className="text">Contraseña</label>
//               <input type="password" placeholder="Contraseña" name="contraseña" className="input" id='password'/>
//               </div>
//               <LogInButton/>
//           </form>
//           <p>¿Olvidaste tu contraseña?</p>
//           {error && <p>{error}</p>} {/* Mostrar mensaje de error si hay un error de autenticación */}
//           <SignOutButton />
//           <article className='sectionTwoLogin'>
//             <Link to={'/Register'} ><p>Crear cuenta.</p></Link>
//           </article>
//         </article>
//       </section>
      
//     </div>
//   );
// };

// export default Login;
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImg from './StylesLogin/pexelssteve1266808.jpg';
import { auth } from '../../../Firebase/Config';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
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
     <div className='containerImgLoginLeft' style={{ 
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      width: '6%',
      height: '100vh',
    }}>

      </div>
     <Container component="main" sx={{ width: '30%' }}>
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
            Login
          </Typography>
          <Box
      component="form"
      onSubmit={funcAutentication}
      noValidate
      sx={{ mt: 1, border: 'none' }}
    >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Guardar Contraseña."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu clave gorriado?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"¿No tienes una cuenta? Registrarse."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
      <div className='containerImgLoginRight' style={{ 
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      width: '6%',
      height: '100vh',
    }}>

      </div>
     </div>
    </ThemeProvider>
  );
}

export default Login