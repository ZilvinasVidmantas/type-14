import React from 'react';
import ApiService from 'services/api-service';
import * as Styled from './styled';
import HouseCard from './house-card';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Styled.HousesGrid>
      {houses.map((houseProps) => (<HouseCard key={houseProps.id} {...houseProps} />))}
    </Styled.HousesGrid>
  );
};

export default HomePage;
