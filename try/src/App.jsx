import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MovieCarousel from "./components/MovieCarousel";
import PopularMovies from "./components/PopularMovies";
import PopularKids from "./components/PopularKids";
import PopularSeries from "./components/PopularSeries";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieCarousel />
      <PopularMovies />
      <PopularKids />
      <PopularSeries />
      <Footer />
    </div>
  );
}

export default App;
