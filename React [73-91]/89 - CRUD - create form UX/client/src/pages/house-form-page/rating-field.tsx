import React from 'react';
import { Typography, Box, Rating } from '@mui/material';

const RatingField = () => (

  <Box sx={{ alignSelf: 'flex-start' }}>
    <Typography component="legend">Rating</Typography>
    <Rating />
  </Box>
);

export default RatingField;
