import React, {useState, useEffect} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import Chat from "../../Components/ChatBot/chat.js";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Container, TextField, Checkbox, FormControlLabel, Button} from "@material-ui/core";
import { BsFillPencilFill, BsFillTrashFill, BsFileEarmarkPdf } from "react-icons/bs";

import "./collectProfile.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
</style>

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
  const [deleteResponse, setDeleteResponse] =  useState([])

  const params = useParams();

  const deletarColeta = (e) => {
    toast.error("Não foi possível realizar a ação")
    
  //   let dataAuth = {}

  //   dataAuth = {
  //     "id" : parseI(params["id"]),
  //   }
    
  //   api
  //   .delete("/delete", dataAuth)
  //   .then((response) => setDeleteResponse(response.data))
  //   .catch(error => toast.error("ops! ocorreu um erro" + error)); 
  //   console.log(deleteResponse["mensagem"])
  //   if (deleteResponse["mensagem"] == "Deletada"){
  //     console.log("ok");
  //     toast.success("Coleta Deletada!");
  //     dataAuth = [];
  //   } else {}  
  // e.preventDefault();
  };

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
    <Chat/>
    <ToastContainer/>
    
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr"> Coleta</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

      }
      
      }>
    
      
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
            
          </TabList>

          <TabPanel>

            
  
          <TextField disabled className="motorista" id="motorista" label="Motorista" 
                variant="outlined" margin="dense" value={(String(driversResponse["motorista"]))}/> 
                <TextField disabled className="veiculo" id="veiculo" label="Veículo" 
                variant="outlined" margin="dense" value={(String(driversResponse["veiculo"]))} /> 
                <div style={{"width" : "100%"}}/>  
                <TextField disabled className="peso" id="peso" label="Peso da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["pesoCarga"]))} />  
                <TextField disabled className="volume" id="volume" label="Volume da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["volumeCarga"]))} />  
                <TextField disabled className="valor" id="valor" label="Valor da Carga" 
                variant="outlined" margin="dense" value={(String(driversResponse["valorCarga"]))} />  
                
                <hr className="hr"></hr>
                <h2 className="subtitle">Coleta</h2>
                <TextField disabled className="data_coleta" id="data" label="Data de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["dataColeta"]))}/>
                <TextField disabled className="hora_coleta" id="data" label="Hora de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["horaColeta"]))}/>
                <div style={{"width" : "100%"}}/>  
                <TextField disabled className="estado_coleta" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["estadoColeta"]))}/>
                <TextField disabled className="cidade_coleta" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["cidadeColeta"]))}/>
                <TextField disabled className="bairro_coleta" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["bairroColeta"]))}/>
                <TextField disabled className="rua_coleta" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["ruaColeta"]))}/>
                <TextField disabled className="numero_coleta" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["numeroColeta"]))}/>

                <hr className="hr"></hr>
                <h2 className="subtitle">Entrega</h2>
                <TextField disabled className="data_entrega" id="data" label="Data de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["dataEntrega"]))}/>
                <TextField disabled className="hora_entrega" id="data" label="Hora de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["horaEntrega"]))}/>
                <div style={{"width" : "100%"}}/>  
                <TextField disabled className="estado_entrega" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["estadoEntrega"]))}/>
                <TextField disabled className="cidade_entrega" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["cidadeEntrega"]))}/>
                <TextField disabled className="bairro_entrega" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["bairroEntrega"]))}/>
                <TextField disabled className="rua_entrega" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["ruaEntrega"]))}/>
                <TextField disabled className="numero_entrega" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={(String(driversResponse["numeroEntrega"]))}/>


                <hr className="hr"></hr>
                <h2 className="subtitle">Cliente</h2>
                <div fullWidth>
                <TextField disabled className="nomeDoCLiente_textFields" id="nomeDoCLiente" label="Nome"
                  variant="outlined" margin="dense" value={(String(driversResponse["nomeCliente"]))} />
                </div>
                <TextField disabled className="cnpjDoCLiente_textFields" id="cnpjDoCLiente" label="CNPJ"
                  variant="outlined" margin="dense" value={(String(driversResponse["cnpjCliente"]))} />            
                <TextField disabled className="telefoneDoCLiente_textFields" id="telefoneDoCLiente" label="Telefone"
                  variant="outlined" margin="dense" value={(String(driversResponse["telefoneCliente"]))}/>
                <TextField disabled className="emailDoCLiente_textFields" id="emailDoCLiente" label="Email"
                  variant="outlined" margin="dense" value={(String(driversResponse["emailCliente"]))}/>
                <Button className="editButton"> <BsFillPencilFill/> Editar</Button> 
                <Button className="deleteButton" onClick={deletarColeta}>  <BsFillTrashFill/> Excluir</Button> 
                <Button className="imprimirButton">  <BsFileEarmarkPdf/> PDF</Button> 
                
          </TabPanel>
        </Tabs>
  
        </form>
        </Container> 

 
        </>

  );

}

export default App;

