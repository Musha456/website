import React from "react";
import Common from "./Common"
import web from "../images/about.png";



const About = () => {
    return(
        <>
            <Common name='Welcome to about page'
             visit='/contact' 
             btnName='contact now'
             imgSrc={web} 
             />
        </>
    )
}

export default About;