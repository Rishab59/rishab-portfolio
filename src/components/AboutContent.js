import "./AboutContentStyles.css" ;

import React from "react" ;
import { Link } from "react-router-dom" ;
import { FaStar } from "react-icons/fa" ;

import RishabImage from "../assets/RishabImage.png" ;
import RishabImgBackground from "../assets/RishabImgBackground.jpg" ;


const AboutContent = () => {
    const StarGenerator = ({ count }) => {
        return(
            Array.from({ length:  count }, (_, index) => (
                <>
                    <FaStar style = {{ color: "gold" }} />
                    &nbsp;
                </>
            ))
        ) ;
    } ;
    
    const SpaceGenerator = ({ count }) => {
        return(
            Array.from({ length:  count }, (_, index) => (
                <>
                    &nbsp;
                </>
            ))
        ) ;
    } ;


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

            <div className = "second-row">
                <div className = "skills">
                    <h1>
                        <span className = "dash">-</span>
                        SKILLS
                        <span className = "dash">-</span>
                    </h1>

                    <div className = "skills-left">
                        <div className = "skills-heading">
                            <p>Languages :<br /></p>
                        </div>

                        <div className = "skills-left-p">
                            <p>
                                HTML
                                <SpaceGenerator count = { 18 } />
                                <StarGenerator count = { 5 } />
                            </p>
                            <p>
                                CSS
                                <SpaceGenerator count = { 23 } />
                                <StarGenerator count = { 3 } />
                            </p>
                            <p>
                                JavaScript
                                <SpaceGenerator count = { 8 } />
                                <StarGenerator count = { 4 } />
                            </p>
                            <p>
                                Java
                                <SpaceGenerator count = { 21 } />
                                <StarGenerator count = { 4 } />
                            </p>
                            <p>
                                Python
                                <SpaceGenerator count = { 16 } />
                                <StarGenerator count = { 3 } />
                            </p>
                            <p>
                                C++
                                <SpaceGenerator count = { 23 } />
                                <StarGenerator count = { 3 } />
                            </p>
                            <p>
                                C
                                <SpaceGenerator count = { 28 } />
                                <StarGenerator count = { 3 } />
                            </p>
                        </div>
                    </div>

                    <div className = "skills-right">
                        <div className = "skills-heading">
                            <p>Technologies :</p>
                        </div>

                        <div className = "skills-right-p">
                            <p>
                                React JS
                                <SpaceGenerator count = {10} />
                                <StarGenerator count = {3} />
                            </p>
                            <p>
                                Django
                                <SpaceGenerator count = { 13 } />
                                <StarGenerator count = { 3 } />
                            </p>
                            <p>
                                Git &
                                <SpaceGenerator count = { 18 } />
                                <StarGenerator count = { 4 } />
                                <br />
                                GitHub
                            </p>
                            <p>
                                Java Swing
                                <SpaceGenerator count = { 5 } />
                                <StarGenerator count = { 3 } />
                            </p>
                            <p>
                                SQL
                                <SpaceGenerator count = { 20 } />
                                <StarGenerator count = { 2 } />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "third-row">
                <div className = "hobbies">
                    <h1>
                        <span className = "dash">-</span>
                        HOBBIES
                        <span className = "dash">-</span>
                    </h1>
                </div>

                <div className = "hobbies-content">
                    <ul>
                        <li>
                            Creating Personal Projects.
                        </li>
                        <li>
                            Reading Tech related contents.
                        </li>
                        <li>
                            Watching YouTube Tech Playlist.
                        </li>
                        <li>
                            Learning New Technologies.
                        </li>
                        <li>
                            Listening to Music.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) ;
} ;


export default AboutContent ;
