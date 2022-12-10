import React, { useState, useEffect } from "react";
import "./collectRegisterForm.css"
import {Container, Button, TextField, Checkbox, FormControlLabel, Select, MenuItem} from "@material-ui/core";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from "../../services/api";

function Form() {
  const [motorista, setMotorista] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [pesoColeta, setPesoColeta] = useState();
  const [volumeColeta, setVolumeColeta] = useState();
  const [valorColeta, setValorColeta] = useState();

  const [dataColeta, setDataColeta] = useState();
  const [horaColeta, setHoraColeta] = useState();
  const [estadoColeta, setEstadoColeta] = useState();
  const [cidadeColeta, setCidadeColeta] = useState();
  const [bairroColeta, setBairroColeta] = useState();
  const [ruaColeta, setRuaColeta] = useState();
  const [numeroColeta, setNumeroColeta] = useState();

  const [dataEntrega, setDataEntrega] = useState();
  const [horaEntrega, setHoraEntrega] = useState();
  const [estadoEntrega, setEstadoEntrega] = useState();
  const [cidadeEntrega, setCidadeEntrega] = useState();
  const [bairroEntrega, setBairroEntrega] = useState();
  const [ruaEntrega, setRuaEntrega] = useState();
  const [numeroEntrega, setNumeroEntrega] = useState();

  const [nomeCliente, setNomeCliente] = useState();
  const [cnpjCliente, setCnpjCliente] = useState();
  const [telefoneCliente, setTelefoneCliente] = useState();
  const [emailCliente, setEmailCliente] = useState();

  const [valorError, setValorError] = useState(false);
  const [pesoError, setPesoError] = useState(false);
  const [volumeError, setVolumeError] = useState(false);
  const [cnpjError, setCNPJError] = useState(false);
  const [registerRespone, setRegisterRespone] = useState([]);
  const [driversResponse, setDriversResponse] = useState([]);


  const notify = () => {
    toast.success('Coleta Cadastrada!', {
        transition: toast.Flip, position: toast.POSITION.TOP_RIGHT
    });
  };

  useEffect((e) => {
    api
    .get("/getNameMotoristas")
    .then((response) =>  setDriversResponse(response.data))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
    }, []);

    const result  = Array.from(driversResponse).map(motor =>(
     console.log(motor.nomeCompleto) 
    ))
    
    // const result  = Array.from(driversResponse).map(motor =>(
    //   driversResponse.concat(motor.Motoristas_idMotorista)
    // ))

 




  
    function cadastrarColeta(e) {
   
      let dataAuth = {}

      dataAuth = {
        "dataColeta" : dataColeta,
        "horaColeta" : horaColeta,
        "estadoColeta" : estadoColeta,
        "cidadeColeta" : cidadeColeta,
        "bairroColeta" : bairroColeta,
        "ruaColeta" : ruaColeta,
        "numeroColeta" : numeroColeta,
        "dataEntrega" : dataEntrega,
        "horaEntrega" : horaEntrega,
        "estadoEntrega" : estadoEntrega,
        "cidadeEntrega" : cidadeEntrega,
        "bairroEntrega" : bairroEntrega,
        "ruaEntrega" : ruaEntrega,
        "numeroEntrega" : numeroEntrega,
        "nomeCliente" : nomeCliente,
        "cnpjCliente" : cnpjCliente,
        "emailCliente" : emailCliente,
        "telefoneCliente" : telefoneCliente,
        "pesoCarga" : pesoColeta,
        "volumeCarga" : volumeColeta,
        "valorCarga" : valorColeta,
        "Ocorrencia_idOcorrencia" : 1,
        "Motoristas_idMotorista" : motorista
      }

      console.log(dataAuth)
      
      api
      .post("/createColeta", dataAuth)
      .then((response) => setRegisterRespone(response.data))
      .catch(error => console.log("ops! ocorreu um erro" + error));
    
      console.log(registerRespone["mensagem"])
      if (registerRespone["mensagem"] == "Cadastrado"){
        console.log("ok");
        toast.success("Coleta Cadastrado!");
      } else {
        console.log(registerRespone["mensagem"])
        // <Link to="/home" /
      }
      setDataColeta(""); setHoraColeta(""); setEstadoColeta(""); setCidadeColeta(""); setBairroColeta(""); setRuaColeta(""); setNumeroColeta("");
        setDataEntrega(""); setHoraEntrega(""); setEstadoEntrega(""); setCidadeEntrega(""); setBairroEntrega(""); setRuaEntrega(""); setNumeroEntrega("");
        setNomeCliente(""); setCnpjCliente(""); setEmailCliente(""); setTelefoneCliente("");
        setPesoColeta(""); setVolumeColeta(""); setValorColeta("");
        setValorError(false); setVolumeError(false); setPesoError(false);
  
  };

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;
  return (
    <>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Cadastro de Coletas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>


        <Select className="motorista_textFields" id="motorista" label="Motorista"
          variant="outlined" margin="dense"  value={motorista} onChange={(event) => {setMotorista(event.target.value)}}>
            <MenuItem disabled value="">
            <em>Motorista</em>
            </MenuItem>
             {Array.from(driversResponse).map(motor =>(
               <MenuItem value={motor.idMotorista}>{motor.nomeCompleto}</MenuItem>
            ))}
        </Select>

        <TextField className="veiculo_textFields" id="veiculo" label="Veículo"
          variant="outlined" margin="dense" value={veiculo} onChange={(event) => {setVeiculo(event.target.value)}}/>

<div fullWidth>
        <TextField className="peso_textFields" id="peso" label="Peso da Carga (Kg)"
          variant="outlined"  margin="dense" value={pesoColeta} error={pesoError}
          helperText={pesoError && "Digite apenas números. Unidade de Medida (Kg)."}
          onBlur={(event) => {
            const tmpPeso = event.target.value;

            if (regex.test(tmpPeso) == true) {
              setPesoError(true);
            } else {
              setPesoError(false);
            }
          }}
          onChange={(event) => {
            const tmpPeso = event.target.value;

            if (regex.test(tmpPeso) ==false) {
              setPesoError(false);
            }

            setPesoColeta(event.target.value)}
          }
        />
          <TextField className="volume_textFields" id="volume" label="Volume da Carga (m³)"
            variant="outlined" margin="dense" value={volumeColeta} error={volumeError}
            helperText={volumeError && "Digite apenas números. Unidade de Medida (m³)."}
            onBlur={(event) => {
              const tmpVolume = event.target.value;
  
              if (regex.test(tmpVolume) == true) {
                setVolumeError(true);
              } else {
                setVolumeError(false);
              }
            }}
            onChange={(event) => {
              const tmpVolume = event.target.value;
  
              if (regex.test(tmpVolume) ==false) {
                setVolumeError(false);
              }
  
              setVolumeColeta(event.target.value)}
            }
          />
        <TextField className="valor_textFields" id="valor" label="Valor da Carga (R$)"
          variant="outlined" margin="dense" value={valorColeta} error={valorError}
          helperText={valorError && "Digite apenas números. Unidade de Medida (R$)."}
          onBlur={(event) => {
            const tmpValor = event.target.value;

            if (regex.test(tmpValor) == true) {
              setValorError(true);
            } else {
              setValorError(false);
            }
          }}
          onChange={(event) => {
            const tmpValor = event.target.value;

            if (regex.test(tmpValor) ==false) {
              setValorError(false);
            }

            setValorColeta(event.target.value)}
          }
        />
        </div>

        <hr className="hr"></hr>
        <h2 className="subtitle">Coleta</h2>

        <div fullWidth>
        <TextField className="data_coleta_textFields" id="data" label="Data de Coleta" placeholder="dd/mm/aaaa"
          variant="outlined" margin="dense" value={dataColeta} onChange={(event) => {setDataColeta(event.target.value)}}/>

        <TextField className="hora_coleta_textFields" id="hora" label="Hora de Coleta" placeholder="hh:mm" 
          variant="outlined" margin="dense" value={horaColeta} onChange={(event) => {setHoraColeta(event.target.value)}}/>
        </div>

        <div fullWidth>
        <TextField className="estado_coleta_textFields" id="estado" label="Estado" 
          variant="outlined" margin="dense"value={estadoColeta}onChange={(event) => {setEstadoColeta(event.target.value)}}/>

        <TextField
          className="cidade_coleta_textFields"
          id="cidade"
          label="Cidade"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={cidadeColeta}
          onChange={(event) => {setCidadeColeta(event.target.value)}}/>
        </div>

        <TextField className="bairro_coleta_textFields" id="bairro" label="Bairro"
          variant="outlined"  margin="dense" fullWidth value={bairroColeta} onChange={(event) => {setBairroColeta(event.target.value)}}/>

        <TextField className="rua_coleta_textFields" id="rua" label="Rua"
          variant="outlined" margin="dense" fullWidth value={ruaColeta} onChange={(event) => {setRuaColeta(event.target.value)}}/>

        <TextField className="numero_coleta_textFields" id="numero" label="Número"
          variant="outlined" margin="dense" fullWidth value={numeroColeta} onChange={(event) => {setNumeroColeta(event.target.value)}}/>

        <hr className="hr"></hr>
        <h2 className="subtitle">Entrega</h2>

        <div fullWidth>
        <TextField className="data_entrega_textFields" id="data" label="Data de Entrega" placeholder="dd/mm/aaaa"
          variant="outlined" margin="dense" value={dataEntrega} onChange={(event) => {setDataEntrega(event.target.value)}}/>

        <TextField className="hora_entrega_textFields" id="hora" label="Hora de Entrega" placeholder="hh:mm"
          variant="outlined" margin="dense" value={horaEntrega} onChange={(event) => {setHoraEntrega(event.target.value)}}/>
        </div>

        <div fullWidth>
        <TextField className="estado_entrega_textFields" id="estado" label="Estado"
          variant="outlined" margin="dense" value={estadoEntrega} onChange={(event) => {setEstadoEntrega(event.target.value)}}/>

        <TextField className="cidade_entrega_textFields" id="cidade" label="Cidade" 
          variant="outlined" margin="dense" fullWidth value={cidadeEntrega} onChange={(event) => {setCidadeEntrega(event.target.value)}}/>
        </div>

        <TextField className="bairro_entrega_textFields" id="bairro" label="Bairro"
          variant="outlined" margin="dense" fullWidth value={bairroEntrega} onChange={(event) => {setBairroEntrega(event.target.value)}}/>

        <TextField className="rua_entrega_textFields" id="rua" label="Rua" 
          variant="outlined" margin="dense" fullWidth value={ruaEntrega} onChange={(event) => {setRuaEntrega(event.target.value)}} />
          
        <TextField className="numero_entrega_textFields" id="numero" label="Número"
          variant="outlined" margin="dense" fullWidth value={numeroEntrega} onChange={(event) => {setNumeroEntrega(event.target.value)}}/>

        <hr className="hr"></hr>
        <h2 className="subtitle">Cliente</h2>

        <div fullWidth>
        <TextField className="nomeDoCLiente_textFields" id="nomeDoCLiente" label="Nome"
          variant="outlined" margin="dense" value={nomeCliente} onChange={(event) => {setNomeCliente(event.target.value)}}/>
        </div>
        
        <TextField className="cnpjDoCLiente_textFields" id="cnpjDoCLiente" label="CNPJ"
          variant="outlined" margin="dense" value={cnpjCliente} 
          onBlur={(event) => {
            const tmpCnpj = event.target.value;

            if (tmpCnpj.length !== 11) {
              setCNPJError(true);
            } else {
              setCNPJError(false);
            }
          }}
          onChange={(event) => {
            const tmpCnpj = event.target.value;

            if (tmpCnpj.length === 11) {
              setCNPJError(false);
            }

            setCnpjCliente(event.target.value)}
          }/>
  
     
        <TextField className="telefoneDoCLiente_textFields" id="telefoneDoCLiente" label="Telefone"
          variant="outlined" margin="dense" value={telefoneCliente} onChange={(event) => {setTelefoneCliente(event.target.value)}}/>
      
        <TextField className="emailDoCLiente_textFields" id="emailDoCLiente" label="Email"
          variant="outlined" margin="dense" value={emailCliente} onChange={(event) => {setEmailCliente(event.target.value)}}/>

          <div fullWidth>
        <Button className="btn-form" variant="contained" color="primary" onClick={cadastrarColeta}>
          Cadastrar
        </Button>
        <ToastContainer/>
        </div>
      </form>
    </Container>
    </>
  );
}

export default Form;