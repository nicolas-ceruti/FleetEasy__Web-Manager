import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverCard from "../../Components/DriverCard/driverCard";
import 'react-pro-sidebar/dist/css/styles.css';

function App() {

  return(
    <>
    <MenuLateral/>
    <DriverCard/>
    </>
  ); 
}

export default App;