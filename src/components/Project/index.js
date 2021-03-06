import React from "react";

function Project({work}) {

    function handleClick(link) {
        window.open(link, "_blank");
    }

    function renderWork () {
        if(work.id === null) {
            return (
                <div id="work-main-img">
                    <div className={work.class}>
                        <div className="pic-label">
                            <button className="btn btn-success mx-3" onClick={() => handleClick(work.url)}>{work.title}</button>
                            <button className="btn btn-success" onClick={() => handleClick(work.github)}>GitHub Repo</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return  (
            <div className="click-container" id={work.id}>
                <div className={work.class} >
                    <div className="pic-label">
                        <button className="btn btn-success mx-3" onClick={() => handleClick(work.url)}>{work.title}</button>
                        <button className="btn btn-success" onClick={() => handleClick(work.github)}>GitHub Repo</button>
                    </div>
                </div>
            </div>
            )}
    }

    return (
        <>
            {renderWork()}
        </>

       
    );
}

export default Project;