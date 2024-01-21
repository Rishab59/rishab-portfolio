import "./FooterStyles.css" ;

import React from "react" ;
import { NavLink } from "react-router-dom" ;

import { FaHome, FaPhone, FaMailBulk, FaMailchimp, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa" ;
import { FiGithub } from "react-icons/fi" ;
import { SiHackerrank } from "react-icons/si" ;


const Footer = () => {
    return (
        <div className = "footer" >
            <div className = "footer-container" style = {{ marginLeft: ( window.innerWidth <= 640 ) ? '-2rem' : '4rem' }} >
                <div className = "footer-left" >
                    <div className = "location" >
                        <FaHome size = { 23 } style = {{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Chennai, Tamil Nadu</p>
                            <p>India.</p>
                        </div>
                    </div>

                    <div className = "phone" >
                        <h4>
                            <FaPhone size = { 23 } style = {{ color: "#fff", marginRight: "2rem", transform: "scaleX(-1)" }} />
                            +91 7200076122
                        </h4>
                    </div>

                    <div className = "email" >
                        <h4>
                            <FaMailBulk size = { 23 } style = {{ color: "#fff", marginRight: "2rem" }} />
                            <NavLink to = "mailto:hrishab59@gmail.com" className = "links" target = "_blank" >hrishab59@gmail.com</NavLink>
                        </h4>
                    </div>

                    <div className = "email" >
                        <h4>
                            <FaMailchimp size = { 23 } style = {{ color: "#fff", marginRight: "2rem" }} />
                            <NavLink to = "mailto:rishab.h@outlook.com" className = "links" target = "_blank" >rishab.h@outlook.com</NavLink>
                        </h4>
                    </div>
                </div>

                <div className = "footer-right" >
                    <h4>About me</h4>

                    <p className = "content" >
                        I'm&nbsp;
                        <NavLink to = "https://www.linkedin.com/in/rishab-h-656b97224/" target = "_blank" className = "links" >
                            Rishab.H
                        </NavLink>
                        , current pursing my BE-CSE degree in <br /><NavLink to = "https://panimalar.ac.in/" className = "links" target = "_blank" >Panimalar Engineering College</NavLink>, Chennai.
                    </p>
                    <p className = "content" >
                        I'm one of the leads in <NavLink to = "https://codersforum.netlify.app/" className = "links" target = "_blank" >Coders Forum</NavLink>, a technical club in my college.
                    </p>
                    <p className = "content" >
                        I'm passionate about learning and implementing projects related to Web Development.
                    </p>

                    <div className = "social" >
                        <NavLink to = "https://www.linkedin.com/in/rishab-h-656b97224/" target = "_blank" >
                            <FaLinkedin size = { 30 } style = {{ color: "#fff" }} />
                        </NavLink>

                        <NavLink to = "https://www.github.com/Rishab59" target = "_blank" >
                            <FiGithub size = { 30 } style = {{ color: "#fff" }} />
                        </NavLink>

                        <NavLink to = "https://www.hackerrank.com/profile/hrishab59" target = "_blank" >
                            <SiHackerrank size = { 30 } style = {{ color: "#fff" }} />
                        </NavLink>

                        <NavLink to = "https://wa.me/7200076122?text=Hey%20Rishab,%20I'm%20interested%20to%20collaborate%20with%20you." target = "_blank" >
                            <FaWhatsapp size = { 30 } style = {{ color: "#fff" }} />
                        </NavLink>

                        <NavLink to = "https://instagram.com/ris59_2k3?igshid=ZDc4ODBmNjlmNQ==" target = "_blank" >
                            <FaInstagram size = { 30 } style = {{ color: "#fff" }} />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className = "footer-bottom">
                <div className = "info">
                    <p>
                        This site is developed by&nbsp;
                        <NavLink to = "https://www.linkedin.com/in/rishab-h-656b97224/" target = "_blank" className = "links" >
                            Rishab.H
                        </NavLink>
                        &nbsp;using React JS
                    </p>
                </div>
            </div>
        </div>
    ) ;
}


export default Footer ;
