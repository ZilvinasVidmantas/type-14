import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

import LocationField from './location-field';
import ImagesField from './images-field';
import RatingField from './rating-field';
import * as Styled from './styled';
import { getHouseFormValues } from './helpers';

const HouseFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getHouseFormValues(formRef.current);
      // TODO: Atlikti sukurimo darbus ir po sukurimo, nuvesti į pagrindinį puslapį
      console.log('Vykdomas sukūrimas');
      console.log(values);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <HouseIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h4" color="primary">Create new location</Typography>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="filled"
            size="small"
          />
          <LocationField />
          <TextField
            label="Price"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            fullWidth
            variant="filled"
            size="small"
          />
          <ImagesField />
          <RatingField />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </Styled.Paper>

    </Styled.PageLayout>
  );
};

export default HouseFormPage;
