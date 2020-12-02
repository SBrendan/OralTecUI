import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const services = [
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Barre implanto-portée",
    id: "1",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Prothèses adjointes complète et partielle",
    id: "2",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Gouttières de blanchiment et de surélévation",
    id: "3",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Réparation et adjonction",
    id: "4",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Chassis métallique",
    id: "5",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Porte empreinte individuelle",
    id: "6",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Base d'oclusion",
    id: "7",
    icon: "/static/img/toothcircle.png",
  },
  {
    servicePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    title: "Impression de modèle 3D",
    id: "8",
    icon: "/static/img/toothcircle.png",
  },
];

const Services: React.FC = () => {
  const classes = useStyles();

  function GenerateCard() {
    return (
      <React.Fragment>
        {services.map((service) => {
          return (
            <Grid item xs={3} key={service.id}>
              <Card className={classes.serviceCard}>
                <div className={classes.cardGlobalContent}>
                  <CardMedia
                    className={classes.media}
                    image={service.servicePicture}
                    title={service.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <img src={service.icon} className={classes.icon} />
                    <Typography gutterBottom className={classes.serviceName}>
                      {service.title}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions className={classes.cardActions}>
                  <Button size="small" className={classes.link} color="primary">
                  + d'infos
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4}>
          <GenerateCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  serviceCard: {
    boxShadow: "none",
    height: "95%",
    textAlign: "center",
  },
  cardGlobalContent: {
    height: "80%",
    textAlign: "center",
  },
  media: {
    height: "170px",
  },
  icon: {
    width: "55%",
    marginTop : "-50px",
  },
  cardContent: {
    background: theme.palette.primary.main,
    height: "100%",
    padding:"0px 20px"
  },
  serviceName: {
    fontSize: "1.2em",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    textAlign: "center"
  },
  cardActions: {
    background: theme.palette.primary.main,
    textAlign: "center",
    justifyContent: "center",
    paddingTop: "10px",
  },
  link: {
    fontFamily: "Roboto, sans-serif",
    color: "#db8024",
    textDecoration: "underline",
    textTransform: "lowercase",
    fontSize: "1.2em",
  },
}));

export default Services;
