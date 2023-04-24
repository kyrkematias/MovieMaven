import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { API_KEY, API_URL } from "../api/api";
import { Button } from "react-bootstrap";

const MovieTrailerButton = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading movies" });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);

    if (results.lenght) {
      await fetchMovie(results[0].id);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {playing ? (
        <>
          <YouTube
            videoId={trailer.key}
            className="reproductor container"
            containerClassName={"youtube-container amru"}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
          <Button onClick={() => setPlaying(false)} className="boton">
            close
          </Button>
        </>
      ) : (
        <div className="container">
          <div className="">
            {trailer ? (
              <Button>Ver trailer</Button>
            ) : (
              <Button variant="dark" disabled>
                No hay trailer disponible
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTrailerButton;
