import "./styles/App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const onCaptureName = (event) => {
    setName(event.target.value);
  };
  const onCaptureLastName = (event) => {
    setLastName(event.target.value);
  };

  const sendData = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, lastname: lastName }),
    };

    const response = await fetch(
      `http://localhost:5000/api/v1/newUser`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <p>view client from infocent</p>
      <input
        className="input"
        placeholder="type a value"
        onChange={onCaptureName}
      />
      <input
        className="input"
        placeholder="type a value"
        onChange={onCaptureLastName}
      />
      <button
      onClick={sendData}
      >send request</button>
    </div>
  );
}

export default App;
