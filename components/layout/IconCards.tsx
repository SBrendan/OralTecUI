import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingBottom: "30px",
  },
  gridItem: {
    maxWidth: "1080px",
  },
  iconCard: {
    boxShadow: "none",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  icon: {
    maxWidth: "220px",
  },
  cardContent: {
    height: "100%",
    padding: "0px 30px",
  },
  iconCardName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "0.5em",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    color: theme.palette.secondary.main,
  },
}));

const iconInfos = [
  {
    title: "Nous trouver",
    id: "1",
    icon: "/static/img/pincircle.png",
    description: "1 Rue d'Anjou 35140 SAINT-AUBIN-DU-CORMIER",
  },
  {
    title: "Nous contacter",
    id: "2",
    icon: "/static/img/contactcircle.png",
    description: "02 99 39 11 11 oraltec@orange.fr",
  },
  {
    title: "Notre expertise",
    id: "3",
    icon: "/static/img/starcircle.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
];

const IconCards: React.FC = () => {
  const classes = useStyles();

  function GenerateCard(): JSX.Element {
    return (
      <React.Fragment>
        {iconInfos.map((iconInfo) => {
          return (
            <Grid className={classes.gridItem} item xs={3} key={iconInfo.id}>
              <Card className={classes.iconCard}>
                <CardContent className={classes.cardContent}>
                  <img
                    alt={iconInfo.title}
                    src={iconInfo.icon}
                    className={classes.icon}
                  />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.iconCardName}
                  >
                    {iconInfo.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.description}
                  >
                    {iconInfo.description}
                  </Typography>
                </CardContent>
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
        <Grid className={classes.grid} container spacing={4} justify="center">
          <GenerateCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default IconCards;
