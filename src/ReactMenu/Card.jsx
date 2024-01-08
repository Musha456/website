import React from "react";
import web from "../images/database.png";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return(
        <>
            <div className="col-lg-4 col-md-6 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} alt="database image" />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase"> {props.title} </h3>
                        <p className="card-text"> {props.desc} </p>
                        <NavLink href="#" className="custom-button" >Read more...</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;