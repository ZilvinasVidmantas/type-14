import axios from 'axios';

type Credentials = {
  email: string,
  password: string,
};

type AuthResponse = {
  user: {
    id: number,
    email: string,
    password: string,
    name: string,
    surname: string,
    role: 'ADMIN' | 'USER',
    mobile: string,
    image: string,
  },
  token: string,
};
const api = axios.create({
  baseURL: 'http://localhost:5002/api',
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
  const token = localStorage.getItem('token');

  const response = await api.get<HouseModel>(`/houses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const login = async (credentials: Credentials) => {
  const { data } = await api.post<AuthResponse>('/auth/login', credentials);
  const { token, user } = data;

  localStorage.setItem('token', token);

  return user;
};

const ApiService = {
  fetchHouses,
  login,
  fetchHouse,
};

export default ApiService;
