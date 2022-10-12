import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import DriverCard from "../../Components/DriverCard/driverCard";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import {Container} from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { Form } from 'react-router-dom';

function App() {
  
  const drivers = [{
    "nome" : "joão",
    "número" : "99 1254-2466"
  },
  {
    "nome" : "Pedro",
    "número" : "91 7547-5409"
  },
  {
    "nome" : "joão",
    "número" : "89 0457-7890"
  },];

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Motoristas<hr></hr></h1>

        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
   
      {/* {drivers.map((user) => (
        <DriverCard name={user}/>
      ))} */}
    <DriverCard situacao="Inativo" name="Isaak"/>
    <DriverCard situacao="Inativo" name="Nicolas"/>
    <DriverCard situacao="Inativo" name="Eduardo"/>
    <DriverCard situacao="Inativo" name="Thiago"/>
    <DriverCard situacao="Ativo" name="Pereira"/>
    <DriverCard situacao="Ativo" name="Pereira"/>
    <DriverCard situacao="Ativo" name="Gustavo"/>
    <DriverCard situacao="Ativo" name="Airton"/>
    <DriverCard situacao="Inativo" name="André"/>
    </form>
    </Container>
    

    </>
  ); 
}

export default App;