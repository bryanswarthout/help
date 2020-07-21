import React from "react";
import "./Navbar.css";
import { Link } from 'react-router';

export default function Navbar(){
    return (
        <div >
        {/* Responsive navigation bar, directs user to About Me, Portfolio, or Contact page */}
            <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="index.html" id="logo">Arash Bazrafshan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-text">
                <ul className="navbar-nav mr-auto">
                    {/* List will redirect user to each of the three pages of this web site */}
                    <li className="nav-item">
                    <a className="nav-link" href="about">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="portfolio">Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="contact">Contact <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </span>
          </nav>
        </div>
    )
}

