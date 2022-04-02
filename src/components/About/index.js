import React from "react";
import profilePic from "../../assets/images/profile-picture.jpg"
import "./style.css";

function About(props) {
    return (
        <>
            <section id="header-img">
                <h2>
                    Live for what's worth dying for and leverage technology to create the world you wish to see!
                </h2>
            </section>

            <section id="about">
                <div className="about-pic">
                    <h2 id="about-title">About Me</h2>
                    <img src={profilePic} alt="profile-pic"className="profile-pic"/>
                </div>
                <div className="column">

                </div>
                <div className="main-section-content">
                    <p className="about-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id lacus ut libero condimentum tincidunt. Praesent id efficitur est. Maecenas maximus metus et metus elementum egestas.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;