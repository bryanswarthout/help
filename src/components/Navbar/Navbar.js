import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <div >
        {/* Responsive navigation bar, directs user to About Me, Portfolio, or Contact page */}
            <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="index.html" id="logo"><Link to="/">Arash Bazrafshan</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-text">
                <ul className="navbar-nav mr-auto">
                    {/* List will redirect user to each of the three pages of this web site */}
                    <li className="nav-item">
                    <a className="nav-link" href="about"><Link to="/about">About Me</Link> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="portfolio"><Link to="/portfolio">Portfolio</Link> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="contact"><Link to="/contact">Contact</Link> <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </span>
          </nav>
        </div>
    )
}

