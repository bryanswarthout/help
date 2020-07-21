import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

export default function About(){
    return (
        <div>
            <Navbar/>
                <AboutMe/>
            <Footer/>
        </div>
    )
}

