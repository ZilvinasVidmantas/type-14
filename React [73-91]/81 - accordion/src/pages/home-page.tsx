import React from 'react';
import Container from '../components/ui/container';
import classes from './home-page.module.scss';

type Todo = {
  id: number,
  userId: number,
  title: string,
  completed: boolean
};

const HomePage = () => {
  const [todos, setTodos] = React.useState<Todo[] | undefined>(undefined);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((fetchedTodos) => {
        setTodos(fetchedTodos);
      });
  }, []);

  return (
    <Container>
      {todos !== undefined && (
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({
              userId, id, title, completed,
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>{completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default HomePage;
