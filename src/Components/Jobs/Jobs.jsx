import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Config';
import JobsList from './JobsList';
import FirstArticleJobs from './FirstArticleJobs';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';
import { styled } from '@mui/joy/styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Jobs = () => {
  // Styled component for the item
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    marginTop: '1rem',
    textAlign: 'center',
    fontWeight: theme.fontWeight.medium,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
  }));

  // State variables
  const [jobs, setJobs] = useState([]);
  const [userRoles, setUserRoles] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const jobsRef = collection(db, 'Jobs');
      try {
        const querySnapshot = await getDocs(jobsRef);
        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    const fetchUserRole = async (uid) => {
      const userDocRef = doc(db, 'users', uid);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserRoles(userDoc.data().roles);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserRole(user.uid).then(() => {
          fetchData();
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!userRoles) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20px',
        }}
      >
        <Typography variant="h6">No user role found or no user is signed in.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: { xs: '10px', md: '20px' },
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Item>
          Puedes seleccionar el empleo que mejor se adapte a tus objetivos profesionales y alcanzar el puesto de trabajo que deseas.
        </Item>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <JobsList trabajos={jobs} />
        {userRoles === 'Empleador' && (
          <Item>
            <FirstArticleJobs />
          </Item>
        )}
      </Box>
    </Box>
  );
};

export default Jobs;
