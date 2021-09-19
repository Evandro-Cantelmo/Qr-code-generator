import React from "react";

// import { Container } from './styles';

function QrCode(props) {
  return (
    <div className="boxQr">
      <div>
        <img src={props.Image}></img>
      </div>
    </div>
  );
}

export default QrCode;
