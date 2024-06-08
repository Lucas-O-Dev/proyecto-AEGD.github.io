import React from 'react'
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import './_articlefirstempleado.scss'

const ArticleFirstEmpleado = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
  }));

  return (
    <article className='articleFirstEmpleado'>
      <Item sx={{mt:4}}>Perfecto, eres empleado.</Item>
      <Item sx={{mt:4}}>A continuación te pediremos los datos de tu curriculum.</Item>
</article>
  )
}

export default ArticleFirstEmpleado