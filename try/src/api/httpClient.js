import { API_URL } from "./api"

export function get(path) {
  return fetch(
    API_URL + path,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDlmOGI3MjUyZjMyNmMxN2Y5YzM1MTQ0YThkYjdhYiIsInN1YiI6IjYzZjdkN2I3ZDFjYTJhMDBmMDA5YWYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRiYv-V6tgr4E-VIKtF-UsIFXHMOl261ry8wXocijxQ",
        "Content-Type":  "application/json;charset=utf-8",
      },

    })
    .then((result) => result.json())
}
