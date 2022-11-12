import React, {useState, useEffect} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectCard from "../../Components/CollectCard/collectCard";
import Mapa from "../../Components/Mapa/mapa";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { GraphContainer, GraphTitle} from "./profilee.js";
import { Chart } from 'react-google-charts';

import { Container, TextField, Checkbox, FormControlLabel} from "@material-ui/core";

import {BsPinMap} from "react-icons/bs";

import { Form, ContainerForm} from "./profilee.js";
import "./profile.css"
import ButtonBack from '../../Components/ButtonBack/buttonBack';

function App() {

  const [nomeCompleto, setNomecompleto] = useState('');
  const [cnh, setCnh] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState();
  const [veiculo, setVeiculo] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [driversResponse, setDriversResponse] =  useState([])

  const params = useParams();

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

  var URL = "/motorista_profile/" + params["id"]
  useEffect(() => {
    api
    .get(URL)
    .then((response) =>  setDriversResponse(response.data))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
    }, []);

    // const result  = Array.from(driversResponse).map(motor =>(
    //   <DriverCard name={motor.nomeCompleto}/>
    // ))

  console.log(driversResponse[0]["cnh"]);

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  return(
    <>  
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Perfil do Motorista<hr style={{"width" : "30%"}}></hr></h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
    <ContainerForm>
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
            <Tab>Coletas</Tab>
            <Tab>Localização</Tab>
            <Tab>Estatísitcas</Tab>
          </TabList>

          <TabPanel>
  
          <TextField
          className="nomeCompleto_textField"
          icon={<BsPinMap />}
          id="nomeCompleto"
          label="Nome Completo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nomeCompleto}
          onChange={(event) => {setNomecompleto(event.target.value)}}
        />
        <TextField
          className="veiculo_textField"
          id="veiculo"
          label="Veículo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="CNH_textField"
          id="cnh"
          label="CNH"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cnh}
          onChange={(event) => {setCnh(event.target.value)}}
        />
        <TextField
          className="cpf_textField"
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) => {setCpf(event.target.value)}}
        />
        <TextField
          className="rg_textField"
          id="rg"
          label="RG"
          variant="outlined"
          margin="dense"
          fullWidth
          value={rg}
          onChange={(event) => {setRg(event.target.value)}}
        />
        <TextField
          className="senha_textField"
          id="senha"
          label="Senha do Usuário"
          variant="outlined"
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => {setSenha(event.target.value)}}
        />
        <TextField
          className="telefone_textField"
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => {setTelefone(event.target.value)}}
        />
        <TextField
          className="email_textField"
          id="email"
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />     
          </TabPanel>

          <TabPanel>
            <Form>
            <CollectCard cliente="CEDUP" dataInicio="11/10/2022" horaInicio="17:30"/>
            <CollectCard cliente="CEDUP" dataInicio="11/10/2022" horaInicio="17:30"/>
            <CollectCard cliente="CEDUP" dataInicio="11/10/2022" horaInicio="17:30"/>
            <CollectCard cliente="CEDUP" dataInicio="11/10/2022" horaInicio="17:30"/>
            </Form>
          </TabPanel>

          <TabPanel>
            <Form>
              <div className='map-container'>
                <Mapa/>
              </div>
            </Form>
          </TabPanel>

          <TabPanel>
            <Form>
              <GraphContainer>
                <GraphTitle PaddBottom={40}>Faturamento 2022</GraphTitle>
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

