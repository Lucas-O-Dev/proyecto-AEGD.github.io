import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const FourthConteinerCourseDetail = () => {
  return (
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px' },
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Título principal */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
        Qué aprenderás
      </Typography>

      {/* Primera sección: Objetivos del curso */}
      <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Al finalizar este curso podrás:
        </Typography>
        <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Comprender la importancia de Python en la programación." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Comprender todo lo relacionado con variables y operadores." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Utilizar los condicionales y ciclos." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Utilizar las funciones y estructuras de datos." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Trabajar con la programación orientada a objetos." />
          </ListItem>
        </List>
        <Typography sx={{ marginTop: '15px', color: '#555' }}>
          ¿A quién va dirigido? Este curso de Python está dirigido a técnicos, tecnólogos y profesionales de la ciencia de la computación interesados en aprender este lenguaje para incursionar en el mundo de la programación.
        </Typography>
      </Box>

      {/* Segunda sección: Información adicional */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Estimación de duración */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}
          >
            <AccessTimeIcon /> 5 semanas estimadas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1-2 horas por semana
          </Typography>
        </Box>

        {/* Tipo de material del curso */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}
          >
            <PlayArrowIcon /> Video clases
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aprende a través de videos explicativos y lecturas concretas
          </Typography>
        </Box>

        {/* Certificación */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}
          >
            <WorkspacePremiumIcon /> Título a certificar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By Academy USA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthConteinerCourseDetail;
