import React from "react";
import Home from "./ReactMenu/Home.jsx";
import About from "./ReactMenu/About.jsx";
import Service from "./ReactMenu/Service.jsx";
import Contact from "./ReactMenu/Contact.jsx";
import NavBar from "./ReactMenu/NavBar.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";


const App = () => {
    return(
        <>
            <NavBar />
            <Routes>
                <Route exact path="" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/service" Component={Service} />
                <Route exact path="/contact" Component={Contact} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;