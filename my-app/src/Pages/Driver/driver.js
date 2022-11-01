import React, { useState, useEffect } from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverCard from "../../Components/DriverCard/driverCard";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import {Container} from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { Form } from 'react-router-dom';
import api from "../../services/api";
import { ToastContainer, toast, Flip } from 'react-toastify';

function App() {

  const [driversResponse, setDriversResponse] =  useState([])
  const [driversList, setDriverList] =  useState([])

  useEffect(() => {
    api
    .get("/getMotoristas")
    .then((response) =>  setDriversResponse(response.data))
    .catch(error => console.log("ops! ocorreu um erro" + error));
    }, []);

    const result  = Array.from(driversResponse).map(motor =>(
      <DriverCard name={motor.nomeCompleto}/>
    ))
    
  // useEffect(() => {
  //   api
  //   .get('/getMotoristas')
  //   .then((response) => {
      
  //     setDriversResponse(JSON.parse(response.data))

  //   }, (err) => {
  //     if(err.response.status == 401){
  //       toast.error('Erro, saia e entre novamente no sistema!')
  //     }else{
  //       toast.error('Erro, tente novamente mais tarde!')
  //     }
  //   });
  // }, []); 

  
  
  const drivers = [{
    "id" : 1,
    "nome" : "joão",
    "número" : "99 1254-2466"
  },
  {
    "id" : 2,
    "nome" : "Pedro",
    "número" : "91 7547-5409"
  },
  {
    "id" : 3,
    "nome" : "joão",
    "número" : "89 0457-7890"
  },];

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Motoristas<hr style={{"width" : "18%"}}></hr></h1>

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