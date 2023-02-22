import React from 'react';
import {
  TextField,
  Box,
} from '@mui/material';

const LocationField = () => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField
      label="Country"
      fullWidth
      variant="filled"
      size="small"
    />
    <TextField
      label="City"
      fullWidth
      variant="filled"
      size="small"
    />
  </Box>
);

export default LocationField;
