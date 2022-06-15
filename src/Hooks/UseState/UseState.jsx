import React, { useState } from 'react';
import styles from './UseState.module.css';

const UseState = () => {
  const [name, setName] = useState('');
  const [isClicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
  };

  const clickHandler = () => {
    setClicked(true);
  };

  const inputHandler = event => {
    console.log(event.target.value);
    const value = event.target.value;
    if (value.length >= 5) {
      setName(event.target.value);
      setClicked(false);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <h1>{isClicked ? `Welcome ${name}` : "What's your name"}</h1>
        <form onSubmit={submitHandler}>
          <div className={styles.inputField}>
            <input onChange={inputHandler} type='text' placeholder='Enter your name' />
          </div>
          <div className={styles.btn}>
            <button disabled={disabled} onClick={clickHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UseState;
