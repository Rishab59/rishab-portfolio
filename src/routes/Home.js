import React from "react" ;

import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;

import HeroImg from "../components/HeroImg" ;
import WorkHome from "../components/WorkHome" ;


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkHome />
      <Footer />
    </div>
  ) ;
}


export default Home ;
