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

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar title="Oraltec" />
      <Hero />
      <SectionLayout
        title="Qui Sommes-nous ?"
        sections={<WhoWeAre />}
        backgroundColor="#ffffff"
        id="who"
      />
      <SectionLayout
        title="L'équipe"
        sections={<Team />}
        backgroundColor="#f5f5f5"
        id="team"
      />
      <SectionLayout
        title="Service"
        sections={<Services />}
        backgroundColor="#ffffff"
        id="service"
      />
      <SectionLayout
        title="équipement"
        sections={<Hardware />}
        backgroundColor="#f5f5f5"
        id="equipement"
      />
      <SectionLayout
        title="contact"
        sections={<Contact />}
        backgroundColor="#ffffff"
        id="contact"
      />
    </React.Fragment>
  );
};

export default Home;
