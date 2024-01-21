import "./WorkCardStyles.css" ;

import React from "react" ;

import WorkCard from "./WorkCard" ;
import WorkCardData from "./WorkCardData" ;


const WorkHome = () => {
    return (
        <div className = "work-container" >
            <h1 className = "project-header home-pro-title" >
                <span className = "dash" >-</span>
                Top 3 PROJECTS
                <span className = "dash" >-</span>
            </h1>

            <div className = "project-container" >
                { WorkCardData.slice(0, 3).map((val, ind) => {
                    return(
                        <WorkCard
                            key = { ind }
                            imgsrc = { val.imgsrc }
                            lang = { val.lang }
                            title = { val.title }
                            content = { val.content }
                            liveoutput = { val.liveoutput }
                            sourcecode = { val.sourcecode }
                        />
                    ) ;
                }) }
            </div>
        </div>
    ) ;
}


export default WorkHome ;
