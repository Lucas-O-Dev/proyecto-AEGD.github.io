import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Fade } from '@mui/material';

const JobsList = ({ trabajos }) => {
    return (
      <Container sx={{ paddingTop: 4 }}>
        <Grid container spacing={4}>
          {trabajos.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Fade in={true} timeout={1000}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3, borderRadius: 2 }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {job.descripcion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.localidad}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.rubro}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.puesto}
                    </Typography>
                  </CardContent>
                  <Box sx={{ padding: 2 }}>
                    <Button component={Link} to={`/trabajo/${job.id}`} variant="contained" color="primary" fullWidth>
                      Más info
                    </Button>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default JobsList;
  
  
