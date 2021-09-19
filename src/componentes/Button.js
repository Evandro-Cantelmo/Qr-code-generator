import React from 'react';

// import { Container } from './styles';

function Button(props) {
  return (
      <div>
          <button onClick={props.onClicks}>Gerar Qr-Code</button>
      </div>
  );
}

export default Button;