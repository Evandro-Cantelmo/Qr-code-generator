import React from 'react';

// import { Container } from './styles';

function Input(props) {
  return (
      <div>
          <input onChange={props.onChange}></input>
      </div>
  );
}

export default Input;