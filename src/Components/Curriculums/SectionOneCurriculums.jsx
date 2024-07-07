import React from 'react';
import { Container, Typography } from '@mui/material';


const SectionOneCurriculums = () => {
  return (
    <Container sx={{ paddingTop: 4, textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px', marginTop: '3rem' }}>
      <Typography variant="h2" gutterBottom>
        Curriculums
      </Typography>
      <Typography variant="body1">
        Crea ahora mismo tu curriculum y comienza a buscar empleo!
      </Typography>
    </Container>
  );
};

export default SectionOneCurriculums;
