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
import "./driverCard.css"

function DriverCard() {
  const [nomeCompleto, setNomecompleto] = useState('');

  const [volumeError, setVolumeError] = useState(false);
 

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;
  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Cadastro de Coletas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
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
          João
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ativo no Momento
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">WhatsApp</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
    </div>
    </form>
    </Container>
  );
}

export default DriverCard;