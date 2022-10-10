import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverRegisterForm from "../../Components/DriverRegisterForm/driverRegisterForm";
//import Mapa from "../../Components/Mapa/mapa";
//import ProfileCard from "../../Components/ProfileCard/profileCard";
import "./profile.css"
import 'react-pro-sidebar/dist/css/styles.css';


function App() {


  return(
    <>  
    <MenuLateral/>
    <div className='perfil-container'>

        <div className="driver-form"></div>
        <div className='collect-form'></div>
    </div> 
    </>

  );

}

export default App;

{/* <Tabs>
<TabList>
  <Tab>Dados</Tab>
  <Tab>Ambientes</Tab>
  <Tab>Chamados</Tab>
</TabList>

<TabPanel>
  <h3>Dados</h3>
  <Form>
    <InputForm Width={"300px"} Text="Nome:" placeholder="Nome do Atentende" type="text" value={nmClerks} onChange={e => setNmClerks(e.target.value)} />
    <InputForm Width={"300px"} Text="Senha:" placeholder="Senha do Atentende" type="password" value={passClerks} onChange={e => setPassClerks(e.target.value)} />
  </Form>
  <hr/>
  <h3>Configurações</h3>
  <Form>
    <SelectForm Type="AI" Width={"250px"} Text="Situação:" onChange={e => setSituationClerks(e.target.value)}/>
    <SelectForm Type="SN" Width={"250px"} Text="Permite Abertura de Conta:" onChange={e=> setAccountStatus(e.target.value)} />
    <SelectForm Type="SN" Width={"250px"} Text="Permite Baixar Pedidos Web:" onChange={e=> setWebOrders(e.target.value)}/>
    <SelectForm Type="SN" Width={"250px"} Text="Exibe Câmera no Aplicativo:" onChange={e=> setAppCam(e.target.value)}/>
    <SelectForm Type="SN" Width={"250px"} Text="Notificações Chamada:" onChange={e=> setNotifCall(e.target.value)}/>
  </Form>
</TabPanel>

<TabPanel>
  <h3>Ambientes</h3>
  <Form>
      {/*  Busca e cadastro de ambientes */}
//   </Form>
// </TabPanel>
// <TabPanel>
//   <h2>Chamadas</h2>
//   <Form>
//     {/* Consulta de chamadas */}
//   </Form>
// </TabPanel>
// </Tabs> */}