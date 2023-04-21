import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from "../assets/styles/carousel.module.css";
import Loader from './Loader';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=349f8b7252f326c17f9c35144a8db7ab`
      );
      const data = await response.json();
      setIsLoading(false);
      setMovies(data.results.slice(0, 4));
    };
    fetchMovies();
  }, []);

  if(isLoading){
    return <Loader />
  }

  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id} interval={2000}>
          <div className="d-flex justify-content-center">
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            
          />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
