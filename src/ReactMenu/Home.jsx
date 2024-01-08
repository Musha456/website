import React from "react";
import web from "../images/web.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home = () => {
    return(
        <>
            <Common message='Grow your business with'
             name ='Syed Mushahid'
             imgSrc={web} 
             visit='/service' 
             btnName='Get Started' />
        </>
    )
}

export default Home;