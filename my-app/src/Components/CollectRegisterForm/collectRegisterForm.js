import React, { useState } from "react";
import "./collectRegisterForm.css"
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import {BsPinMap} from "react-icons/bs";


function Form() {
  const [nomeCompleto, setNomecompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState();
  const [veiculo, setVeiculo] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();

  const [CPFError, setCPFError] = useState(false);
  const [RGError, setRGError] = useState(false);

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Cadastro de Coletas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
        
          className="textFields"
          icon={<BsPinMap />}
          id="nomeCompleto"
          label="Nome Completo"
          variant="standard"    color="success"     margin="dense"
          fullWidth
          value={nomeCompleto}
          onChange={(event) => {setNomecompleto(event.target.value)}}
        /><TextField
          className="textFields"
          id="telefone"
          label="Telefone"
          variant="standard"          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => {setTelefone(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="email"
          label="Email"
          variant="standard"          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="senha"
          label="Senha do Usuário"
          variant="standard"          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => {setSenha(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="veiculo"
          label="Veículo"
          variant="standard"          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="textFields"
          id="cpf"
          label="CPF"
          variant="standard"        margin="dense"
          fullWidth
          error={CPFError}
          helperText={CPFError && "Deve conter 11 dígitos. Insira apenas os números."}
          value={cpf}
          onBlur={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length !== 11) {
              setCPFError(true);
            } else {
              setCPFError(false);
            }
          }}
          onChange={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length === 11) {
              setCPFError(false);
            }

            setCpf(event.target.value)}
          }
        />
        <TextField
          className="textFields"
          id="rg"
          label="RG"
          variant="filled"   color="success"          margin="dense"
          fullWidth
          error={RGError}
          helperText={RGError && "Deve conter 7 dígitos. Insira apenas os números."}
          value={rg}
          onBlur={(event) => {
            const tmpRG = event.target.value;

            if (tmpRG.length !== 7) {
              setRGError(true);
            } else {
              setRGError(false);
            }
          }}
          onChange={(event) => {
            const tmpRG = event.target.value;

            if (tmpRG.length === 11) {
              setRGError(false);
            }

            setRg(event.target.value)}
          }
        />

        <Button className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>

      <p>{nomeCompleto}</p>
    </Container>
  );
}

export default Form;