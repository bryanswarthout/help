import React from "react";
import "./LandingPage.css";

export default function LandingPage(){
    return (
        <div className="backgroundpic">
            <h1>Arash Bazrafshan</h1>
            <h2>Welcome to my portfolio</h2>
            <a className="landingpagebutton" href = "about"><button type="button" class="btn btn-primary btn-lg">Enter</button></a>
        </div>
    )
}
