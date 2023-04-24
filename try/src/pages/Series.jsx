import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../assets/styles/card.module.css";
import { API_KEY, API_URL } from "../api/api";

const Series = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      if (!movies) {
        setIsLoading(false);
        return;
      }

      try {
        const moviesResponse = await fetch(
          API_URL + "discover/tv?api_key=" + API_KEY + "&language=en-US&page=1"
        );
        if (!moviesResponse.ok) {
          throw new Error("Failed to fetch movies");
        }
        const moviesData = await moviesResponse.json();
        setMovies(moviesData.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }

      fetchMovies();
    };
  }, []);

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

export default Series;
