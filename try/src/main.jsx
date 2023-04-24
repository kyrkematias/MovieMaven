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
import Movies from './pages/Movies';
import Views from './pages/Views';
import  Series  from './pages/Series';
import Ranked from './pages/Ranked';

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
  },
  {
    path:"/movies/",
    element: <Movies />,
    errorElement: <NotFound />
  },
  {
    path:"/ranked/",
    element: <Ranked />,
    errorElement: <NotFound />
  },
  {
    path:"/views/",
    element: <Views />,
    errorElement: <NotFound />
  },
  {
    path:"/series/",
    element: <Views />,
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
