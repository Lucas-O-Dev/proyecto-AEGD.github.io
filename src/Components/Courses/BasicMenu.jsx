import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, Box } from '@mui/material';

export default function BasicMenu({ courseData }) {
  // Estado separado para cada submenú
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentMenu, setCurrentMenu] = React.useState(null); // Identifica cuál submenú está abierto
  const navigate = useNavigate();

  const handleClick = (event, menuId) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuId); // Establece el menú que fue clicado
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    setCurrentMenu(null); // Cierra el menú
    if (route) {
      navigate(route); // Redirige a la ruta especificada
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        padding: '1rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '1rem',
        width: '80%',
        flexWrap: 'wrap',
        borderRadius: '8px',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
      }}
    >
      {/* Botón para Módulo 1 */}
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="module-one-button"
        aria-controls={currentMenu === 'moduleOne' ? 'module-one-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={currentMenu === 'moduleOne' ? 'true' : undefined}
        onClick={(event) => handleClick(event, 'moduleOne')}
      >
        Módulo 1: {courseData.moduleOne}.
      </Button>

      {/* Menú de Módulo 1 */}
      <Menu
        id="module-one-menu"
        anchorEl={anchorEl}
        open={currentMenu === 'moduleOne'}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'module-one-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/route1')}>{courseData.subjectOne}</MenuItem>
        <MenuItem onClick={() => handleClose('/route2')}>{courseData.subjectTwo}</MenuItem>
      </Menu>

      {/* Botón para Módulo 2 */}
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="module-two-button"
        aria-controls={currentMenu === 'moduleTwo' ? 'module-two-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={currentMenu === 'moduleTwo' ? 'true' : undefined}
        onClick={(event) => handleClick(event, 'moduleTwo')}
      >
        Módulo 2: {courseData.moduleTwo}.
      </Button>

      {/* Menú de Módulo 2 */}
      <Menu
        id="module-two-menu"
        anchorEl={anchorEl}
        open={currentMenu === 'moduleTwo'}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'module-two-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/route3')}>{courseData.subjectThree}</MenuItem>
        <MenuItem onClick={() => handleClose('/route4')}>{courseData.subjectFour}</MenuItem>
      </Menu>

      {/* Repite para cada botón y submenú */}
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="module-three-button"
        aria-controls={currentMenu === 'moduleThree' ? 'module-three-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={currentMenu === 'moduleThree' ? 'true' : undefined}
        onClick={(event) => handleClick(event, 'moduleThree')}
      >
        Módulo 3: {courseData.moduleThree}.
      </Button>

      <Menu
        id="module-three-menu"
        anchorEl={anchorEl}
        open={currentMenu === 'moduleThree'}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'module-three-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/route5')}>{courseData.subjectFive}</MenuItem>
        <MenuItem onClick={() => handleClose('/route6')}>{courseData.subjectSix}</MenuItem>
      </Menu>

      {/* Botón y menú de Módulo 4 */}
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="module-four-button"
        aria-controls={currentMenu === 'moduleFour' ? 'module-four-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={currentMenu === 'moduleFour' ? 'true' : undefined}
        onClick={(event) => handleClick(event, 'moduleFour')}
      >
        Módulo 4: {courseData.moduleFour}.
      </Button>

      <Menu
        id="module-four-menu"
        anchorEl={anchorEl}
        open={currentMenu === 'moduleFour'}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'module-four-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/route7')}>{courseData.subjectSeven}</MenuItem>
        <MenuItem onClick={() => handleClose('/route8')}>{courseData.subjectEight}</MenuItem>
      </Menu>

      {/* Botón y menú de Módulo 5 */}
      <Button
        sx={{
          color: 'black',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        id="module-five-button"
        aria-controls={currentMenu === 'moduleFive' ? 'module-five-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={currentMenu === 'moduleFive' ? 'true' : undefined}
        onClick={(event) => handleClick(event, 'moduleFive')}
      >
        Módulo 5: {courseData.moduleFive}.
      </Button>

      <Menu
        id="module-five-menu"
        anchorEl={anchorEl}
        open={currentMenu === 'moduleFive'}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'module-five-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/route9')}>{courseData.subjectNine}</MenuItem>
        <MenuItem onClick={() => handleClose('/route10')}>{courseData.subjectTen}</MenuItem>
      </Menu>
    </Box>
  );
}