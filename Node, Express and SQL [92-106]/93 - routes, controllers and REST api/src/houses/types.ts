export type HouseModel = {
  id: number,
  title: string,
  location: {
    country: string,
    city: string,
  },
  images: string[],
  price: number,
  rating: number
};
