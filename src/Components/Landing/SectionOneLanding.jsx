import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '../../assets/EmpleAR_logo_transparent.png'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import './_sectiononelanding.scss'

const SectionOneLanding = () => {
  return (
    <Box 
      component="section"
      className="sectionOneLanding"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <Box 
        component="article" 
        className="articleTitleLanding"
        sx={{ marginBottom: '16px' }}
      >
        <img src={myImage} alt="logo-de-la-empresa" />
      </Box>

      <Box 
        component="article" 
        className="articleParrafoLanding"
        sx={{ marginBottom: '16px' }}
      >
        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ¡Conseguí trabajo ahora!
        </Typography>
      </Box>

      <Box 
        component="article" 
        className="articleButtonLoginLanding"
        sx={{ marginBottom: '16px' }}
      >
        <Button 
          variant="contained" 
          sx={{ padding: '0.4rem 1.2rem' }}
        >
          <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Comenzar
          </Link>
        </Button>
      </Box>
    </Box>
  )
}

export default SectionOneLanding
