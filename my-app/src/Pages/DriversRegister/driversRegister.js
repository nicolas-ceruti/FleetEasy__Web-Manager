import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import Chat from "../../Components/ChatBot/chat.js";
import DriverRegisterForm from "../../Components/DriverRegisterForm/driverRegisterForm";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <Chat/>
    <MenuLateral/>
    <ButtonBack/>
    <DriverRegisterForm/>
    </>
  ); 
}

export default App;