import React from 'react';
import Wave from '../Wave/Wave';

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'darkblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '3rem',
          height: '60vh',
        }}
      >
        <h1>React Hooks</h1>
      </div>
      <Wave />
    </>
  );
};

export default Home;
