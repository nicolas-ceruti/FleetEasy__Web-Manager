import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import VechileRegisterForm from "../../Components/VechileRegisterForm/vechileRegisterForm";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <VechileRegisterForm/>
    </>
  );
}

export default App;