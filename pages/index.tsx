import React from "react";
import NavBar from "../components/NavBar";
import { CssBaseline } from "@material-ui/core";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SectionLayout from "../components/layout/SectionLayout";
import WhoWeAre from "../components/whoWeAre";
import Team from "../components/Team";
import "fontsource-roboto";
import Hardware from "../components/Hardware";
import Contact from "../components/Contact";

const Home = () => {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
  esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar title="Oraltec" />
      <Hero />
      <SectionLayout
        title="Qui Sommes-nous ?"
        sections={<WhoWeAre />}
        backgroundColor="#ffffff"
      />
      <SectionLayout
        title="L'équipe"
        sections={<Team />}
        backgroundColor="#f5f5f5"
      />
      <SectionLayout
        title="Service"
        sections={<Services />}
        content={content}
        backgroundColor="#ffffff"
      />
      <SectionLayout
        title="équipement"
        sections={<Hardware />}
        backgroundColor="#f5f5f5"
      />
      <SectionLayout
        title="contact"
        sections={<Contact />}
        backgroundColor="#ffffff"
      />
    </React.Fragment>
  );
};

export default Home;
