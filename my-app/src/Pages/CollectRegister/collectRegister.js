import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectRegisterForm from "../../Components/CollectRegisterForm/collectRegisterForm";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <CollectRegisterForm/>
    </>
  ); 
}

export default App;