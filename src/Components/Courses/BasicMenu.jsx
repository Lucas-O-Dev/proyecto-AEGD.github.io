import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, Box } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    if (route) {
      navigate(route); // Redirige a la ruta especificada
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        padding: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '10px',
        flexWrap: 'wrap',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
      }}
    >
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Unidad 1. Primeros pasos con Python
      </Button>

      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Unidad 2. Variables y operadores en Python
      </Button>

      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Unidad 3. Condicionales y ciclos en Python
      </Button>

      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Unidad 4. Funciones y estructuras de datos en Python
      </Button>

      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Unidad 5. Programación orientada a objetos en Python
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/intro-python')}>
          Introducción al curso de python
        </MenuItem>
        <MenuItem onClick={() => handleClose('/setup-python')}>
          Instalación y configuración de python
        </MenuItem>
      </Menu>
    </Box>
  );
}
