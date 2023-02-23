import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import DeleteIcon from '@mui/icons-material/Delete';
import * as Styled from './styled';

type HouseCardProps = HouseModel;

const HouseCard: React.FC<HouseCardProps> = ({
  id,
  title,
  location,
  images,
  price,
  rating,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 4, position: 'relative' }}>
      <Button
        variant="contained"
        color="error"
        size="small"
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          minWidth: 'initial',
          p: 0.5,
        }}
        onClick={() => console.log(`uždaugęs darysiu užklausą į jSON serverį per ApiService ir sulaukęs satsakymo per naujo atsiųsiu visus duomenis. mano id '${id}'`)}
      >
        <DeleteIcon />
      </Button>

      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.HouseCardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
            <Styled.HouseCardRating>{rating}</Styled.HouseCardRating>
          </Box>

          <Typography sx={{ fontSize: '1.15rem', fontWeight: 500 }}>{title}</Typography>
          <Typography variant="subtitle2">{`${location.country}, ${location.city}`}</Typography>
        </Box>

        <Button
          color="primary"
          variant="outlined"
          sx={{ mt: 1 }}
          onClick={() => navigate(routes.SingleHousePage.createLink(id))}
        >
          View
        </Button>
      </Styled.HouseCardContent>
    </Stack>
  );
};

export default HouseCard;
