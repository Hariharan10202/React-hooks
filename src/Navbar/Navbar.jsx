import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.Wrapper}>
      <ul className={styles['menu-bar']}>
        <Link className='link' to='/'>
          <li>Home</li>
        </Link>
        <Link className='link' to='/usestate'>
          <li>useState</li>
        </Link>
        <Link className='link' to='/useref'>
          <li>useRef</li>
        </Link>
        <Link className='link' to='/useeffect'>
          <li>useEffect</li>
        </Link>
        <Link className='link' to='/callbackandmemo'>
          <li>useMemo & useCallback</li>
        </Link>
        <Link className='link' to='/usereducer'>
          <li>useReducer</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
