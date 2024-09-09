import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Modal } from '@mui/material';
import { styled } from '@mui/joy/styles';
import Stack from '@mui/joy/Stack';

// Styled component for the item
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  fontWeight: theme.fontWeight.medium,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '1rem',
  padding: theme.spacing(2),
}));

const SecondContainerSonHome = () => {
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigateClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Box
        sx={{
          padding: { xs: '10px', md: '20px' },
          backgroundColor: '#f5f5f5',
        }}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Item>
            <Button
              variant="contained"
              onClick={() => handleNavigateClick('/documentation')}
              fullWidth
              sx={{ mb: 1 }}
            >
              ¿Cómo encontrar empleo?
            </Button>
          </Item>
          <Item>
            <Button
              variant="contained"
              onClick={() => handleNavigateClick('/documentation')}
              fullWidth
              sx={{ mb: 1 }}
            >
              ¿Cómo publicar empleos?
            </Button>
          </Item>
          <Item>
            <Button
              variant="contained"
              onClick={openPopup}
              fullWidth
            >
              Grupos de Whatsapp
            </Button>
          </Item>
        </Stack>
      </Box>

      <Modal
        open={popupOpen}
        onClose={closePopup}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          ref={popupRef}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '60%' },
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            AEGD
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Te ofrecemos que puedas unirte a grupos de whatsapp donde difundiremos búsquedas laborales de forma semanal.
            MUY IMPORTANTE: Para evitar molestias hemos configurado para que sólo los administradores podamos enviar mensajes en los grupos.
            Esperamos te sea de ayuda.
          </Typography>
          <Button
            variant="outlined"
            onClick={closePopup}
            sx={{ mt: 2 }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SecondContainerSonHome;
