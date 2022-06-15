import React from 'react';
import './Child.module.css';

const Button = ({ clickHandler, children }) => {
  console.log(`Renders ${children}`);

  return <button onClick={clickHandler}>{children}</button>;
};

export default React.memo(Button);
