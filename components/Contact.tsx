import { faAt, faClock, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import Map from "./layout/MapLayout";

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        display: "block",
        marginBottom: theme.spacing(5),
    },
    img: {
        objectFit: "contain",
        width: "100%",
    },
    content: {
        paddingTop: "1em",
        paddingBottom: "1em"
    },
    primary: {
        color: "#DB8024",
        textTransform: "uppercase",
        fontFamily: "Montserrat",
        fontWeight: "bold"
    },
    secondary: {
        color: theme.palette.secondary.main,
    }
}));

const Contact: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container direction="row" spacing={10}>
                <Grid item md={6} xs={12}>
                    <Map />
                </Grid>
                <Grid item md={6} xs={12}>
                    <List>
                        <ListItem divider className={classes.content}>
                            <ListItemIcon><FontAwesomeIcon icon={faClock} /></ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary, secondary: classes.secondary }} primary="Horaires" secondary="Le laboratoire est ouvert du lundi au vendredi de 8h30 à 12h30 et de 14h à 18h" />
                        </ListItem>
                        <ListItem divider className={classes.content}>
                            <ListItemIcon><FontAwesomeIcon icon={faMap} /></ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary, secondary: classes.secondary }} primary="Adresse" secondary={"1 Rue d'Anjou 35140 SAINT-AUBIN-DU-CORMIER"} />
                        </ListItem>
                        <ListItem divider className={classes.content}>
                            <ListItemIcon><FontAwesomeIcon icon={faPhone} /></ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary, secondary: classes.secondary }} primary="Téléphone" secondary="02 99 39 72 52" />
                        </ListItem>
                        <ListItem className={classes.content}>
                            <ListItemIcon><FontAwesomeIcon icon={faAt} /></ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary, secondary: classes.secondary }} primary="Mail" secondary="contact@oraltec.fr" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact