import React, { useEffect } from 'react';
import { getMovies } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './mainReducer';
import MovieCard from '../../components/MovieCard';

import styles from './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.main.movies);
  useEffect(() => {
    getMovies().then((data) => {
      dispatch(setMovies(data));
    });
  }, []);

  return (
    <section className={styles.movies}>
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} tabIndex={index+1}/>
      ))}
    </section>
  );
};

export default Home;
