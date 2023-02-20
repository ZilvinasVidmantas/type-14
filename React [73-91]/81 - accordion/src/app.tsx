import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/router';

const App = () => (<RouterProvider router={router} />);

export default App;
