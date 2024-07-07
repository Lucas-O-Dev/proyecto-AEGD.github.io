import React from 'react';
import securityIcon from '../../assets/icons8-protect-24.png';
import chartIcon from '../../assets/icons8-graph-24.png';
import trustIcon from '../../assets/icons8-trust-64.png';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const FourthContainerSonHome = () => {
  const Item = styled(Card)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    height: '100%', // Asegura que todos los elementos tengan la misma altura
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    justifyContent: 'center',
  }));

  return (
    <Container sx={{ paddingTop: 4, marginBottom: 8 }}>
      <Grid container spacing={4} className='stackContainerPrincipalFourthContainerSonHome'>
        <Grid item xs={12} sm={4}>
          <Item>
            <Box>
              <img src={securityIcon} alt="securityIcon" height="30px" width="30px" />
              <Typography variant="h6" gutterBottom>Seguridad</Typography>
              <Typography variant="body2">
                El sistema está preparado para garantizar que la información de los usuarios esté resguardada a lo largo de todo el proceso de uso.
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <Box>
              <img src={chartIcon} alt="chartIcon" height="30px" width="30px" />
              <Typography variant="h6" gutterBottom>Evolución y Trayectoria</Typography>
              <Typography variant="body2">
                Más de 3 años de trabajo avalan el crecimiento y desarrollo de la plataforma en múltiples ciudades del país.
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <Box>
              <img src={trustIcon} alt="trustIcon" height="30px" width="30px" />
              <Typography variant="h6" gutterBottom>Compromiso</Typography>
              <Typography variant="body2">
                Nuestro equipo trabaja todos los días para asegurar la calidad de las publicaciones y el uso responsable de la plataforma.
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourthContainerSonHome;
