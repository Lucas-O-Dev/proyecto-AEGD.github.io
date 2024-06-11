// Components/Footer/Footer.js
import React from 'react';
import { Box, IconButton, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Footer = () => {
  const icons = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com', color: '#3b5998' },
    { icon: <TwitterIcon />, url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com', color: '#0077b5' }
  ];

  return (
    <Box 
      sx={{ 
        p: 4, 
        backgroundColor: '#282c34', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Typography variant="h6" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: 600, textAlign: 'center', mb: 2 }}>
        Somos una empresa dedicada a ofrecer soluciones innovadoras en el campo de la tecnología y el desarrollo profesional. Nuestra misión es conectar a profesionales con oportunidades excepcionales.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
        {icons.map(({ icon, url, color }) => (
          <motion.div
            key={url}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton 
              component="a" 
              href={url} 
              target="_blank" 
              aria-label="social media"
              sx={{ color, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              {icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/terms" color="inherit" sx={{ textDecoration: 'none' }}>Términos y Condiciones</Link>
        <Link href="/privacy" color="inherit" sx={{ textDecoration: 'none' }}>Política de Privacidad</Link>
      </Box>
      
      <Typography variant="body2" sx={{ mt: 2 }}>
        © 2024 Pulse. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
