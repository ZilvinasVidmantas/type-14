import React from 'react';
import ApiService from 'services/api-service';

const useHouse = (id: string | undefined) => {
  const [house, setHouse] = React.useState<undefined | HouseModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);
        setHouse(fetchedHouse);
        setLoading(false);
      })();
    }
  }, []);

  return [house, loading] as const;
};

export default useHouse;
