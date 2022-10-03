import React, { useState } from "react";
import "./vechileRegisterForm.css"
import {
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import {BsPinMap} from "react-icons/bs";


function Form() {
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState('');
  const [marca, setMarca] = useState();
  const [tipo, setTipo] = useState();
  const [modelo, setModelo] = useState();
  const [chassi, setChassi] = useState();
  const [capacidadePeso, setCapacidadePeso] = useState();
  const [capacidadeVolumetria, setCapacidadeVolumetria] = useState();


  const [chassiError, setChassiError] = useState(false);
  const [placaError, setPlacaError] = useState(false);

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Cadastro de Veículos</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
          className="textFields"
          id="placa"
          label="Placa"
          variant="outlined"
          margin="dense"
          fullWidth
          error={placaError}
          helperText={placaError && "Deve conter 7 dígitos."}
          value={placa}
          onBlur={(event) => {
            const tmpRG = event.target.value;

            if (tmpRG.length !== 7) {
              setPlacaError(true);
            } else {
              setPlacaError(false);
            }
          }}
          onChange={(event) => {
            const tmpPlaca = event.target.value;

            if (tmpPlaca.length === 11) {
              setPlacaError(false);
            }

            setPlaca(event.target.value)}
          }
        />
        <TextField
          className="textFields"
          id="cor"
          label="Cor"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cor}
          onChange={(event) => {setCor(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="ano"
          label="Ano de Fabricação"
          variant="outlined"
          margin="dense"
          fullWidth
          value={ano}
          onChange={(event) => {setAno(event.target.value)}}
        />
        <Select 
          className="textFields" 
          id="tipo"
          label="Tipo do Veículo" 
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipo}
          onChange={(event) => {setTipo(event.target.value)}}>
            <MenuItem disabled value="">
            <em>Tipo do Veículo</em>
          </MenuItem>
            <MenuItem value="veiculoUrbanoDeCarga">Veículo Urbano de Carga</MenuItem>
            <MenuItem value="cavaloMecanico">Cavalo Mecânico</MenuItem>
            <MenuItem value="cavaloMecanicoTrucado">Cavalo Mecânico Trucado</MenuItem>
            <MenuItem value="carreta2Eixos">Carreta 2 Eixos</MenuItem>
            <MenuItem value="carreta3Eixos">Carreta 3 Eixos</MenuItem>
            <MenuItem value="carretaCavaloTrucado">Carreta Cavalo Trucado</MenuItem>
            <MenuItem value="bitrem">Bitrem</MenuItem>
            <MenuItem value="rodotrem">Rodotrem</MenuItem>
        </Select>
        <TextField
          className="textFields"
          id="marca"
          label="Marca"
          variant="outlined"
          margin="dense"
          fullWidth
          value={marca}
          onChange={(event) => {setMarca(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="modelo"
          label="Modelo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={modelo}
          onChange={(event) => {setModelo(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="chassi"
          label="Número do Chassi"
          variant="outlined"
          margin="dense"
          fullWidth
          error={chassiError}
          helperText={chassiError && "Deve conter 17 dígitos."}
          value={chassi}
          onBlur={(event) => {
            const tmpChassi = event.target.value;

            if (tmpChassi.length !== 17) {
              setChassiError(true);
            } else {
                setChassiError(false);
            }
          }}
          onChange={(event) => {
            const tmpChassi = event.target.value;

            if (tmpChassi.length === 11) {
                setChassiError(false);
            }

            setChassi(event.target.value)}
          }
        />
        <TextField
          className="textFields"
          id="capacidadePeso"
          label="Capacidade de Peso"
          variant="outlined"
          margin="dense"
          fullWidth
          value={capacidadePeso}
          onChange={(event) => {setCapacidadePeso(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="capacidadeVolumetria"
          label="Capacidade de Volumetria"
          variant="outlined"
          margin="dense"
          fullWidth
          value={capacidadeVolumetria}
          onChange={(event) => {setCapacidadeVolumetria(event.target.value)}}
        />
        
        <Button className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>

      <p>{placa}</p>
    </Container>
  );
}

export default Form;