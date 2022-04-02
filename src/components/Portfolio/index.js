import React from "react";
import Project from "../Project";
import "./style.css";

function Portfolio(props) {

    const workArr = [
        {
            url: "https://iamcvilla.github.io/fluffybutts/",
            title: "Fluffy Butts!",
            github: "https://github.com/iamcvilla/fluffybutts",
            class: "big-box-1",
            id: null
        },
        {
            url: "https://salty-meadow-09626.herokuapp.com/",
            title: "PC Rater",
            github: "https://github.com/Ahoward21/PC-Rater",
            class: "big-box-2",
            id: null
        },
        {
            url: "https://penny--pinchers.herokuapp.com/",
            title: "Penny Pinchers",
            github: "https://github.com/ChristinaHC/Penny-Pinchers",
            class: "half-box",
            id: "half-box1"
        },
        {
            url: "https://ChristinaHC.github.io/run-buddy/",
            title: "Run Buddy",
            github: "https://github.com/ChristinaHC/run_buddy",
            class: "half-box",
            id: "half-box2"
        },
        {
            url: "https://vroomvroom-books.herokuapp.com/",
            title: "VroomVroom Books",
            github: "https://github.com/ChristinaHC/VroomVroom-Books",
            class: "half-box",
            id: "half-box3"
        },
        {
            url: "https://christinahc.github.io/schedule_me/",
            title: "Schedule Me",
            github: "https://github.com/ChristinaHC/schedule_me",
            class: "half-box",
            id: "half-box4"
        }
    ];

    return (
        <>
        <section className="d-flex justify-content-center" id="header-img-partial"></section>
                <h2 className="d-flex justify-content-center" id="work-title">Portfolio</h2>
            <section id="work">
                <div className="column"></div>
                <div id="work-imgs-container" className="main-section-content">
                    {
                        workArr.map(work => {
                            return <Project work={work}/>
                        })
                    }
                </div>
                    
            </section>
        </>
    );
}

export default Portfolio;