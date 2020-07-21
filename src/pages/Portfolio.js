import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PortfolioProjects from "../components/PortfolioProjects/PortfolioProjects";
import Footer from "../components/Footer/Footer";

export default function Portfolio(){
    return (
        <div>
            <Navbar/>
                <PortfolioProjects/>
            <Footer/>
        </div>
    )
}

