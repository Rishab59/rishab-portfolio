import "./AboutContentStyles.css" ;

import React from 'react' ;
import { Link } from "react-router-dom" ;
import { FaStar } from "react-icons/fa" ;

import RishabImage from "../assets/RishabImage.png" ;
import RishabImgBackground from "../assets/RishabImgBackground.jpg" ;


const AboutContent = () => {
  return (
    <div className = "about">
        <div className = "top-row">
            <div className = "left">
                <h1>Who am I ?</h1>
                <p>
                    I'm Rishab.H, current pursing my BE-CSE degree.
                    <br />
                    I'm passionate about learning and implementing projects related to Web Development.
                </p>
                <div>
                    <Link to = "/contact">
                        <button className = "btn">Contact</button>
                    </Link>
                </div>
            </div>

            <div className = "right">
                <div className = "img-container">
                    <div className = "img-stack top">
                        <img src = { RishabImage } className = "img" alt = "RishabImage" />
                    </div>

                    <div className = "img-stack bottom">
                        <img src = { RishabImgBackground } className = "img" alt = "RishabImageBackground" />
                    </div>
                </div>
            </div>
        </div>

        <div className = "bottom-row">
            <div className = "skills">
                <h1>
                    <span className = "dash">-</span>
                    SKILLS
                    <span className = "dash">-</span>
                </h1>
                
                <div className = "skills-left">
                    <div className = "skills-left-p">
                        <p>
                            HTML
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            CSS
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            JavaScript
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            React JS
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            Django
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                    </div>
                </div>

                <div className = "skills-right">
                    <div className = "skills-right-p">
                        <p>
                            Java
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            C++
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            C
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            Python
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>
                        <p>
                            C#
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaStar style = {{ color: "gold" }}/>
                            <FaStar style = {{ color: "gold" }}/>
                        </p>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AboutContent ;
