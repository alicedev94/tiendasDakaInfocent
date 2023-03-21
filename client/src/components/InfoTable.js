import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Infotable() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    const res = await fetch(`http://localhost:5000/api/v1/`);
    const data = await res.json();
    setRows(data);
  }

  function addRows() {
    navigate("/create");
  }

  async function deleteRows(id) {
    const res = await fetch(`http://localhost:5000/api/v1/deleteUser/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer sx={{ width: "100%" }} component={Paper}>
      <Table sx={{ width: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">nombre</TableCell>
            <TableCell align="left">apellido</TableCell>
            <TableCell align="left">tipoDeIdentificacion</TableCell>
            <TableCell align="left">tipoDeIdentificacionValue</TableCell>
            <TableCell align="left">sexo</TableCell>
            <TableCell align="left">paisDeNacimiento</TableCell>
            <TableCell align="left">entidadFederal</TableCell>
            <TableCell align="left">ciudadDeNacimiento</TableCell>
            <TableCell align="left">nacionalidad</TableCell>
            <TableCell align="left">tipoDeSangre</TableCell>
            <TableCell align="left">factorRh</TableCell>
            <TableCell align="left">fechaRegistro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.nombre}</TableCell>
              <TableCell align="left">{row.apellido}</TableCell>
              <TableCell align="left">{row.tipoDeIdentificacion}</TableCell>
              <TableCell align="left">
                {row.tipoDeIdentificacionValue}
              </TableCell>
              <TableCell align="left">{row.sexo}</TableCell>
              <TableCell align="left">{row.paisDeNacimiento}</TableCell>
              <TableCell align="left">{row.entidadFederal}</TableCell>
              <TableCell align="left">{row.ciudadDeNacimiento}</TableCell>
              <TableCell align="left">{row.nacionalidad}</TableCell>
              <TableCell align="left">{row.tipoDeSangre}</TableCell>
              <TableCell align="left">{row.factorRH}</TableCell>
              <TableCell align="left">{row.registro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={addRows}>
        add row
      </Button>
      <Button
        style={{ background: "red" }}
        variant="contained"
        onClick={deleteRows}
      >
        delete row
      </Button>
    </TableContainer>
  );
}
