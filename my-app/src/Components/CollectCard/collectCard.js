import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

  import {Link} from "react-router-dom";
import {Container, Button, TextField, Checkbox, FormControlLabel} from "@material-ui/core";
import "./collectCard.css"

function CollectCard(props) {



    const useStyles = makeStyles((theme) => ({
    root: {
        width: "45%",
        height: "100px",
        alignContent: "center",
        display: "inline-block",
        marginLeft: "2%",
        marginRight: "3%",
        marginTop: "5px",
        marginBottom: "20px"

    },
    
    }));

    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    

    return (
        <Card className={classes.root}>
        <CardHeader
            title= {<Typography style={{"fontSize" : "20px"}}>{props.nomeCliente}</Typography>}
            subheader={<Typography>{props.emailCliente}</Typography>}
            
        />
        <Link to={"/collectprofile/" + props.idColeta }><Button size="small" className="goProfile-button"   >Detalhes</Button></Link>
        </Card>
    );
    
}

export default CollectCard;