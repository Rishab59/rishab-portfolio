import "./WorkCardStyles.css" ;

import React from "react" ;
import { NavLink } from "react-router-dom" ;


const WorkCard = (props) => {
    const renderButtons = () => {
        if ( !props.liveoutput ) {
            return(
                <div className = "pro-btns" style = {{ left: "36%", width: "48%", transform: "translateX(-15%)" }} >
                    <NavLink to = { props.sourcecode } target = "_blank" className = "btn" >Source Code</NavLink>
                </div>
            ) ;
        } 
        else {
            return(
                <div className = "pro-btns" >
                    <NavLink to = { props.liveoutput } target = "_blank" className = "btn" >Live Output</NavLink>
                    <NavLink to = { props.sourcecode } target = "_blank" className = "btn" >Source Code</NavLink>
                </div>
            ) ;
        }
    } ;

    return (
        <div className = { `project-card ${ props.lang }` } >
            <img src = { props.imgsrc } alt = "project-title-card" />
            
            <h2 className = "project-title" >
                { props.title }
            </h2>
            
            <div className = "pro-details" >
                <p>{ props.content }</p>
                
                { renderButtons() }
            </div>
        </div>
    ) ;
}


export default WorkCard ;
