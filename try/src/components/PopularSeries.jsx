import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MovieCardList from "./MovieCardTemplate";
import styles from "../assets/styles/moviecard.module.css";
import SectionTitle from "./SectionTitle";
import { API_URL, API_KEY } from "../api/api";

function PopularSeries() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      <div className={styles.sectionHeader}>
        <SectionTitle text="Series populares" />
        <a href="#" className={styles.sectionLink}>
          Ver más
        </a>
      </div>
      <MovieCardList
        apiUrl={
          API_URL +
          "tv/on_the_air?api_key=" +
           API_KEY + "&language=en-US&page=1"
        }
      />
    </Container>
  );
}

export default PopularSeries;
