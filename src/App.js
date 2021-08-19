import "./App.css";
import { useState } from "react";
import Title from "./componentes/Title"
import Input from "./componentes/Input";
import Button from "./componentes/Button";
import QrCode from "./componentes/QrCode";


function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
  const handleChangeText = ({ target }) => {
    setText(target.value);
  };
  const handleChangeImage = () => {
    setImage(qrApi + text);
  };
  return (
    <div className="container">
      <Title></Title>
      <QrCode Image={image}></QrCode>
      <Input onChange={handleChangeText}></Input>
      <Button onClicks={handleChangeImage}></Button>
    </div>
  );
}

export default App;
