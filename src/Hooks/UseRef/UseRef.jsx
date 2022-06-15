import React, { useRef, useState } from 'react';
import styles from './UseRef.module.css';

const UseRef = () => {
  const [view, setView] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const ageRef = useRef();

  const submitHandler = event => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const address = addressRef.current.value;
    name && email && age && address && setView(true);

    event.preventDefault();
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        {!view && <h1>Enter the values</h1>}
        {view ? (
          <div className={styles.innerContainer}>
            <h1>Read Values</h1>
            <h1>
              <span>Your Name:</span>
              <span>{nameRef.current.value}</span>
            </h1>
            <h1>
              <span>Your Age:</span>
              <span>{ageRef.current.value}</span>
            </h1>
            <h1>
              <span>Your Email:</span>
              <span>{emailRef.current.value}</span>
            </h1>
            <h1>
              <span>Your Address:</span>
              <span>{addressRef.current.value}</span>
            </h1>
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div className={styles.inputField}>
              <input ref={nameRef} type='text' placeholder='Enter your name' />
            </div>
            <div className={styles.inputField}>
              <input ref={ageRef} type='text' placeholder='Enter Your Age' />
            </div>
            <div className={styles.inputField}>
              <input ref={emailRef} type='email' placeholder='Enter Your Email' />
            </div>
            <div className={styles.inputField}>
              <textarea
                rows={'8'}
                cols={'40'}
                ref={addressRef}
                type='text'
                placeholder='Enter your Address'
              />
            </div>
            <div className={styles.btn}>
              <button>Read</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UseRef;
