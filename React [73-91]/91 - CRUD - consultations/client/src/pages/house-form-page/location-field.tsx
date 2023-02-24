import React from 'react';
import {
  TextField,
  TextFieldProps,
  Box,
} from '@mui/material';

type LocationFieldProps = {
  color: TextFieldProps['color'],
  defaultCountry?: string,
  defaultCity?: string,
};

const LocationField: React.FC<LocationFieldProps> = ({
  color,
  defaultCountry,
  defaultCity,
}) => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField
      label="Country"
      name="country"
      fullWidth
      variant="filled"
      size="small"
      color={color}
      defaultValue={defaultCountry}
    />
    <TextField
      label="City"
      name="city"
      fullWidth
      variant="filled"
      size="small"
      color={color}
      defaultValue={defaultCity}
    />
  </Box>
);

export default LocationField;
