import React, {useState, useEffect} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectCard from "../../Components/CollectCard/collectCard";
import Chat from "../../Components/ChatBot/chat.js";
import Mapa from "../../Components/Mapa/mapa";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { GraphContainer, GraphTitle} from "./profilee.js";
import { Chart } from 'react-google-charts';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'react-pro-sidebar/dist/css/styles.css';

import { Container, TextField, Checkbox, FormControlLabel, Button} from "@material-ui/core";

import {BsPinMap} from "react-icons/bs";
import { BsFillPencilFill, BsFillTrashFill, BsFileEarmarkPdf } from "react-icons/bs";
import { Form, ContainerForm} from "./profilee.js";
import "./profile.css"
import ButtonBack from '../../Components/ButtonBack/buttonBack';

function App() {

  
  const [nomeCompleto, setNomecompleto] = useState("");
  const [cnh, setCnh] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [textview, setTextview] = useState("disabled");
  const [driversResponse, setDriversResponse] =  useState([])
  const [locationResponse, setLocationResponse] =  useState([])
  const [collectResponse, setCollectResponse] =  useState([])
  
  const [lat, setLat] = useState(-26.82541425863236);
  const [long, setLong] = useState(-49.2724817183922);
  
  const [position, setPosition] = useState([-26.82541425863236, -49.2724817183922] )

  const params = useParams();
  const paramsId = parseInt(params["id"]);

  const SalesMonthdata = [
    ["Meses", "Faturamento(R$)"],
    ["Janeiro", 1170],
    ["Fevereiro", 1160],
    ["Março", 1030],
    ["Abril", 1970],
    ["Maio", 660],
    ["Junho", 1130],
    ["Julho", 2170],
    ["Agosto", 960],
    ["Setembro", 930],
    ["Outubro", 1070],
    ["Novembro", 1560],
    ["Dezembro", 1930],
  ];
  
   const SalesMonthoptions = {
    chart: {
      title: "",
      subtitle: "",
    },
    };

    const deletarMotorista = (e) => {
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


    var URL = "/motorista_profile/" + paramsId
    useEffect(() => {
      api
      .get(URL)
      .then((response) =>  setDriversResponse(response.data))
      .catch(error => toast.error("ops! aaa ocorreu um erro" + error));
      }, []);

    var URLcoleta = "/getColetas_idMotorista/"  + paramsId     //COLETAS PELO ID
    useEffect(() => {
      api
      .get(URLcoleta)
      .then((response) =>  setCollectResponse(response.data))
      .catch(error => toast.error("ops! ocorreu um erro" + error));
      }, []);

    useEffect(() => {
      var URLlocation = "/motorista_location/"  + paramsId     //Localização
        api
        .get(URLlocation)
        .then((response) =>  setLocationResponse(response.data))
        .catch(error => toast.error("ops! ocorreu um erro" + error));  
        
        setLat(parseFloat(locationResponse["latitude"]))
        setLong(parseFloat(locationResponse["longitude"]))}, []);

        position[0] = (parseFloat(locationResponse["latitude"]))
        position[1] = (parseFloat(locationResponse["longitude"]))
        console.log(locationResponse)
        // setInterval(updateLocation(), 20000);

        function listarColetas(){
          if (collectResponse)
            return(
              Array.from(collectResponse).map(coleta =>(
                <CollectCard nomeCliente={coleta.nomeCliente} emailCliente={coleta.emailCliente} idColeta={coleta.idRegistroColeta}/>
              )))
          else
            console.log(collectResponse)
        }

    



    var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  return(
    <>  
    <Chat/>
    <ToastContainer/>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Perfil do Motorista</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
    <ContainerForm>
        <Tabs>
          <TabList   style={{"width" : "98%"}}>
            <Tab>Dados</Tab>
            <Tab>Coletas</Tab>
            <Tab>Localização</Tab>
            <Tab>Estatísitcas</Tab>
          </TabList>

          <TabPanel>
  
          <TextField
          disabled
          className="nomeCompleto_textField"
          icon={<BsPinMap />}
          id="nomeCompleto"
          label="Nome Completo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["nomeCompleto"]))}
          onChange={(event) => {setNomecompleto(event.target.value)}}
        />
        <TextField
          disabled
          className="veiculo_textField"
          id="veiculo"
          label="Veículo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["veiculo"]))}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          disabled
          className="CNH_textField"
          id="cnh"
          label="CNH"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["cnh"]))}
          onChange={(event) => {setCnh(event.target.value)}}
        />
        <TextField
          disabled
          className="cpf_textField"
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["cpf"]))}
          onChange={(event) => {setCpf(event.target.value)}}
        />
        <TextField
          disabled
          className="rg_textField"
          id="rg"
          label="RG"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["rg"]))}
          onChange={(event) => {setRg(event.target.value)}}
        />
        <TextField
          disabled
          className="senha_textField"
          id="senha"
          label="Senha do Usuário"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["senha"]))}
          onChange={(event) => {setSenha(event.target.value)}}
        />
        <TextField
          disabled
          className="telefone_textField"
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["telefone"]))}
          onChange={(event) => {setTelefone(event.target.value)}}
        />
        <TextField
          disabled
          className="email_textField"
          id="email"
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={(String(driversResponse["email"]))}
          onChange={(event) => {setEmail(event.target.value)}}
        />   

        <Button className="editButton"> Editar</Button> 
        <Button className="deleteButton" onClick={deletarMotorista}>  <BsFillTrashFill/> Excluir</Button> 
        <Button className="imprimirButton">  <BsFileEarmarkPdf/> PDF</Button>   
          </TabPanel>

          <TabPanel>
            <Form>
            {listarColetas()}
            
            </Form>
          </TabPanel>

          <TabPanel>
            <Form>
            <div className='entradas'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
              <Popup>{(String(driversResponse["nomeCompleto"]))}</Popup></Marker> 
              
            </MapContainer>
            </div>
            </Form>
          </TabPanel>

          <TabPanel>
            <Form>
              <GraphContainer>
                <GraphTitle PaddBottom={40} >Faturamento 2022</GraphTitle>
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="250px"
                  data={SalesMonthdata}
                  options={SalesMonthoptions}
                />
              </GraphContainer>
            </Form>
          </TabPanel>

        </Tabs>
        </ContainerForm>
        </form>
        </Container> 

 
        </>

  );

    }
export default App;

