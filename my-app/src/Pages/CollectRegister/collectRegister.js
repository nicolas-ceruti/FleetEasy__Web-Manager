import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectRegisterForm from "../../Components/CollectRegisterForm/collectRegisterForm";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <MenuLateral/>
    <CollectRegisterForm/>
    </>
  ); 
}

export default App;