import React from "react";
import "./PortfolioProjects.css";
import thievesmonopoly from "../../Assets/Images/thievesmonopoly.png";
import YouMDb from "../../Assets/Images/YouMDb.png";
import spacehub from "../../Assets/Images/spacehubthumbnail.png";
import Burgerlogger from "../../Assets/Images/Burgerlogger.png";
import weather from "../../Assets/Images/weather.png";
import workday from "../../Assets/Images/workday.png";


export default function PortfolioProjects(){
    return(
        <div className=" container float-left backgroundportfolio" style={{marginBottom: "50px"}}>
        <div className="row">
            <div className="col-md-6">
                <div className="block padding transparent margin">
                <h2 className="textcolor ">Portfolio</h2>
                <hr/>
                <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://the-space-hub.herokuapp.com/"><img src={spacehub} alt="Space Hub" className="card-img img-fluid thumbnail"/></a>
                        <div className="banner"><a href = "https://github.com/mykakugaya/project-space">
                            <h3>The Space Hub</h3>
                            <p>Final capstone project; space-themed infotainment app. Built using React, Express, Node, MySql, & Material UI. I built the Home page & NASA/SpaceX API widgets</p>
                        </a></div>
                    </div>
                    <hr/>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://morning-earth-32122.herokuapp.com/"><img src={thievesmonopoly} alt="Thieves Monopoly" className="card-img img-fluid thumbnail"/></a>
                        <div className="banner"><a href = "https://github.com/abazrafshan/Project2Game">
                            <h3>Thieves Monopoly</h3>
                            <p>Second project; noir-themed virtual board game. Built using Express, MySql, JQuery, Node, & Materialize CSS. I was responsible for the Front End</p>
                        </a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/YouMDb-Movie-App/"><img src={YouMDb} alt="YouMDb" className="card-img img-fluid thumbnail"/></a>
                        <div className="banner"><a href = "https://github.com/abazrafshan/YouMDb-Movie-App">
                            <h3>YouMDb Movies</h3>
                            <p>First project; movie recommendation app. Built using HTML, JQuery, & Boostrap CSS. I was responsible for configuring the API calls</p>
                        </a></div>
                    </div>
                    <hr/>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href ="https://shrouded-fjord-25692.herokuapp.com/"><img src={Burgerlogger} alt="Burger Logger" className="card-img img-fluid thumbnail"/></a>
                        <div className="banner"><a href = "https://github.com/abazrafshan/BurgerLogger">
                            <h3>Burger Log</h3>
                            <p>First full-stack homework; restaurant app that lets users input names of burgers they want to eat. Built with MySql, Node, Express, & Express Handlebars.</p>
                        </a></div>
                    </div>
                </div>
                    <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <a href = "https://abazrafshan.github.io/WeatherDashboard/"><img src={weather} alt="Weather Dashboard" className="card-img img-fluid thumbnail"/></a>
                        
                        <div className="banner"><a href = "https://github.com/abazrafshan/WeatherDashboard">
                            <h3>Weather Dashboard</h3>
                            <p>Server-side API homework; weather dashboard that lets users search weather forecast of cities. Dynamically updated HTML & CSS powered by JQuery.</p>
                            </a></div>
                    </div>
                  <hr/>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                      <a href = "https://abazrafshan.github.io/Work-Day-Scheduler/"><img src={workday} alt="Work Day Scheduler" className="card-img img-fluid thumbnail"/></a>
                      <div className="banner"><a href = "https://github.com/abazrafshan/Work-Day-Scheduler">
                            <h3>Work Day Scheduler</h3>
                            <p>Third-party API homework; calendar app that lets users save events for each hour of the day. Dynamically updated HTML & CSS powered by JQuery.</p>
                        </a></div>
                  </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  
    )
}