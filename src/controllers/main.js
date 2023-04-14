const sequelize = require("../lib/sequelize");
const { Sequelize } = require("sequelize");

const querySql = async () => {
  const [data] = await sequelize.query(`SELECT * FROM ar_spi_err`);
  console.log(data);
  return data;
};

const query2Sql = async (body) => {
  const rta = await sequelize.query(`INSERT INTO eo_persona (
    id,
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    id_tipo_iden,
    nacional,
    num_iden,
    pasaporte,
    fecha_na,
    ciudad_na,
    id_entfe_na,
    id_pais_na,
    sexo,
    edo_civil,
    zurdo,
    tipo_sangre,
    factor_rh,
    direccion,
    ciudad,
    id_entfe,
    id_pais,
    parroquia,
    municipio,
    cod_postal,
    telefono1,
    telefono2,
    fax,
    celular,
    e_mail1,
    e_mail2,
    in_rel_trab,
    usrcre,
    feccre,
    usract,
    fecact,
    nombre_foto,
    enfermedadocu,
    etniaindigena,
    discauditiva,
    discvisual,
    discintelectual,
    discmental,
    discmusculoesq,
    discaccidente,
    discotra,
    descridisca
)
VALUES
    (
        84195367, -- Ultimo id + 1
        '${body.nombreUno}',
        '${body.segundoNombre}',
        '${body.apellidoUno}',
        '${body.apellidoDos}',
        '${body.idTipoIdentificacion}',
        '${body.nacionalidad}',
        '${body.numeroIdentificacion}',
        '${body.pasaporte}', 
        '250512',
        '${body.ciudadNacimiento}',
        '${body.idEntidadFederal}',
        '${body.idPaisNacimiento}',
        '${body.sexo}',
        '${body.edoCivil}',
        '${body.manoDominante}',
        '${body.tipoSangre}',
        'P',
        '${body.direccion}',
        '${body.ciudad}',
        'SON4',
        '${body.idPais}',
        '${body.parroquia}',
        '${body.municipio}',
        '${body.codPostal}',
        '${body.telefono1}',
        '${body.telefono2}',
        '${body.fax}',
        '${body.celular}',
        '${body.emailUno}',
        '${body.emailDos}',
        'u',
        '${body.usrcree}',
        '250512', -- FECHA CRE ---revisar 
        null, -- USUARIO DE MODIFICACIÓN
        '250512', -- FEACT
        null, -- NOMBRE_FOTO
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        null
    );`);
  return rta;
};

module.exports = {
  querySql,
  query2Sql,
};
