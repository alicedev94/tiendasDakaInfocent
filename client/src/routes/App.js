import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Persons from "../components/Persons";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Persons />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
