import React, { useState, useEffect } from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverCard from "../../Components/DriverCard/driverCard";
import Chat from "../../Components/ChatBot/chat.js";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import {Container} from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { Form } from 'react-router-dom';
import api from "../../services/api";
import { ToastContainer, toast, Flip } from 'react-toastify';
import { AiFillPropertySafety } from 'react-icons/ai';

function App() {

  const [driversResponse, setDriversResponse] =  useState([])
  const [driversList, setDriverList] =  useState([])

  useEffect(() => {
    api
    .get("/getMotoristas")
    .then((response) =>  setDriversResponse(response.data))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
    }, []);

    const result  = Array.from(driversResponse).map(motor =>(
      <DriverCard name={motor.nomeCompleto} id={motor.idMotorista} idURL={motor.idMotorista}  nomeCompleto={motor.nomeCompleto}  telefone={motor.telefone} />
    ))
    
  return(
    <>
    <Chat/>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Motoristas</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
        }}>

        {result}

    <ToastContainer/>
    </form>
    </Container>
    

    </>
  ); 
}

export default App;