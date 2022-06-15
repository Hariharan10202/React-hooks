import React from 'react';
import styles from './Collection.module.css';

const MovieItem = ({ info }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.MovieTitle}>{info.title ? info.title : info.name}</div>
      <div className={styles.ImageContainer}>
        <img
          className={styles.Image}
          src={
            info.poster_path
              ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
              : 'https://lightwidget.com/wp-content/uploads/local-file-not-found-480x488.png'
          }
          alt='img'
        />
      </div>
    </div>
  );
};

export default MovieItem;
