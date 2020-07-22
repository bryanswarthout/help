import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <div className="backgroundpic">
            <h1>Arash Bazrafshan</h1>
            <h2>Welcome to my portfolio</h2>
            <Link to="/about"><button type="button" class="btn btn-primary btn-lg">Enter</button></Link>
        </div>
    )
}
