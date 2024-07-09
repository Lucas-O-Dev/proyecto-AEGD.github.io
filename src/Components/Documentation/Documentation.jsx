import React from 'react';
import { Typography, List, ListItem, ListItemText, Box, Divider, ListItemIcon } from '@mui/material';
import { CheckCircleOutline, InfoOutlined, StarOutline } from '@mui/icons-material';
import './_documentation.scss';

const Documentation = () => {
  return (
    <Box className="containerComponentDocumentation" sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
          Documentación del Software
        </Typography>
        <List sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 2, boxShadow: 1 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Registro</Typography>
          {[
            "El software comienza por registrar al usuario con su correo electrónico y contraseña.",
            "Una vez registrado, automáticamente se envía un email para poder verificar la cuenta y proteger a los datos del usuario.",
            "Serás redireccionado a la ruta de Datos Personales, allí deberás empezar a crear tu curriculum rellenando las casillas para escribir.",
            "Una vez cargados los datos personales, deberás elegir qué rol vas a cumplir dentro de la web.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutline color="primary" />
              </ListItemIcon>
              <ListItemText primary={`(1.${index + 1}) ${text}`} />
            </ListItem>
          ))}
          <Divider />
          <Typography variant="h6" sx={{ margin: '16px 0' }}>¿Qué rol debo elegir?</Typography>
          {[
            "Si deseas buscar empleo y aprovechar las ofertas laborales deberás terminar de cargar tu curriculum.",
            "Si deseas publicar ofertas laborales deberás cargar los datos de tu empresa.",
            "Redirección hacia la ruta 'Home' con todos los datos cargados a la base de datos.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <InfoOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary={`(1.${index + 5}) ${text}`} />
            </ListItem>
          ))}
        </List>
        <List sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 2, boxShadow: 1, marginTop: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Iniciar Sesión</Typography>
          <ListItem>
            <ListItemIcon>
              <StarOutline color="action" />
            </ListItemIcon>
            <ListItemText primary="(2.0) Debes utilizar el correo electrónico y la contraseña registrada para poder iniciar sesión y utilizar todas las funcionalidades de la web." />
          </ListItem>
        </List>
        <List sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 2, boxShadow: 1, marginTop: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Ofertas Laborales</Typography>
          {[
            "En esta ruta encontrarás todas las ofertas laborales cargadas a nuestra base de datos.",
            "Podrás elegir dependiendo del rubro y puesto seleccionado en tu curriculum.",
            "Puedes leer el detalle de cada oferta laboral y contactarte con la empresa responsable de esa oferta laboral para poder coordinar una entrevista.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutline color="primary" />
              </ListItemIcon>
              <ListItemText primary={`(2.${index + 2}) ${text}`} />
            </ListItem>
          ))}
        </List>
        <List sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 2, boxShadow: 1, marginTop: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Cursos</Typography>
          {[
            "Si quieres aplicar a una oferta laboral pero no tienes la suficiente experiencia o habilidad te ofrecemos capacitaciones para poder lograr tu objetivo del puesto deseado.",
            "Las capacitaciones otorgarán un certificado.",
            "Cada capacitación tendrá su modalidad, por favor consultar.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <InfoOutlined color="secondary" />
              </ListItemIcon>
              <ListItemText primary={`(2.${index + 6}) ${text}`} />
            </ListItem>
          ))}
        </List>
        <List sx={{ backgroundColor: '#fff', borderRadius: 2, padding: 2, boxShadow: 1, marginTop: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Curriculum Gratis</Typography>
          {[
            "Al comienzo de la web, podrás crear totalmente gratis y rápido un curriculum que automáticamente será convertido en PDF para poder utilizarlo al instante.",
            "Este curriculum no será cargado a la base de datos.",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <StarOutline color="action" />
              </ListItemIcon>
              <ListItemText primary={`(3.${index}) ${text}`} />
            </ListItem>
          ))}
        </List>
    </Box>
  );
};

export default Documentation;
