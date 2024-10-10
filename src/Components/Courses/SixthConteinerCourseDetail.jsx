import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const SixthConteinerCourseDetail = ({course}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Cambia de column a row según el tamaño de la pantalla
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px', // Espacio entre los componentes hijos
        padding: '16px'
      }}
    >
      {/* Imagen y texto */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centra horizontalmente
        }}
      >
        <img
          src="https://d3puay5pkxu9s4.cloudfront.net/academy/imagenes/courses/img-certificate-min.png"
          alt=""
          style={{
            width: '80%',
            borderRadius: '8px',
            marginBottom: '16px' // Añadido margen inferior
          }}
        />
        <Typography
          sx={{
            textAlign: 'center', // Centra el texto dentro del Typography
            maxWidth: '80%' // Limita el ancho máximo para que el texto no se estire en pantallas grandes
          }}
        >
          Puedes compartir tu Certificado en LinkedIn, en tu currículum impreso o en otros documentos.
        </Typography>
      </Box>

      {/* Detalles del curso y certificado */}
      <Box 
        sx={{ 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '600px',
          margin: 'auto' 
        }}
      >
        {/* Certificado Section */}
        <Box 
          sx={{ 
            padding: '16px', 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px'
          }}
        >
          <Typography variant="h6" textAlign="center">
            Obtenga un certificado de estudios
          </Typography>

          {/* Certificado Details */}
          {[
            { text: "Validez internacional", description: "Evidencie su aprendizaje ante cualquier empleador o institución." },
            { text: "Tareas calificadas", description: "Reciba calificaciones y observaciones de todas sus actividades resueltas." },
            { text: "Asistencia académica", description: "Solicite asesoría sobre su proceso de certificación." }
          ].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '5px',
                }}
              >
                <CheckIcon /> {item.text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Curso Detail Section */}
        <Box 
          sx={{ 
            padding: '16px', 
            width: '100%', 
            textAlign: 'center' 
          }}
        >
          <Typography variant="h6">
            {course.degree}
          </Typography>
          <Typography>
            {course.certifiableHours} certificables.
          </Typography>
        </Box>

        {/* Certificate Info Section */}
        <Box 
          sx={{ 
            padding: '16px', 
            width: '100%' 
          }}
        >
          <Typography textAlign="center">
            Al finalizar el Curso de Python puede obtener un certificado de estudios para evidenciar sus nuevos conocimientos y habilidades.
          </Typography>
        </Box>

        {/* Action Button */}
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            alignSelf: 'center', 
            width: '50%', 
            borderRadius: '8px'
          }}
        >
          Ir Al Curso
        </Button>
      </Box>
    </Box>
  )
}

export default SixthConteinerCourseDetail;
