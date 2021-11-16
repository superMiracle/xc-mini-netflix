import { OMDB_KEY } from './config';
const API_URL = `http://www.omdbapi.com/?&apikey=${OMDB_KEY}`;

export const getMovies = (searchKey = "guardian") =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}&s=${searchKey}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response) {
          resolve(data.Search);
        } else {
          reject();
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getMovie = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
