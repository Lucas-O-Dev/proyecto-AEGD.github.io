import React from 'react';
import { Box, Typography } from '@mui/material';

const FirstArticleTeacher = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f0f0f0',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: '#333',
          fontWeight: 'bold',
        }}
      >
        Perfecto, eres profesor.
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: '600px',
          color: '#555',
        }}
      >
        A continuación le pediremos los datos necesarios para que pueda crear su
        cuenta con el rol de Profesor.
      </Typography>
    </Box>
  );
};

export default FirstArticleTeacher;
