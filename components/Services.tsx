import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

interface Props {}

const services = [
  {
    title: "Barre implanto-portée",
    id: "1",
  },
  {
    title: "Prothese adjointe complete",
    id: "2",
  },
  {
    title: "Prothese adjointe partielle",
    id: "3",
  },
  {
    title: "Gouttiere de surélévation",
    id: "4",
  },
  {
    title: "Gouttiere de blanchiment",
    id: "5",
  },
  {
    title: "Réparation & Adjonction",
    id: "6",
  },
  {
    title: "Chassie métalique",
    id: "7",
  },
  {
    title: "Porte empreinte individuelle",
    id: "8",
  },
  {
    title: "Base d'oclusion",
    id: "9",
  },
  {
    title: "Impression de modele 3D",
    id: "10",
  },
];

function Services(props: Props) {
  const classes = useStyles();

  function GenerateCard() {
    return (
      <React.Fragment>
        {services.map((service) => {
          return (
            <Grid item xs={3} key={service.id}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Détails
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
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <GenerateCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default Services;
