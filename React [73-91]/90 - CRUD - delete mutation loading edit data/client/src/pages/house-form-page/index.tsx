import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

import { useParams } from 'react-router-dom';
import useHouse from 'hooks/use-house';
import LocationField from './location-field';
import ImagesField from './images-field';
import RatingField from './rating-field';
import * as Styled from './styled';
import { getHouseFormValues } from './helpers';
import { getModeData } from './data';

const HouseFormPage = () => {
  const { id } = useParams();
  const [house, loadingHouseData] = useHouse(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getHouseFormValues(formRef.current);
      if (mode === 'create') {
        // TODO: Atlikti sukurimo darbus ir po sukurimo, nuvesti į
        // TODO: pagrindinį puslapį arba sukurto produkto puslapį
        console.log('Vykdomas sukūrimas');
        console.log(values);
      } else {
        // TODO: Atlikti atnaujinimo darbus ir po sukurimo, nuvesti į
        // TODO: pagrindinį puslapį arba atnaujinto produkto puslapį
        console.log('Vykdomas atnaujinimas');
        console.log({ id, ...values });
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  if (loadingHouseData) return null;

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <HouseIcon sx={{ fontSize: 60, color: colorMain }} />
          <Typography variant="h4" color={colorMain}>{title}</Typography>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={house?.title}
          />
          <LocationField
            color={color}
            defaultCountry={house?.location.country}
            defaultCity={house?.location.city}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={house?.price.slice(0, -1)}
          />
          <ImagesField color={color} colorMain={colorMain} defaultImages={house?.images} />
          <RatingField defaultValue={house?.rating} />
          <Button
            variant="contained"
            color={color}
            size="large"
            fullWidth
            type="submit"
          >
            {btnText}
          </Button>
        </Stack>
      </Styled.Paper>

    </Styled.PageLayout>
  );
};

export default HouseFormPage;
