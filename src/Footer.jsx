import React from "react";

const Footer = () =>{

    const data = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center mt-5">
                <p className="">
                    © {data} Syed Mushahid. All right reserved.
                </p>
            </footer>
        </>
    )
}

export default Footer;