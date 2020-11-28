import React from "react";
import NavBar from "../components/NavBar";
import { CssBaseline } from "@material-ui/core";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  const sections = [
    { title: "Accueil", url: "#" },
    { title: "Le Laboratoire", url: "#" },
    { title: "Contact", url: "#" },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar title="OralTec" sections={sections} />
      <Hero />
      <Services />
    </React.Fragment>
  );
};

export default Home;
