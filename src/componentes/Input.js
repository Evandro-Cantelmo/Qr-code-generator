import React from 'react';

// import { Container } from './styles';

function Input(props) {
  return (
      <div>
          <input onKeyPress={props.onKeyPress} placeholder="Link here" onChange={props.onChange}></input>
      </div>
  );
}

export default Input;