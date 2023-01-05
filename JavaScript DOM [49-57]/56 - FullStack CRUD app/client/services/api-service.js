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

const createCar = async (carProps) => {
  const response = await fetch(`${serverAddress}/cars`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(carProps)
  });
  const cars = await response.json();

  return cars;
}

const updateCar = async (id, carProps) => {
  const response = await fetch(`${serverAddress}/cars/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(carProps)
  });
  const cars = await response.json();

  return cars;
}

const ApiService = {
  getCars,
  deleteCar,
  createCar,
  updateCar,
};

export default ApiService;
