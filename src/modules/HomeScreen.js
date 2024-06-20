import React from "react";
import Header from "../includes/Header";
import SpotLight from "./SpotLight";
import WhoAreWe from "./WhoAreWe";
import Services from "./Services";
import OurTeam from "./OurTeam";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <div className="flex">
      <Header />
      <div className="w-full overflow-x-scroll pl-20">
        <SpotLight />
        <WhoAreWe />
        <Services />
        <OurTeam />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
