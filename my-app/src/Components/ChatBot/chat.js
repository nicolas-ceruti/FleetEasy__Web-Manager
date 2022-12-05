import ChatBot from 'react-simple-chatbot';
import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./chat.css"
import { ThemeProvider } from 'styled-components';


function Chat(props) {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const theme = {
    background: '#f5f8fb',
    // fontFamily: 'Helvetica Neue',
    headerBgColor: 'linear-gradient(90deg, rgba(29,97,143,1) 24%, rgba(25,73,106,1) 60%, rgba(17,53,77,1) 100%)',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'rgba(25,73,106,1)',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return(
  <ThemeProvider theme={theme}>
  <div className='chatbot'>
  <ChatBot  
      // width="50px"
      cache="true"
      headerTitle="Eliene"
      floating="true"
      bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
      floatingStyle={{color : "blue", backgroundColor: "rgba(17,53,77,1)"}}
      enableMobileAutoFocus="true"
      steps={[
        {
          id: '1',
          message: 'Olá, sou a Eliene e estarei te ajudando durante sua navegação!',
          trigger: '2',
        },
        {
          id: '2',
          message: 'Como poosso te ajudar?',
          trigger: '3',
        },
        {
          id: '3',
          options: [
            { value: 1, label: 'WhatsApp Suporte', trigger: '4' },
            // { value: 2, label: 'Number 2', trigger: '5' },
            // { value: 3, label: 'Number 3', trigger: '5' },
          ],
        },
        {
          id: '4',
          component: (
             <Button className="wp-button" size="small" onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=554788220837&textOlá' + props.name)}> WhatsApp</Button>
          ),
          asMessage: true,
          trigger: '2',
        },
        {
          id: '5',
          message: 'Awesome! You are a telepath!',
          end: true,
        },
      ]}
    />
    </div>
    </ThemeProvider>


   
)}
export default Chat;