import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import SearchDetails from './pages/SearchDetails';
import Genres from './pages/Genres';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path:"/movies/:movieId",
    element: <MovieDetails />,
    errorElement: <NotFound />
  },
  {
    path:"/search/:searchText",
    element: <SearchDetails />,
    errorElement: <NotFound />
  },
  {
    path:"/generos/:genreId",
    element: <Genres />,
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
