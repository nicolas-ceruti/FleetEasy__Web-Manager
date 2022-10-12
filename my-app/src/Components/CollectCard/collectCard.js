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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Container, Button, TextField, Checkbox, FormControlLabel} from "@material-ui/core";
import "./collectCard.css"

function CollectCard(props) {

    const [motorista, setMotorista] = useState('');
    const [veiculo, setVeiculo] = useState('');

    const [dataColeta, setDataColeta] = useState();
    const [horaColeta, setHoraColeta] = useState();
    const [estadoColeta, setEstadoColeta] = useState();
    const [cidadeColeta, setCidadeColeta] = useState();
    const [bairroColeta, setBairroColeta] = useState();
    const [ruaColeta, setRuaColeta] = useState();
    const [numeroColeta, setNumeroColeta] = useState();

    const [dataEntrega, setDataEntrega] = useState();
    const [horaEntrega, setHoraEntrega] = useState();
    const [estadoEntrega, setEstadoEntrega] = useState();
    const [cidadeEntrega, setCidadeEntrega] = useState();
    const [bairroEntrega, setBairroEntrega] = useState();
    const [ruaEntrega, setRuaEntrega] = useState();
    const [numeroEntrega, setNumeroEntrega] = useState();

    const [nomeCliente, setNomeCliente] = useState();
    const [pesoColeta, setPesoColeta] = useState();
    const [volumeColeta, setVolumeColeta] = useState();
    const [valorColeta, setValorColeta] = useState();


    const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
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
            title={props.cliente}
            subheader={props.dataInicio + " - " + props.horaInicio}
        />
        <CardActions disableSpacing>

            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>

            <TextField className="motorista_textFields" id="motorista" label="Motorista" 
                variant="outlined" margin="dense" value={props.cliente}/> 
                <TextField className="veiculo_textFields" id="veiculo" label="Veículo" 
                variant="outlined" margin="dense" value={veiculo} />
                <TextField className="nomeDoCliente_textFields" id="cliente" label="Cliente" 
                variant="outlined" margin="dense" value={nomeCliente} />  
                <div style={{"width" : "100%"}}/>  
                <TextField className="peso_textFields" id="peso" label="Peso da Carga" 
                variant="outlined" margin="dense" value={pesoColeta} />  
                <TextField className="volume_textFields" id="volume" label="Volume da Carga" 
                variant="outlined" margin="dense" value={volumeColeta} />  
                <TextField className="valor_textFields" id="valor" label="Valor da Carga" 
                variant="outlined" margin="dense" value={valorColeta} />  

                <h2 className="subtitle">Coleta</h2>
                <TextField className="data_coleta_textFields" id="data" label="Data de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="hora_coleta_textFields" id="data" label="Hora de Coleta" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_coleta_textFields" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="cidade_coleta_textFields" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="bairro_coleta_textFields" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="rua_coleta_textFields" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="numero_coleta_textFields" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>

                <h2 className="subtitle">Entrega</h2>
                <TextField className="data_entrega_textFields" id="data" label="Data de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="hora_entrega_textFields" id="data" label="Hora de Entrega" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <div style={{"width" : "100%"}}/>  
                <TextField className="estado_entrega_textFields" id="data" label="Estado" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="cidade_entrega_textFields" id="data" label="Cidade" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="bairro_entrega_textFields" id="data" label="Bairro" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="rua_entrega_textFields" id="data" label="Rua" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>
                <TextField className="numero_entrega_textFields" id="data" label="Número" placeholder="dd/mm/aaaa"
                variant="outlined" margin="dense" value={dataColeta}/>

            <Typography>
                
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    );
    
}

export default CollectCard;