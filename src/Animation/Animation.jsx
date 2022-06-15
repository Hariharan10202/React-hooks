import React from 'react';
import Button from '../Hooks/UseCallBackandUseMemo/Button';
import styles from './Animation.module.css';

const Animation = () => {
  return (
    <div className={styles.Wrapper}>
      <Button>Hover me</Button>
    </div>
  );
};

export default Animation;
