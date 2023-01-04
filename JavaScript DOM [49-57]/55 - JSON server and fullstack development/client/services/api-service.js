const serverAddress = 'https://jsonplaceholder.typicode.com';

const getUserTodos = async (userId) => {
  const response = await fetch(`${serverAddress}/todos?userId=${userId}`);
  const todos = await response.json();

  return todos;
};

const getUsers = async () => {
  const response = await fetch(`${serverAddress}/users`);
  const users = await response.json();

  return users;
};

const ApiService = {
  getUserTodos,
  getUsers,
};

export default ApiService;