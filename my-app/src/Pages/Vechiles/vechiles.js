import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import VechileCard from "../../Components/VechileCard/vechileCard";
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
  
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Veículos<hr style={{"width" : "20%"}}></hr></h1>

        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
   
      {/* {drivers.map((user) => (
        <DriverCard name={user}/>
      ))} */}
    <VechileCard/>
    <VechileCard/>
    <VechileCard />
    <VechileCard />
    <VechileCard />
    <VechileCard />
    <VechileCard />
    </form>
    </Container>
    

    </>
  ); 
}

export default App;