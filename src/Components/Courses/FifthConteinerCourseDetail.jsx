import React from 'react';
import { Box, Typography } from '@mui/material';
import BasicMenu from './BasicMenu';

const FifthConteinerCourseDetail = () => {
  return (
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' },
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Cambia a columna en pantallas pequeñas
        gap: '20px',
        border: '1px solid #e0e0e0',
      }}
    >
      {/* Primera sección */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: { xs: '20px', md: '0' },
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}
        >
          Programa del curso
        </Typography>
        <BasicMenu />
      </Box>

      {/* Segunda sección */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: { xs: '100%', md: '39%' },
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: { xs: 'center', md: 'left' }, // Centrado en móviles, alineado a la izquierda en pantallas grandes
        }}
      >
        <Typography variant="h6" sx={{ color: '#333' }}>
          Programación
        </Typography>
      </Box>
    </Box>
  );
};

export default FifthConteinerCourseDetail;
