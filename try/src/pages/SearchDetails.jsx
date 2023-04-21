import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../assets/styles/moviecard.module.css";
import Loader from "../components/Loader";

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

const SearchDetails = () => {
  const { searchText } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=349f8b7252f326c17f9c35144a8db7ab&query=${searchText}`
      );
      const data = await response.json();
      setIsLoading(false);
      setMovies(data.results);
    };
    fetchMovies();
  }, [searchText]);

  if(isLoading){
    return <Loader />
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1 className={styles.titleSearch}>Resultados de búsqueda para: {searchText}</h1>

        <Container gap={2}>
          <Row
            className="justify-content-center align-items-sm-center"
            xs="auto"
            gap={2}
          >
            {movies.map((movie) => (
              <Col key={movie.id} style={{ padding: "1rem 1rem" }}>
                <MovieCardTemplate movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchDetails;
