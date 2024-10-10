import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Box, Typography, Modal } from '@mui/material';
import { styled } from '@mui/joy/styles';
import Stack from '@mui/joy/Stack';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    fontWeight: theme.fontWeight.medium,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '1rem',
    padding: theme.spacing(2),
  }));



const FirstContainerHome = () => {
    const navigate = useNavigate();

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
              onClick={() => handleNavigateClick('/trabajos')}
              fullWidth
              sx={{ mb: 1 }}
            >
              Trabajos
            </Button>
          </Item>
          <Item>
            <Button
              variant="contained"
              onClick={() => handleNavigateClick('/cursos')}
              fullWidth
              sx={{ mb: 1 }}
            >
              Cursos
            </Button>
          </Item>
        </Stack>
      </Box></>
  )
}

export default FirstContainerHome