import React from "react";
import "../style/projects.css";
import { useNavigate } from "react-router-dom";

export const Projects = (props) => {
    return(
        <section className="projects">
            <div className="heading">
                <h2>Work</h2>
            </div>
            <div className="project-list">
                <div className="project-list-inner">
                    {props.projects.map(project => (
                        <ProjectItem key={project.id} project = {project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectItem = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${props.project.title.replace(/ /g, "-")}`);
    };
    return(
        <button className="project-item" onClick={handleClick}>
            <img src={props.project.img} alt="wallpaper"/>
        </button>
    );
};