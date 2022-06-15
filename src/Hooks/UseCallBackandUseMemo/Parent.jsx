import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import Kongu from '../../NewComponent/Kongu';

import styles from './Parent.module.css';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState();

  const resetHandler = useCallback(() => {
    setCount(0);
  }, []);

  const isAgeEven = useMemo(() => {
    console.log('even func');
    return age % 2 === 0;
  }, [age]);

  const incrementHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const calcHandler = useCallback(() => {
    setAge(2022 - age);
  }, [age]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles.counter}>
          <span style={{ color: 'darkblue' }}>counter:</span>
          <span className={`${count === 0 ? styles.count : styles.count1}`}>{count}</span>
        </div>
        <div className={styles.counter}>
          <span style={{ color: 'darkblue' }}>Age:</span>
          <span className={`${!age ? styles.count : styles.count1}`}>
            {age ? age : '18 (Default)'}
          </span>
          <span>{isAgeEven ? 'Even' : 'Odd'}</span>
        </div>
        <div className={styles.input}>
          <input
            onFocus={e => setAge(e.target.value)}
            type='text'
            placeholder='Enter the Birth year'
          />
        </div>
        <div className={styles.btns}>
          <Button clickHandler={incrementHandler}>Increment</Button>
          <Button clickHandler={resetHandler}>Reset</Button>
          <Button clickHandler={calcHandler}>Calculate DOB</Button>
          <Kongu />
        </div>
      </div>
    </div>
  );
};

export default Parent;
