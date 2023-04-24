import { Container } from "react-bootstrap";
import styles from "../assets/styles/moviecard.module.css";
import SectionTitle from "./SectionTitle";
import { API_URL, API_KEY } from "../api/api";
import MovieCardList from "./MovieCardTemplate";
import { Link } from "react-router-dom";

function PopularMovies() {
  return (
    <Container style={{ padding: "0.5rem 0" }}>
      <div className={styles.sectionHeader}>
        <SectionTitle text="Para niños" />
        <Link to={`/generos/${16}`} className={styles.sectionLink}>
          Ver más
        </Link>
      </div>
      <MovieCardList
        apiUrl={
          API_URL +
          "movie/popular?api_key=" +
          API_KEY +
          "&with_genres=16&certification_country=US&certification.lte=G&sort_by=popularity.desc"
        }
      />
    </Container>
  );
}

export default PopularMovies;
