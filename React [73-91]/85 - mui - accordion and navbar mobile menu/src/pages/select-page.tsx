import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const SelectPage = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ country: countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="LT">Lithuania</MenuItem>
      </TextField>
    </Box>
  );
};

export default SelectPage;
