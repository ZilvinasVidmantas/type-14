const serverAddress = 'http://localhost:3000';

const getCars = async () => {
  const response = await fetch(`${serverAddress}/cars`);
  const cars = await response.json();

  return cars;
}

const ApiService = {
  getCars,
};

export default ApiService;
