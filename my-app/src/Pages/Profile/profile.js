import React, {useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectCard from "../../Components/CollectCard/collectCard";

import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import {BsPinMap} from "react-icons/bs";

import { Form, ContainerForm} from "./profilee.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Mapa from "../../Components/Mapa/mapa";
//import ProfileCard from "../../Components/ProfileCard/profileCard";
import "./profile.css"

function App() {

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

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  return(
    <>  
    <MenuLateral/>

    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Perfil do Motorista<hr style={{"width" : "35%"}}></hr></h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
    <ContainerForm>
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
            <Tab>Coletas</Tab>
            <Tab>Localização</Tab>
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
            <CollectCard/>
            </Form>
          </TabPanel>
          <TabPanel>
            <Form>
              <div className='map-container'>
                <Mapa/>
              
              </div>
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

