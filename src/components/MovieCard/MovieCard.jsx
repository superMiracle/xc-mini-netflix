import React from 'react';
import styles from './MovieCard.scss';
import { useHistory } from 'react-router';

const MovieCard = ({ movie, tabIndex }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`detail/${id}`);
  };

  const handleKeyDown = (e, id) => {
    if(e.keyCode === 13){
      history.push(`detail/${id}`);
    }
  }

  return (
    <article
      className={styles['movie-card']}
      style={{ backgroundImage: `url(${movie.Poster})` }}
      onClick={() => {
        handleClick(movie.imdbID);
      }}
      onKeyDown={(e)=>{handleKeyDown(e, movie.imdbID)}}
      tabIndex={tabIndex}
    >
      <section className={styles['movie-card__title']}>
        <b>{movie.Title}</b>&nbsp;
        <span>({movie.Year})</span>
      </section>
    </article>
  );
};

export default MovieCard;
