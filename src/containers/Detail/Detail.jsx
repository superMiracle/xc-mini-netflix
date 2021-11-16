import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../api';
import { addMovieDetail } from '../Home/mainReducer';

import RatingStar from '../../components/RatingStar';
import styles from './Detail.scss';

const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.main.details);
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    const mov = details.find((m) => m.imdbID === id);
    if (mov) {
      setMovie(mov);
      setLoading(false);
    } else {
      getMovie(id)
        .then((data) => {
          dispatch(addMovieDetail(data));
          setMovie(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles['loading']}>
        <span>Loading...</span>
      </div>
    );
  }

  if (!loading && !movie) {
    return (
      <div className={styles['no-movie-text']}>
        <span>No movie found.</span>
      </div>
    );
  }

  return (
    <article className={styles['movie-container']} tabIndex={1}>
      <section
        className={styles['movie-bg']}
        style={{ backgroundImage: `url(${movie.Poster})` }}
      ></section>
      <section className={styles['movie']}>
        <h2 className={styles['movie__title']}>{movie.Title}</h2>
        <section className={styles['movie__rating']}>
          <RatingStar
            ratio={movie.imdbRating * 10}
            className={styles['movie__rating__star']}
          />
          <span className={styles['movie__rating__info']}>
            &nbsp; {movie.imdbRating}/{movie.imdbVotes}
          </span>
        </section>
        <section className={styles['movie__desc']}>{movie.Plot}</section>
        <section className={styles['movie__details']}>
          <span>
            Genre:
            <span className={styles['movie__details__content']}>
              {movie.Genre}
            </span>
          </span>
          <span>
            Country:
            <span className={styles['movie__details__content']}>
              {movie.Country}
            </span>
          </span>
          <span>
            Director:
            <span className={styles['movie__details__content']}>
              {movie.Director}
            </span>
          </span>
          <span>
            Actors:
            <span className={styles['movie__details__content']}>
              {movie.Actors}
            </span>
          </span>
          <span>
            Year:
            <span className={styles['movie__details__content']}>
              {movie.Year}
            </span>
          </span>
        </section>
      </section>
    </article>
  );
};

export default Detail;
