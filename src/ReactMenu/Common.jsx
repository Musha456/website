import React from "react";
import web from "../images/web.png";
import { NavLink } from "react-router-dom";


const Common = (props) => {
    return(
        <>
            <section id="header" className="mt-5">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-5">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        {props.message} <br/><strong className="custom-color">{props.name}</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer of making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="custom-button text-decoration-none">{props.btnName}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-2 oreder-lg-2 header-img">
                                    <img src={props.imgSrc} className="img-fluid animate" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;