import React, {useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import ButtonBack from "../../Components/ButtonBack/buttonBack";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Container, TextField, Checkbox, FormControlLabel} from "@material-ui/core";

import "./collectProfile.css"

function App() {

    const [motorista, setMotorista] = useState('');
    const [veiculo, setVeiculo] = useState('');

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
    const [pesoColeta, setPesoColeta] = useState();
    const [volumeColeta, setVolumeColeta] = useState();
    const [valorColeta, setValorColeta] = useState();

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;

  return(
    <>  
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Coleta<hr style={{"width" : "35%"}}></hr></h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
    
        <Tabs>
          <TabList>
            <Tab>Dados</Tab>
            
          </TabList>

          <TabPanel>
  
          <TextField className="motorista" id="motorista" label="Motorista" 
                variant="outlined" margin="dense" value={motorista}/> 
                <TextField className="veiculo" id="veiculo" label="Veículo" 
                variant="outlined" margin="dense" value={veiculo} />
                <TextField className="nomeDoCliente" id="cliente" label="Cliente" 
                variant="outlined" margin="dense" value={nomeCliente} />  
                <div style={{"width" : "100%"}}/>  
                <TextField className="peso" id="peso" label="Peso da Carga" 
                variant="outlined" margin="dense" value={pesoColeta} />  
                <TextField className="volume" id="volume" label="Volume da Carga" 
                variant="outlined" margin="dense" value={volumeColeta} />  
                <TextField className="valor" id="valor" label="Valor da Carga" 
                variant="outlined" margin="dense" value={valorColeta} />  

                <h2 className="subtitle">Coleta</h2>
                <TextField className="data_coleta" id="data" label="Data de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="hora_coleta" id="data" label="Hora de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_coleta" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="cidade_coleta" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="bairro_coleta" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="rua_coleta" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="numero_coleta" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>

                <h2 className="subtitle">Entrega</h2>
                <TextField className="data_entrega" id="data" label="Data de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="hora_entrega" id="data" label="Hora de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_entrega" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="cidade_entrega" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="bairro_entrega" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="rua_entrega" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="numero_entrega" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>

          </TabPanel>
        </Tabs>
  
        </form>
        </Container> 

 
        </>

  );

}

export default App;

