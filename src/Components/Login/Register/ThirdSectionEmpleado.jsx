import React from 'react';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import { Typography, Box } from '@mui/material';
import './_thirdsectionempleado.scss';

const ThirdSectionEmpleado = () => {
  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.5)', // Fondo blanco con 50% de transparencia
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    width: '100%',
  }));

  return (
    <div className='containerParagraphEmpleado'>
      <Item>
        <Typography variant="body1">
          En una entrevista tendrás que responder a preguntas como estas...
        </Typography>
        <Box
          component="ul"
          sx={{ 
            listStyle: 'none', 
            paddingLeft: 0,
            '& li': {
              marginBottom: '1rem',
            }
          }}
        >
          <li>
            <Typography variant="body2">
              "¿Alguna vez tuviste que ir más allá de tus responsabilidades habituales para asegurar que un proyecto se completara con éxito?"
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              "¿Cómo priorizas y manejas múltiples problemas al mismo tiempo?"
            </Typography>
          </li>
        </Box>
      </Item>
    </div>
  );
}

export default ThirdSectionEmpleado;
