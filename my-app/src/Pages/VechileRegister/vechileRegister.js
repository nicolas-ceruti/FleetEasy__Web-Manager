import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import Chat from "../../Components/ChatBot/chat.js";
import VechileRegisterForm from "../../Components/VechileRegisterForm/vechileRegisterForm";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <Chat/>
    <MenuLateral/>
    <ButtonBack/>
    <VechileRegisterForm/>
    </>
  );
}

export default App;