import React, { useState} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectCard from "../../Components/CollectCard/collectCard";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import {Container} from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { Form } from 'react-router-dom';

function App() {
  

  return(
    <>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Coletas<hr></hr></h1>

        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
   
      {/* {drivers.map((user) => (
        <DriverCard name={user}/>
      ))} */}
    <CollectCard/>

    </form>
    </Container>
    

    </>
  ); 
}

export default App;