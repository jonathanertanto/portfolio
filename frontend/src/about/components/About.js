import React from "react";
import "../style/about.css";

export const About = _ => {
    return(
        <header className="title">
            <div className="name">
                <div className="name-split">
                    <div style={{transform: "translate3d(0px, 0px, 0px)"}}>Jonathan</div>
                </div>
                <div className="name-split">
                    <div style={{transform: "translate3d(0px, 0px, 0px)"}}>Ertanto</div>
                </div>
            </div>
            <h1 className="intro">Full-stack Software Engineer, specialising in web development. Proven track record of leading projects, integrating AI technologies, and delivering secure, innovative software solutions in collaborative environments.</h1>
        </header>
    );
};