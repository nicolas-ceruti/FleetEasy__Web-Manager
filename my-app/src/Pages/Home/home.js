import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import Dashboard from "../../Components/DashBoard/dashboard.js";
import Chat from "../../Components/ChatBot/chat.js";
import DriverRegisterForm from "../../Components/DriverRegisterForm/driverRegisterForm";
import 'react-pro-sidebar/dist/css/styles.css';
import './home.css';

function App() {


  return(
    <>  
    <Chat/>
    <MenuLateral/> 
    <Dashboard/>
    </>

  );

}

export default App;

