import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MovieCardList from "./MovieCardTemplate";
import styles from "../assets/styles/moviecard.module.css";
import SectionTitle from "./SectionTitle";
import { API_URL, API_KEY } from "../api/api";
import { Link } from "react-router-dom";

function PopularSeries() {
  return (
    <Container style={{ padding: "2rem 0" }}>
      <div className={styles.sectionHeader}>
        <SectionTitle text="Series populares" />
        <Link to={"/series/"} className={styles.sectionLink}>
          Ver más
        </Link>
      </div>
      <MovieCardList
        apiUrl={
          API_URL +
          "discover/tv?api_key=" +
           API_KEY + "&language=en-US&page=1"
        }
      />
    </Container>
  );
}

export default PopularSeries;
