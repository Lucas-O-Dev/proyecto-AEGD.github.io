import React from 'react';
import securityIcon from '../../assets/icons8-protect-24.png';
import chartIcon from '../../assets/icons8-graph-24.png';
import trustIcon from '../../assets/icons8-trust-64.png';
import { Container, Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for Card
const Item = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  height: '100%', // Ensures that all cards have the same height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const FourthContainerSonHome = () => {
  return (
    <Container sx={{ paddingTop: 4, marginBottom: '12rem', marginTop: '12rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Item>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={securityIcon} alt="Seguridad" height="30px" width="30px" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Seguridad
              </Typography>
              <Typography variant="body2">
                El sistema está preparado para garantizar que la información de los usuarios esté resguardada a lo largo de todo el proceso de uso.
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={chartIcon} alt="Evolución y Trayectoria" height="30px" width="30px" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Evolución y Trayectoria
              </Typography>
              <Typography variant="body2">
                Más de 3 años de trabajo avalan el crecimiento y desarrollo de la plataforma en múltiples ciudades del país.
              </Typography>
            </CardContent>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={trustIcon} alt="Compromiso" height="30px" width="30px" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Compromiso
              </Typography>
              <Typography variant="body2">
                Nuestro equipo trabaja todos los días para asegurar la calidad de las publicaciones y el uso responsable de la plataforma.
              </Typography>
            </CardContent>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourthContainerSonHome;
