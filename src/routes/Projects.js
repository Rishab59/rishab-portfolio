import React from "react" ;

import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;

import HeroImg2 from '../components/HeroImg2' ;
import Work from '../components/Work' ;


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 header = "Projects." subcontent = "Here are the projects that I've made so far." />
      <Work />
      <Footer />
    </div>
  )
}


export default Projects ;
