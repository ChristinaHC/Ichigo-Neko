import React from "react";
import "./style.css";

function Resume() {
    return (
        <>
            <section id="header-img-partial"></section>

            <div className="container resume-container">
                <a href="https://docs.google.com/document/d/e/2PACX-1vQHamMsizv9bxB3EyyrECQ8v6cWDfB040k0rztz3vPn204ozLvPUYMoqE0ZELiZfQqfxOK3t-zQI9Pm/pub" target="_blank" rel="noreferrer"><button className="btn btn-info btn-lg mt-5 mb-5">Link to Resume</button></a>
                <h1 className="d-flex justify-content-center profs mb-5">Proficiencies</h1>
                    <div className="ul-container d-flex justify-content-between">
                        <ul className="mt-3 mb-5 ml-5">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>State</li>
                        </ul>
                        <ul className="mt-3 mb-5 ml-5">
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS/Bootstrap</li>
                            <li>GraphQL</li>
                            <li>Object Relational Mapping</li>
                            <li>Model-View-Controller</li>
                        </ul>
                        <ul className="mt-3 mb-5 ml-5">
                            <li>Web APIs</li>
                            <li>Third Party APIs</li>
                            <li>Server-Side APIs</li>
                            <li>Object Oriented Programming</li>
                            <li>Progressive Web Applications</li>
                            <li>Leadership and Organizational Skills</li>
                        </ul>
                    </div>
            </div>
        </>
    );
}

export default Resume;