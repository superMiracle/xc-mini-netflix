import { createSlice } from '@reduxjs/toolkit';

export const main = createSlice({
  name: 'main',
  initialState: {
    movies: [],
    details: [],
  },
  reducers: {
    setMovies: (state, action) => ({
      ...state,
      movies: action.payload,
    }),
    addMovieDetail: (state, action) => {
      const movie = state.details.find(
        (m) => m.imdbID === action.payload.imdbID
      );
      if (movie) {
        return { ...state, details: state.details };
      } else {
        return { ...state, details: state.details.concat(action.payload) };
      }
    },
  },
});

export const { setMovies, addMovieDetail } = main.actions;
export const getMovies = (state) => state.main.movies;
export const getDetails = (state) => state.main.details;

export default main.reducer;
