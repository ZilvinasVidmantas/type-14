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
              <tr>
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

/*
  Atlikti duomenų parsiuntimą ir atvaizdavimą ATSKIRAME PUSLAPYJE:
    pvz:
      * PostsListPage
      * AlbumsListPage
      * etc.

    https://jsonplaceholder.typicode.com/posts
      * Vadim Tabelskij
      * Meda Šulskytė
      * Paulius Kišonas
      * Nojus Stankevičius
      * Loreta Maslova

    https://jsonplaceholder.typicode.com/comments
      * Petro Pyrohov
      * Dominykas Šumskus
      * Tomas Bobinas
      * Joana Mastianica
      * Evelina Pundziūtė

    https://jsonplaceholder.typicode.com/albums
      * Ervinas Mitkevičius
      * Viltė Meškė
      * Rokas Vertelis
      * AIDAS SINDARAS

    https://jsonplaceholder.typicode.com/photos
      * Viltė Akkoc
      * Karolis Dorofejevas
      * Aivaras Rožukas
      * Grantas Joniškis
*/
