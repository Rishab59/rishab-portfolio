import "./NavbarStyles.css" ;

import React, { useState } from "react" ;
import { Link } from "react-router-dom" ;

import { FaTimes, FaBars } from "react-icons/fa" ;


const NavBar = () => {
  const [ click, setClick ] = useState(false) ;
  const handleClick = () => setClick(!click) ;

  const [ navbgcolor, setNavBgColor ] = useState(false) ;

  const changeNavBgColor = () => {
    if( window.scrollY >= 100 ){
      setNavBgColor(true) ;
    }
    else{
      setNavBgColor(false) ;
    }
  }

  window.addEventListener("scroll", changeNavBgColor) ;

  
  return (
    <div className = { navbgcolor ? "header header-bg" : "header" } >
      <Link to = "/">
        <h1>Rishab Portfolio</h1>
      </Link>

      <ul className = { click ? "nav-menu active" : "nav-menu" } >
        <li>
          <Link to = "/" className = "links" >
            Home
          </Link>
        </li>
        <li>
          <Link to = "/projects" className = "links" >
            Projects
          </Link>
        </li>
        <li>
          <Link to = "/about" className = "links" >
            About
          </Link>
        </li>
        <li>
          <Link to = "/contact" className = "links contact" >
            Contact
          </Link>
        </li>
      </ul>

      <div className = "hamburger" onClick = { handleClick } >
        { click ? (
          <FaTimes size = { 20 } style = {{ color: "#fff" }} />
        ) : (
          <FaBars size = { 20 } style = {{ color: "#fff" }} />
        ) }
      </div>
    </div>
  ) ;
}


export default NavBar ;
