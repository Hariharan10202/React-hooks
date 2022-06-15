import React, { useReducer } from 'react';
import styles from './UseReducer.module.css';

const initialState = 0;

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.counter}>
          <span style={{ color: 'darkblue' }}>counter:</span>
          <span className={`${count === 0 ? styles.count : styles.count1}`}>{count}</span>
        </div>

        <div className={styles.btns}>
          <button onClick={() => dispatch('increment')}>Increment</button>
          <button onClick={() => dispatch('decrement')}>Decrement</button>
          <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
