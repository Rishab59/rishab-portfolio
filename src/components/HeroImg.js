import "./HeroImgStyles.css" ;

import React, { useEffect, useMemo, useState } from "react" ;
import { Link, NavLink } from "react-router-dom" ;

import HeroBg from "../assets/herobg.png" ;
import RishabImg from "../assets/RishabImage.png" ;


const HeroImg = () => {
  const phrases = useMemo(() => [
    "Web Developer",
    "Native Developer",
    "Full Stack Developer",
    "React Enthusiast",
    "Passionate Coder",
    "I'm interested in Java",
    "I'm interested in Django",
  ], [] ) ;

  const [ phraseIndex, setPhraseIndex ] = useState(0) ;
  const [ text, setText ] = useState('') ;
  const [ isDeleting, setIsDeleting ] = useState(false) ;
  const typingSpeed = 100 ;
  const delayAfterTyping = 1000 ;

  useEffect( () => {
    const type = () => {
      const fullText = phrases[ phraseIndex % phrases.length ] ;
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      ) ;

      if( !isDeleting && text === fullText ){
        setTimeout(() => setIsDeleting(true), delayAfterTyping) ;
      } 
      else if( isDeleting && text === '' ){
        setIsDeleting( false ) ;
        setPhraseIndex(( prevIndex ) => ( prevIndex + 1 ) % phrases.length) ;
      }
    } ;

    const timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed) ;

    return() => clearTimeout(timeout) ;
  }, [ text, phraseIndex, phrases, isDeleting, typingSpeed, delayAfterTyping ] ) ;

  return(
    <div className = "hero" >
      <div className = "mask" >
        <img className = "intro-img" src = { HeroBg } alt = "HeroBg" />
      </div>

      <div className = "content" >
        <div className = "Rishab-img-container" >
          <NavLink to = "https://www.linkedin.com/in/hrishab59/" target = "_blank">
            <img className = "Rishab-img" src = { RishabImg } alt = "RishabImage" />
          </NavLink>
        </div>

        <h1>
          Hi ! , I'm&nbsp;
          <NavLink to = "https://www.linkedin.com/in/hrishab59/" target = "_blank" className = "links" >
            Rishab.H
          </NavLink>
        </h1>

        <p style = {{ height: "10px" }} >
          { text }
        </p>

        <div className = "Link-btns" >
          <Link to = "/projects" className = "btn" >Projects</Link>
          <Link to = "/contact" className = "btn btn-light" >Contact</Link>
        </div>
      </div>
    </div>
  ) ;
}


export default HeroImg ;
