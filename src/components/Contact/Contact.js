import React from "react";
import "./Contact.css";

export default function Contact(){
    return (
        <div>
        <div className="container float-left backgroundabout">
            <div className="row">
                <div className="col-md-6">
                    <div className="padding transparent margin">
                        <h2 className="textcolor block-header">Contact</h2>
                        <p>Cell: (952) 649-1562</p>
                        <p>Email: abazrafshan123@gmail.com</p>
                        <hr/>
                        {/* User can input a name in this box */}
                        <div className="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your name"/>
                        </div>
                        {/* User can input an email address in this box */}
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email@address.com"/>
                        </div>
                        {/* User can input a message in this box */}
                        <div className="form-group">
                            <label for="msg">Message</label>
                            <div >
                                <textarea id="msg" className="form-control" rows="3" placeholder="Message"></textarea>
                            </div>
                        </div>
                        {/* User can submit contact info by pressing the button */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
