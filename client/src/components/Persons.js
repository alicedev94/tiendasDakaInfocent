import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import "../styles/Persons.css";
import { useState } from "react";

export default function Persons() {
  const [dataPerson, setDataPerson] = useState({
    nombreUno: "",
    segundoNombre: "",
    apellidoUno: "",
    apellidoDos: "",
    idTipoIdentificacion: "",

    nacionalidad: "",
    numeroIdentificacion: "",
    pasaporte: "-",
    ciudadNacimiento: "-",
    idEntidadFederal: "-",
    idPaisNacimiento: "-",

    sexo: "",
    edoCivil: "",
    manoDominante: 1,
    tipoSangre: "",
    factorRh: "",
    direccion: "",

    ciudad: "",
    idEntidadFederalResidencial: "",
    idPais: "",
    parroquia: "",
    municipio: "",
    codPostal: "",

    telefono1: "",
    telefono2: "",
    fax: "",
    celular: "",
    emailUno: "",
    emailDos: "",

    inRelTrab: "",
    usrcree: "",
    usract: "",
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
    const res = await fetch(`http://localhost:5000/api/v1/nameNewLog`, {
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
            label="Primer Nombre"
            name="nombreUno"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Segundo Nombre"
            name="segundoNombre"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Primer Apellido"
            name="apellidoUno"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Segundo Apellido"
            name="apellidoDos"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          />
        </div>
        <div>
          <TextField
            id="standard-select-currency"
            select
            label="Tipo de Identificación"
            name="idTipoIdentificacion"
            defaultValue=" "
            variant="filled"
            color="success"
            focused
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
            label="Número de Identifición"
            name="numeroIdentificacion" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          />
        </div>
        <TextField
          id="standard-select-currency"
          select
          label="Sexo"
          name="sexo"
          defaultValue=" "
          variant="filled"
          color="success"
          focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          >
            {typeBlood.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="colum-2">
        <div className="textField">
          <TextField
            id="standard-select-currency"
            select
            label="País de Nacimiento"
            name="paisDeNacimiento"
            defaultValue=" "
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
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
            variant="filled"
            color="success"
            focused
            onChange={handlerChange}
          >
            {typeBlood.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Button
          variant="contained"
          color="success"
          onClick={sendData}
          style={{ marginLeft: ".5rem" }}
        >
          send data
        </Button>
      </div>
    </Box>
  );
}
