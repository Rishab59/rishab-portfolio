import React from "react" ;

import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;

import HeroImg2 from "../components/HeroImg2" ;
import AboutContent from "../components/AboutContent" ;


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 header = "About Me." subcontent = "Here are some info about me and my skills." />
      <AboutContent />
      <Footer />
    </div>
  ) ;
}


export default About ;
