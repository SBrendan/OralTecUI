import { makeStyles, Typography } from "@material-ui/core";
import HeroLayout from "./layout/HeroLayout";
import React from "react";

interface Props {}
const backgroundImage =
  'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80';

function Hero(props: Props) {
  const classes = useStyles();

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography align="center" variant="h1">
        Oraltec
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Laboratoire spécialisé dans la prothése dentaire 'Adjointe'
      </Typography>
    </HeroLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    color: "#132540",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

export default Hero;
