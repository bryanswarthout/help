import React from "react";
import "./AboutMe.css";
import aboutme from "../../Assets/Images/aboutme.jpg";

export default function AboutMe(){
    return (
        <div className="backgroundabout">
            <div className="container float-left">
                <div className="row">
                    <div className="col-md-8 p-3 mb-2 text-dark ">
                        <div className="block padding clearfix transparent">
                        <h3 className="textcolor block-header">About Me</h3>
                        <hr />
                        {/* Profile picture with margin to the right of image to distance verbage from image  */}
                        <img src={aboutme} alt="profile pic" id="about-image" className="float-left margin-right"/>
                        <p className="textalignleft">Hi everyone! My name is Arash, I'm a Minnesota native living in the West Coast for the past six years, with the last three of those years residing in the Los Angeles area. </p>
                        
                        <p className="textalignleft">I'm a full stack developer with a passion for creating immersive user experiences! I have experience as a full-stack MERN developer, and am open to an opportunity to leverage my capabilities for you. Feel free to browse my site and explore my projects. Reach out anytime!</p>
                        <a className="textalignleft" href = "https://www.linkedin.com/in/arashbazrafshan/">My LinkedIn page</a><br></br>
                        <a className="textalignleft" href = "https://github.com/abazrafshan">My Github Profile</a><br></br>
                        <a className="textalignleft" href = "../../Assets/Images/Arash Bazrafshan - Resume 1.pdf">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

