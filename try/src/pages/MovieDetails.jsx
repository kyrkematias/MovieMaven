import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../api/httpClient";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button";
import styles from "../assets/styles/movieDetails.module.css";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import MovieTrailerButton from "../components/MovieTrailerButton";
import axios from "axios";



const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movie) {
    return null;
  }
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          title={`Poster de la pelicula de  ` + movie.title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1>{movie.title}</h1>
          <p>
            <strong>Lanzamiento: </strong>
            {movie.release_date}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
          <MovieTrailerButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
