import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverRegisterForm from "../../Components/DriverRegisterForm/driverRegisterForm";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <DriverRegisterForm/>
    </>
  ); 
}

export default App;