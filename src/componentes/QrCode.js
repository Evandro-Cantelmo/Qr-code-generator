import React from 'react';

// import { Container } from './styles';

function QrCode(props) {
  return (
      <div>
          <img src={props.Image}></img>
      </div>
  );
}

export default QrCode;