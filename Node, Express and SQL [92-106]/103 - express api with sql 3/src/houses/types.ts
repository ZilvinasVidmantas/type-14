export type HouseModel = {
  id: number,
  address: string,
  title: string,
  host: {
    id: number,
    name: string,
    surname: string,
    email: string,
    mobile: string,
  },
  price: number,
  location: {
    city: string,
    country: string,
  },
  images: string[],
  rating?: number
};

export type HouseData = Omit<HouseModel, 'id' | 'host' | 'location' | 'rating'> & {
  cityId: number
};

export type PartialHouseData = Partial<HouseData>;

export type HouseDataBody = PartialRecursive<HouseData>;
