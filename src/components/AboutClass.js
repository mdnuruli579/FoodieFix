
import React from "react";
class AboutClass extends React.Component{
    constructor(props){
        super(props);
    }
    render=()=>{
        const {name}=this.props;
        const image=require('../static/images/nurul.jpg');
        return (
            <div>
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
                <h2 className="team">Our Team</h2>
                <div className="row">
                <div className="column">
                    <div className="card">
                    <img className="team-image" src={image} alt="Jane"/>
                    <div className="container">
                        <h2>{name}</h2>
                        <p className="title">CEO & Founder</p>
                        <p>Excellent Problem Solver and Business Minded</p>
                        <p>mdnuruli579@gmail.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img className="team-image" src={image} alt="Mike"/>
                    <div className="container">
                        <h2>Mike Ross</h2>
                        <p className="title">Art Director</p>
                        <p>Some text that describes me </p>
                        <p>mike@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card">
                    <img className="team-image" src={image} alt="John"/>
                    <div className="container">
                        <h2>John Doe</h2>
                        <p className="title">Designer</p>
                        <p>Some text that describes me</p>
                        <p>john@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default AboutClass;