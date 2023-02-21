import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchHouses = async () => {
  const response = await api.get<HouseModel[]>('/houses');

  return response.data;
};

const fetchHouse = async (id: string | number) => {
  const response = await api.get<HouseModel>(`/houses/${id}`);

  return response.data;
};

const ApiService = {
  fetchHouses,
  fetchHouse,
};

export default ApiService;
