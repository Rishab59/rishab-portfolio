import "./WorkCardStyles.css" ;

import React, { useState } from "react" ;

import WorkCard from "./WorkCard" ;
import WorkCardData from "./WorkCardData" ;


const Work = () => {
    const [ activeFilter, setActiveFilter ] = useState('*') ;

    const languages = Array.from(new Set(WorkCardData.map((procard) => procard.lang))) ;
    languages.sort() ;
    languages.unshift('All') ; // always add 'All' option in first after sorting.

    const handleLanguageClick = (language) => {
        setActiveFilter( language === 'All' ? '*' : language ) ;
    }

    return (
        <div className = "work-container" >
            <h1 className = "project-header" >
                <span className = "dash" >-</span>
                PROJECTS
                <span className = "dash" >-</span>
            </h1>

            <div className = "languages-list" >
                <div className = "portfolio" >
                    {  languages.map((language, index) => (
                        <span 
                            key = { index } 
                            className = { `filter links ${ (language === activeFilter || (language === 'All' && activeFilter === '*')) ? 'filter-active' : '' }` }
                            onClick = { () => handleLanguageClick(language) } 
                        >
                            { language }
                        </span>
                    )) }
                </div>
            </div>

            <div className = "project-container" >
                { WorkCardData.map((val, ind) => {
                    if( activeFilter === '*' || activeFilter === val.lang ){
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
                        )
                    }
                }) }
            </div>
        </div>
    ) ;
}


export default Work ;
