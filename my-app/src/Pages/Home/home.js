import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import Dashboard from "../../Components/DashBoard/dashboard.js";
import DriverRegisterForm from "../../Components/DriverRegisterForm/driverRegisterForm";
//import Mapa from "../../Components/Mapa/mapa";
//import ProfileCard from "../../Components/ProfileCard/profileCard";
import 'react-pro-sidebar/dist/css/styles.css';
import './home.css';

function App() {


  return(
    <>  
    <MenuLateral/> 
    <Dashboard/>
    </>

  );

}

export default App;