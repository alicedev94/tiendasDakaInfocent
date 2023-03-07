import "./styles/App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    return data;
  };

  return (
   <div></div>
  );
}

export default App;
