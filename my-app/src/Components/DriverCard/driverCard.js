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
import {Link} from "react-router-dom"
import "./driverCard.css"

function DriverCard(props) {
  // const [drivers, setDrivers] = useState([{}]);
  const [nomeCompleto, setNomecompleto] = useState('');
  const [volumeError, setVolumeError] = useState(false);
  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;


  return (

      <div className="div-card">
      <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" className="typolography" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.situacao} no Momento
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/home"><Button className="whatsapp-button" size="small"> WhatsApp</Button></Link>
        <Button size="small" className="details-button" >Detalhes</Button>
      </CardActions>
    </Card>
    </div>

  );
}

export default DriverCard;