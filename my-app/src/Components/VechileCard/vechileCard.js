import React from 'react';
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



function VechileCard(props) {

    const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "2%",
        marginRight: "2%",
        display: "inline-block",
        width: "45%",
        backgroundColor: "whitesmoke",

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
            title="Nicolas Ceruti"
            subheader="September 14, 2016"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Em Andamento
            </Typography>
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
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Cliente</Typography>
            <Typography paragraph>
                Nome:
                Peso da Carga:
                Volume da Carga:
                Valor da Carga:
            </Typography>
            <Typography paragraph>Coleta</Typography>
            <Typography>Data, Hora, Estado, Cidade, Bairro, Rua, Número</Typography>
            <Typography paragraph>
                Data:
                Hora:
                Estado:
                Cidade:
                Bairro:
                Rua:
                Número:
            </Typography>
            <Typography>
                
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    );
    
}

export default VechileCard;