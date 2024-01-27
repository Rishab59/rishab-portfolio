import "./HeroImg2Styles.css" ;

import React, { Component } from "react" ;

import HeroBg2 from "../assets/herobg2.jpg" ;


class HeroImg2 extends Component {
    render(){
        return(
            <div className = "hero-img" >
                <div className = "mask" >
                    <img className = "hero-img-2" src = { HeroBg2 } alt = "HeroBg2" />
                </div>

                <div className = "heading" >
                    <h1>{this.props.header}</h1>
                    <p>{this.props.subcontent}</p>
                </div>
            </div>
        ) ;
    }
} ;


export default HeroImg2 ;
