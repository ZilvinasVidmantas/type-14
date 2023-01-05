const serverAddress = 'http://localhost:3000';

const getCars = async () => {
  const response = await fetch(`${serverAddress}/cars`);
  const cars = await response.json();

  return cars;
}

const deleteCar = async (id) => {
  const response = await fetch(`${serverAddress}/cars/${id}`, {
    method: 'DELETE'
  });
  const cars = await response.json();

  return cars;
}

const ApiService = {
  getCars,
  deleteCar,
};

export default ApiService;
