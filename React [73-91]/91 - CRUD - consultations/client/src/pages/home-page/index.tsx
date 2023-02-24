import React from 'react';
import ApiService from 'services/api-service';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';
import HouseCard from './house-card';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Button variant="outlined" onClick={() => navigate(routes.HouseFormPage)}>
        Sukurti naują
      </Button>
      <Styled.HousesGrid>
        {houses.map((houseProps) => (<HouseCard key={houseProps.id} {...houseProps} />))}
      </Styled.HousesGrid>
    </Container>
  );
};

export default HomePage;
