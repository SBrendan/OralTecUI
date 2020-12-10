import { makeStyles, Typography } from "@material-ui/core";
import HeroLayout from "./layout/HeroLayout";
import React from "react";

interface Props { }
const backgroundImage =
  'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80';

function Hero() {
  const classes = useStyles();

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography align="center" variant="h1" className={classes.h1}>
        ORALTEC
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Laboratoire dentaire spécialisé <br/>en prothèse <span className={classes.adj}>Adjointe</span>
      </Typography>
    </HeroLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#E5EBEE", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h1: {
    letterSpacing: "1.5rem",
    fontSize: "2rem"
  },
  h5: {
    color: "#293842",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3.5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(5),
      fontSize: "3.5rem",
    }
  },
  adj: {
    color: "#db8024"
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

export default Hero;
