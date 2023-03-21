import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Persons from "../components/Persons";
import Infotable from "../components/InfoTable";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Infotable />} />
          <Route path="/create" element={<Persons />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

