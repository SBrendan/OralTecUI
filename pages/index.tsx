import React from "react";
import Header from "../components/navbar/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const sections = [
    { title: "Accueil", url: "#" },
    { title: "Le Laboratoire", url: "#" },
    { title: "Contact", url: "#" },
  ];

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="OralTec" sections={sections} />
    </React.Fragment>
  );
};

export default Home;
