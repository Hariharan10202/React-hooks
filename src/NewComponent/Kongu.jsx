import React, { useState } from 'react';

const Kongu = () => {
  const [name, setName] = useState('Unknown');

  const changeHandler = () => {
    setName('Hariharan');
  };

  return (
    <div>
      <h1>Hello{name}</h1>
      <button onClick={changeHandler}>Change</button>
    </div>
  );
};

export default Kongu;
