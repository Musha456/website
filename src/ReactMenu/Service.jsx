import React from "react";
import Card from "./Card.jsx";
import SData from "../Demo/SData.jsx";



const Service = () => {
    return(
        <>
        <div className="my-5 text-center">
            <h1 className="tab-center"> Our Services</h1>
        </div>

        <div className="container-fluid mb-5">
            <dv className="row">
                <div className="col-md-10 mx-auto">

                    <div className="row gy-5">

                    {
                        SData.map( (val, index) => {
                            return <Card 
                                imgSrc = {val.imgSrc}
                                title = {val.title}
                                desc = {val.desc}
                                // key = {index}
                            />
                        })
                    }

                    </div>

                </div>
            </dv>
        </div>
        </>
    )
}

export default Service;