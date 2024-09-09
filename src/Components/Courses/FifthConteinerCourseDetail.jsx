import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BasicMenu from './BasicMenu';
import TerminalIcon from '@mui/icons-material/Terminal';

const FifthConteinerCourseDetail = () => {
  const courses = [
    {
      title: 'Curso de "C"',
      imageUrl: 'https://d3puay5pkxu9s4.cloudfront.net/curso/12534/card_imagen.jpg', // Aquí colocas la URL de la imagen
    },
    {
      title: 'Curso de JavaScript',
      imageUrl: 'https://d3puay5pkxu9s4.cloudfront.net/curso/12511/card_imagen.jpg',
    },
    {
      title: 'Introducción a Java',
      imageUrl: 'https://d3puay5pkxu9s4.cloudfront.net/curso/4493/card_imagen.jpg',
    }
  ];

  return (
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' },
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },  // Ajuste de dirección
        gap: '1rem',
      }}
    >
      {/* Primera sección */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: { xs: '20px', md: '0' },
          backgroundColor: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: { xs: 'center', md: 'left' }, // Alineación condicional
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', marginBottom: '10px' }}
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
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },  // Alineación condicional
            marginBottom: '1rem',
          }}
        >
          <TerminalIcon sx={{ marginRight: '8px' }} />
          Programación
        </Typography>

        {courses.map((course, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap:'1rem',
              flexDirection: 'row',
              alignItems: { xs: 'center', md: 'flex-start' },  // Alineación condicional
              marginBottom: '1rem',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={course.imageUrl} alt={`portadadelcurso${index}`} style={{ maxWidth: '100px', borderRadius: '8px' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ marginTop: '10px', textAlign: { xs: 'center', md: 'left' } }}  // Alineación condicional
            >
              {course.title}
            </Typography>
          </Box>
        ))}

        <Button
          variant="outlined"
          sx={{ display: 'block', margin: '0 auto', marginTop: '1rem' }}
        >
          Ver más cursos gratis
        </Button>
      </Box>
    </Box>
  );
};

export default FifthConteinerCourseDetail;
