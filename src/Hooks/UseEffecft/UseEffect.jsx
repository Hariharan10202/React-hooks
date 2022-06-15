import React, { useEffect, useState } from 'react';
import styles from './UseEffect.module.css';
import Collection from './Collection';
import axios from 'axios';

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const MoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=  &language=en-US&page=${id}`;
      const response = await axios.get(MoviesURL);
      console.log(response);
      const data = await response.data;
      setData(data.results);
    };
    fetchPopularMovies();
  }, [id]);

  const changeHandler = () => {
    setId(Math.floor(Math.random() * 500) + 1);
  };

  return (
    <div className={styles.Wrapper}>
      <button onClick={changeHandler}>Change Page</button>
      {data.map((item, index) => (
        <Collection key={index} info={item} />
      ))}
    </div>
  );
};

export default UseEffect;
