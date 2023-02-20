import React from 'react';
import ApartmentModel from '../models/apartment-model';
import ApartmentCard from './apartment-card';

const ApartmentsPage = () => {
  const [apartments, setApartments] = React.useState<undefined | ApartmentModel[]>();

  React.useEffect(() => {
    fetch('http://localhost:5024/houses')
      .then((response) => response.json())
      .then((fetchedApartments) => {
        setApartments(fetchedApartments);
      });
  }, []);

  return (
    <div>
      {apartments !== undefined && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {apartments.map((apartment) => <ApartmentCard {...apartment} />)}
        </div>
      )}

    </div>
  );
};

export default ApartmentsPage;
