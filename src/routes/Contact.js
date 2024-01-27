import React from "react" ;

import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;

import HeroImg2 from "../components/HeroImg2" ;
import Form from "../components/Form" ;


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 header = "Contact." subcontent = "Feel Free to share your thoughts and suggestion." />
      <Form />
      <Footer />
    </div>
  ) ;
} ;


export default Contact ;
