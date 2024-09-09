import { Box, Typography } from '@mui/material'
import React from 'react'

const SeventhConteinerCourseDetail = () => {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Cambia a columna en pantallas pequeñas
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop:'2rem',
        marginBottom:'4rem',
      }}
    >
        
      <img
        src="https://d3puay5pkxu9s4.cloudfront.net/Users/4419616/medium_imagen-8K5yXvh5VwQy.jpg"
        alt="fotoautor"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', sm: 'flex-start' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography variant="h6">Gianluigi García</Typography>
        <Typography variant="subtitle1" color="text.secondary">Ingeniero de Sistemas</Typography>
        <Typography variant="body2" color="text.secondary">Profesor</Typography>
      </Box>
    </Box></>
  )
}

export default SeventhConteinerCourseDetail;
