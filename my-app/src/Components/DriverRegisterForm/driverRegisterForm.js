import React, { useState, useEffect } from "react";
import "./driverRegisterForm.css"
import {Container, Button, TextField, Checkbox, FormControlLabel} from "@material-ui/core";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import {BsPinMap} from "react-icons/bs";

function Form() {
  const [nomeCompleto, setNomecompleto] = useState('');
  const [cnh, setCnh] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState();
  const [veiculo, setVeiculo] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();

  const [CPFError, setCPFError] = useState(false);
  const [RGError, setRGError] = useState(false);
  const [CNHError, setCNHError] = useState(false);

  const [registerRespone, setRegisterRespone] = useState([]);

  const notify = () => {
    toast.success('Motorista Cadastrado!', {
        transition: toast.Flip, position: toast.POSITION.TOP_RIGHT
    });
  };

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  

  function cadastrarMotorista(e) {
   
      let dataAuth = {}

      dataAuth = {
        "nomeCompleto" : nomeCompleto,
        "senha" : senha,
        "email" : email ,
        "cpf" : cpf,
        "rg" : rg,
        "telefone" : telefone,
        "latitude" : "",
        "longitude" : "",
        "cnh" : cnh
      }
      
      api
      .post("/createMotorista", dataAuth)
      .then((response) => setRegisterRespone(response.data))
      .catch(error => console.log("ops! ocorreu um erro" + error)); 
      console.log(registerRespone["mensagem"])
      setNomecompleto(""); setSenha(""); setEmail(""); setCpf(""); setRg(""); setTelefone(""); setCnh(""); setVeiculo(""); 
      if (registerRespone["mensagem"] == "Cadastrado"){
        console.log("ok");
        toast.success("Motorista Cadastrado!");
        
      } else {}  
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Cadastro de Motoristas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>

        <TextField className="nomeCompleto_textField" icon={<BsPinMap />} id="nomeCompleto" label="Nome Completo"
          variant="outlined" margin="dense" fullWidth value={nomeCompleto} onChange={(event) => {setNomecompleto(event.target.value)}}/>

        <TextField className="veiculo_textField" id="veiculo" label="Veículo"
          variant="outlined" margin="dense" fullWidth value={veiculo} onChange={(event) => {setVeiculo(event.target.value)}}/>

        <TextField className="CNH_textField" id="cnh" label="CNH"
          variant="outlined" margin="dense" fullWidth error={CNHError}
          helperText={CNHError && "Deve conter 11 dígitos. Insira apenas os números."}
          value={cnh}
          onBlur={(event) => {
            const tmpCNH = event.target.value;

            if (tmpCNH.length !== 11) {
              setCNHError(true);
            } else {
              setCNHError(false);
            }
          }}
          onChange={(event) => {
            const tmpCNH = event.target.value;

            if (tmpCNH.length === 11) {
              setCNHError(false);
            }

            setCnh(event.target.value)}
          }
        />
        <TextField className="cpf_textField" id="cpf" label="CPF"
          variant="outlined" margin="dense" fullWidth error={CPFError}
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
        <TextField className="rg_textField" id="rg" label="RG"
          variant="outlined" margin="dense" fullWidth error={RGError}
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

        <TextField className="senha_textField" id="senha" label="Senha do Usuário"
          variant="outlined"  margin="dense" fullWidth value={senha} onChange={(event) => {setSenha(event.target.value)}}/>

        <TextField className="telefone_textField" id="telefone" label="Telefone"
          variant="outlined" margin="dense" fullWidth value={telefone} onChange={(event) => {setTelefone(event.target.value)}}/>

        <TextField className="email_textField" id="email" label="Email"
          variant="outlined" margin="dense" fullWidth value={email} onChange={(event) => {setEmail(event.target.value)}}/>    

        <Button className="btn-form_login" variant="contained" color="primary" onClick={cadastrarMotorista} >
          Cadastrar
        </Button>
        <ToastContainer/>
      </form>

    </Container>
  );
}

export default Form;