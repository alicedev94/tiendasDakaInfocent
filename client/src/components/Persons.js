import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import "../styles/Persons.css";
import { useState } from "react";

function Persons() {
  const [dataPerson, setDataPerson] = useState({
    nombre: "",
    apellido: "",
    tipoDeIdentificacion: "",
    tipoDeIdentificacionValue: "",
    sexo: "",
    paisDeNacimiento: "",
    entidadFederal: "",
    ciudadDeNacimiento: "",
    nacionalidad: "",
    tipoDeSangre: "",
    factorRH: "",
  });

  // persisistir los datos
  const typeIdintification = [
    {
      value: "CI",
      label: "Cédula",
    },
    {
      value: "J",
      label: "Jurídico",
    },
    {
      value: "RF",
      label: "Rif",
    },
  ];

  const sexo = [
    {
      value: "M",
      label: "Masculino",
    },
    {
      value: "F",
      label: "Femenino",
    },
  ];

  const country = [
    {
      value: "BRA",
      label: "Brasil",
    },
    {
      value: "CO",
      label: "Colombia",
    },
    {
      value: "VE",
      label: "Venezuela",
    },
  ];

  const state = [
    {
      value: "CA",
      label: "Carabobo",
    },
    {
      value: "CC",
      label: "Caracas",
    },
  ];

  const typeBlood = [
    {
      value: "O+",
      label: "Tipo O+",
    },
    {
      value: "A",
      label: "Tipo A",
    },
  ];

  const nationality = [
    {
      value: "co",
      label: "Colombiano",
    },
    {
      value: "ve",
      label: "Venezolano",
    },
  ];
  const sendData = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/registerPerson`, {
      method: "POST",
      body: JSON.stringify(dataPerson),
      headers: { "Content-Type": "application/json" },
    });
  };

  const handlerChange = (event) => {
    setDataPerson({ ...dataPerson, [event.target.name]: event.target.value });
  };

  return (
    <Box
      className="box-container"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="colum-1">
        <div className="textField">
          <TextField
            id="input-with-icon-textfield"
            label="Nombre(s)*"
            name="nombre"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Apellido(s)*"
            name="apellido"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Tipo de Identificación"
            name="tipoDeIdentificacion"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {typeIdintification.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label=""
            name="tipoDeIdentificacionValue"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handlerChange}
          />
        </div>
        <TextField
          id="standard-select-currency"
          select
          label="Sexo"
          name="sexo"
          defaultValue=" "
          variant="standard"
          onChange={handlerChange}
        >
          {sexo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div></div>
      </div>
      <div className="colum-2">
        <div className="textField">
          <TextField
            id="standard-select-currency"
            select
            label="País de Nacimiento"
            name="paisDeNacimiento"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {country.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Entidad Federal"
            name="entidadFederal"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {country.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Ciudad de nacimiento"
            name="ciudadDeNacimiento"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Nacionalidad"
            name="nacionalidad"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {nationality.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Tipo de Sangre"
            name="tipoDeSangre"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {typeBlood.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Factor RH"
            name="factorRH"
            defaultValue=" "
            variant="standard"
            onChange={handlerChange}
          >
            {typeBlood.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button className="form-button" variant="outlined" onClick={sendData}>
          Enviar
        </Button>
      </div>
    </Box>
  );
}

export default Persons;
