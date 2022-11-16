import React, {useState, useEffect} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Container, TextField, Checkbox, FormControlLabel} from "@material-ui/core";

import "./collectProfile.css"

function App() {

  const [motorista, setMotorista] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [dataColeta, setDataColeta] = useState("");
  const [horaColeta, setHoraColeta] = useState("");
  const [estadoColeta, setEstadoColeta] = useState("");
  const [cidadeColeta, setCidadeColeta] = useState("");
  const [bairroColeta, setBairroColeta] = useState("");
  const [ruaColeta, setRuaColeta] = useState("");
  const [numeroColeta, setNumeroColeta] = useState("");

    const [dataEntrega, setDataEntrega] = useState("");
    const [horaEntrega, setHoraEntrega] = useState("");
    const [estadoEntrega, setEstadoEntrega] = useState("");
    const [cidadeEntrega, setCidadeEntrega] = useState("");
    const [bairroEntrega, setBairroEntrega] = useState("");
    const [ruaEntrega, setRuaEntrega] = useState("");
    const [numeroEntrega, setNumeroEntrega] = useState("");

    const [nomeCliente, setNomeCliente] = useState("");
    const [cnpjCliente, setCnpjCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");
    const [pesoColeta, setPesoColeta] = useState("");
    const [volumeColeta, setVolumeColeta] = useState("");
    const [valorColeta, setValorColeta] = useState("");
    const [driversResponse, setDriversResponse] =  useState([])

    const params = useParams();

  var URL = "/collect_profile/" + params["id"]
  useEffect(() => {
    api
    .get(URL)
    .then((response) =>  setDriversResponse(response.data))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
    }, []);

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  return(
    <>  
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Coleta<hr style={{"width" : "12%"}}></hr></h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
    
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
            
          </TabList>

          <TabPanel>
  
          <TextField className="motorista" id="motorista" label="Motorista" 
                variant="outlined" margin="dense" value={(String(driversResponse["motorista"]))}/> 
                <TextField className="veiculo" id="veiculo" label="Veículo" 
                variant="outlined" margin="dense" value={(String(driversResponse["veiculo"]))} /> 
                <div style={{"width" : "100%"}}/>  
                <TextField className="peso" id="peso" label="Peso da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["pesoCarga"]))} />  
                <TextField className="volume" id="volume" label="Volume da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["volumeCarga"]))} />  
                <TextField className="valor" id="valor" label="Valor da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["valorCarga"]))} />  
                
                <hr className="hr"></hr>
                <h2 className="subtitle">Coleta</h2>
                <TextField className="data_coleta" id="data" label="Data de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["dataColeta"]))}/>
                <TextField className="hora_coleta" id="data" label="Hora de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["horaColeta"]))}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_coleta" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["estadoColeta"]))}/>
                <TextField className="cidade_coleta" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["cidadeColeta"]))}/>
                <TextField className="bairro_coleta" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["bairroColeta"]))}/>
                <TextField className="rua_coleta" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["ruaColeta"]))}/>
                <TextField className="numero_coleta" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["numeroColeta"]))}/>

                <hr className="hr"></hr>
                <h2 className="subtitle">Entrega</h2>
                <TextField className="data_entrega" id="data" label="Data de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["dataEntrega"]))}/>
                <TextField className="hora_entrega" id="data" label="Hora de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["horaEntrega"]))}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_entrega" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["estadoEntrega"]))}/>
                <TextField className="cidade_entrega" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["cidadeEntrega"]))}/>
                <TextField className="bairro_entrega" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["bairroEntrega"]))}/>
                <TextField className="rua_entrega" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["ruaEntrega"]))}/>
                <TextField className="numero_entrega" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["numeroEntrega"]))}/>


                <hr className="hr"></hr>
                <h2 className="subtitle">Cliente</h2>
                <div fullWidth>
                <TextField className="nomeDoCLiente_textFields" id="nomeDoCLiente" label="Nome"
                  variant="outlined" margin="dense" value={(String(driversResponse["nomeCliente"]))} />
                </div>
                <TextField className="cnpjDoCLiente_textFields" id="cnpjDoCLiente" label="CNPJ"
                  variant="outlined" margin="dense" value={(String(driversResponse["cnpjCliente"]))} />            
                <TextField className="telefoneDoCLiente_textFields" id="telefoneDoCLiente" label="Telefone"
                  variant="outlined" margin="dense" value={(String(driversResponse["telefoneCliente"]))}/>
                <TextField className="emailDoCLiente_textFields" id="emailDoCLiente" label="Email"
                  variant="outlined" margin="dense" value={(String(driversResponse["emailCliente"]))}/>


          </TabPanel>
        </Tabs>
  
        </form>
        </Container> 

 
        </>

  );

}

export default App;

