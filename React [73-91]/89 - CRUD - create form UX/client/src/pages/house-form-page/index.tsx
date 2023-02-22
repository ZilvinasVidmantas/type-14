import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

import LocationField from './location-field';
import ImagesField from './images-field';
import RatingField from './rating-field';
import * as Styled from './styled';

const HouseFormPage = () => (
  <Styled.PageLayout>
    <Styled.Paper elevation={6}>
      <Stack sx={{ gap: 2, alignItems: 'center' }} component="form">
        <HouseIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Create new location</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          size="small"
        />
        <LocationField />
        <TextField
          label="Price"
          type="number"
          inputProps={{ step: '0.01' }}
          fullWidth
          variant="filled"
          size="small"
        />
        <ImagesField />
        <RatingField />
        <Button variant="contained" color="primary" size="large" fullWidth>Create</Button>
      </Stack>
    </Styled.Paper>

  </Styled.PageLayout>
);

export default HouseFormPage;
