import "./App.css";

function App() {
  return <div className="App">
    <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + "Qualquer coisa"}></img>
  </div>;
}

export default App;
