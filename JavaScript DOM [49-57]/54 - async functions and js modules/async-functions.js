const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const todos = await response.json();
    console.table(todos);
  } catch (error) {
    console.error(error.message)
  }
}

fetchData();