import React from "react";
import { ArrowLeft } from "lucide-react";
import "../style/projects.css";
import { useNavigate } from "react-router-dom";

export const ProjectDetails = (props) => {
    const navigate = useNavigate();
    return(
        <main className="container">
            <section className="project-details">
                <div className="detail-primary-panel">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="bck-btn"
                    >
                        <ArrowLeft />
                        <span className="u-visually-hidden">Back Button</span>
                        <div className="icon-hover"></div>
                    </button>
                    <div>
                        <h2>{props.project.title}</h2>
                        <h1>{props.project.desc}</h1>
                        <h3>Technologies used</h3>
                        <div></div>
                    </div>
                </div>
                <div className="detail-secondary-panel">
                    <div>

                    </div>
                </div>
            </section>
        </main>
    );
};