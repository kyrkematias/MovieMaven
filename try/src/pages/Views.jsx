import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../assets/styles/card.module.css";

const Views = () => {
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
        "https://api.themoviedb.org/3/discover/movie?api_key=349f8b7252f326c17f9c35144a8db7ab&sort_by=popularity.desc&vote_count.gte=5000"
      );
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
      setIsLoading(false);
    };

    fetchMovies();
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

export default Views;
