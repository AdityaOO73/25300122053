import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import UrlShortener from '../Pages/UrlShortener';
import Statistics from '../Pages/Statistics';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <UrlShortener /> },
      { path: '/stats', element: <Statistics /> },
    ],
  },
]);

