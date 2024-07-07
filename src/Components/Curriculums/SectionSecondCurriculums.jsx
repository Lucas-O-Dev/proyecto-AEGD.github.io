import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const SectionSecondCurriculums = () => {
  return (
    <Container sx={{ paddingTop: 4, margin: '4rem', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '20px', textAlign: 'left' }}>
      <Typography variant="h4" gutterBottom>
        Solo debes seguir estos pasos:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Paso 1:" secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos facilis nihil. Cupiditate, sequi assumenda." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Paso 2:" secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos facilis nihil." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Paso 3:" secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </ListItem>
      </List>
    </Container>
  );
};

export default SectionSecondCurriculums;
