import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../assets/styles/moviecard.module.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

/*const MovieCardTemplate = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL + "movie/popular?api_key=" + API_KEY)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const MovieCardTemplate = ({ movie }) => {
    return (
      <Card
        style={{ width: "12rem", height: "22rem", padding: "0 0 5rem 0" }}
        className={styles.card}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body>
          <h3 className={styles.title}>{movie.title}</h3>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container gap={2}>
      <Row
        className="justify-content-center align-items-sm-center"
        xs="auto"
        gap={2}
      >
        {movies.slice(0, 5).map((movie) => (
          <Col key={movie.id} style={{ padding: "1rem 1rem" }}>
            <MovieCardTemplate movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieCardTemplate;*/



const MovieCardTemplate = ({ movie }) => {
  return (
    <Card
      style={{ width: "12rem", height: "22rem", padding: "0 0 5rem 0" }}
      className={styles.card}
    >
      <Link to={"/movies/" + movie.id} className="link">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body>
          <h3 className={styles.title}>{movie.title}</h3>
        </Card.Body>
      </Link>
    </Card>
  );
};

const MovieCardList = ({ apiUrl }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
      setIsLoading(false)
  }, [apiUrl]);

  if(isLoading){
    return <Loader />
  }

  return (
    <Container gap={2}>
      <Row
        className="justify-content-center align-items-sm-center"
        xs="auto"
        gap={2}
      >
        {movies.slice(0, 5).map((movie) => (
          <Col key={movie.id} style={{ padding: "1rem 1rem" }}>
            <MovieCardTemplate movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieCardList;
