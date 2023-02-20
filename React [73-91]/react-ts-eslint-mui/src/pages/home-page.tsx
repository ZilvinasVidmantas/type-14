import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const HomePage = () => (
  <Box sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h3">React - TS - Eslint - MUI - project template</Typography>
      <Box sx={{
        height: 200,
        my: 3,
        bgcolor: 'primary.main',
        color: 'common.white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      >
        <Typography variant="h5">Open file to change:</Typography>
        <Typography variant="h3">src/pages/home-page.tsx</Typography>
      </Box>
    </Container>
  </Box>
);

export default HomePage;
