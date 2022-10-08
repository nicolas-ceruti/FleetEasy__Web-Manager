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