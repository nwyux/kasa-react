import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Logement from '../pages/Logement/Logement';
import About from '../pages/About/About';
import Error404 from '../pages/Error404/Error404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '404',
        element: <Error404 />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
