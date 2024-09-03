import React from 'react';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import { Typography } from '@mui/material';

const ArticleFirstEmpleado = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body,
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius:'0.5rem',
    padding: theme.spacing(2),
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
