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
import "./driverCard.css";


function DriverCard(props) {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  
  return (

      <div className="div-card">
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" className="typolography" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {props.id}, {props.situacao} no Momento
        </Typography>
      </CardContent>
      <CardActions>
      <Button className="whatsapp-button" size="small" onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=554788220837&text=----------Itracker----------' + props.nome)}> WhatsApp</Button>
      
      <Link to="/profile/:id"><Button size="small" className="details-button" >Detalhes</Button></Link>
      </CardActions>
    </Card>
    </div>

  );
}

export default DriverCard;