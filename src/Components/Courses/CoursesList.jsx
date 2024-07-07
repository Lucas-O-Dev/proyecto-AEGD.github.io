import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { Fade } from '@mui/material';

const CoursesList = ({ courses }) => {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Fade in={true} timeout={1000}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3, borderRadius: 2 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {course.course}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2 }}>
                  <Button component={Link} to={`/course/${course.id}`} variant="contained" color="primary" fullWidth>
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

export default CoursesList;
