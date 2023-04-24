import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MovieCardList from "./MovieCardTemplate";
import styles from "../assets/styles/moviecard.module.css";
import SectionTitle from "./SectionTitle";
import { API_URL, API_KEY } from "../api/api";

function PopularMovies() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      <div className={styles.sectionHeader}>
        <SectionTitle text="Más populares" />
        <a href="/movies/" className={styles.sectionLink}>
          Ver más
        </a>
      </div>
      <MovieCardList apiUrl={API_URL + "movie/popular?api_key=" + API_KEY} />

      
    </Container>
  );
}

export default PopularMovies;
