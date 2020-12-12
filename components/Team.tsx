import {
    Avatar,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import TitleWithLine from "./layout/TitleWithLine";

const peoples = [
    {
        name: "Laurent Théron",
        id: "1",
        profilePicture: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        jobsCategory: "Chef d'entreprise"
    },
    {
        name: "Medhi Belhadj",
        id: "2",
        profilePicture: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        jobsCategory: "Châssis Métaliques"
    },
    {
        name: "Noémie Remy",
        id: "3",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        jobsCategory: "Apprentie BTMS"
    },
    {
        name: "Lionel Fercoq",
        id: "4",
        profilePicture: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        jobsCategory: "Prothèses Provisoires/Réparation"
    },
    {
        name: "Bélinda Bernard",
        id: "5",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        jobsCategory: "Montages/Gouttières/Polissage"
    },
    {
        name: "Carole Viel",
        id: "6",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        jobsCategory: "Finitions de Cire/Polissage"
    },
    {
        name: "Clotilde Boudet-Costantini",
        id: "7",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        jobsCategory: "PEI/Cire d'occlusion/Finitions de Cire"
    },
    {
        name: "Isabelle ",
        id: "8",
        profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        jobsCategory: "Plâtrière"
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    grid: {
        marginTop: theme.spacing(2),
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: "0.5em",
        textTransform: "uppercase",
        color: theme.palette.secondary.main
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    jobsCategory: {
        color: "#242626"
    }
}));

const Team: React.FC = () =>{
    const classes = useStyles();

    function GenerateCard() {
        return (
            <React.Fragment>
                {peoples.map((people) => {
                    return (
                        <Grid item xs={6} md={3} key={people.id}>
                            <Avatar alt={people.name} src={people.profilePicture} className={classes.avatar} />
                            <Typography align="center" variant="subtitle1" className={classes.name}>{people.name}</Typography>
                            <Typography align="center" variant="subtitle2" className={classes.jobsCategory}>{people.jobsCategory}</Typography>
                        </Grid>
                    );
                })}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Container className={classes.root}>
                <TitleWithLine titleWithLine='"notre équipe"' />
                <Grid container spacing={4} className={classes.grid}>
                    <GenerateCard />
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Team;
