import React from "react";
import NavBar from "../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import styles from "../assets/styles/card.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const Genres = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      if (!movies) {
        setIsLoading(false);
        return;
      }

      const moviesResponse = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=349f8b7252f326c17f9c35144a8db7ab&with_genres=" +
          genreId
      );
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
      setIsLoading(false);
    };

    fetchMovies();
  }, [genreId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <NavBar />

      <div className={styles.cardContainer}>
        {movies.map((movie) => (
          <div>
            <Link to={"/movies/" + movie.id} className={styles.link}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className={styles.cardImg}
                key={movie.id}
              />

              <h1 className={styles.cardTitle}>{movie.title}</h1>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
