import React from 'react';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import { Typography } from '@mui/material';

const ArticleFirstEmpleado = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.5)', // Fondo blanco con 50% de transparencia
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    marginTop: theme.spacing(4),
  }));

  return (
    <article className='articleFirstEmpleado'>
      <Item>
        <Typography variant="body1">
          Perfecto, eres empleado.
        </Typography>
      </Item>
      <Item>
        <Typography variant="body1">
          A continuación te pediremos los datos de tu curriculum.
        </Typography>
      </Item>
    </article>
  );
}

export default ArticleFirstEmpleado;
