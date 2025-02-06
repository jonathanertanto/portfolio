import React from "react";
import "../style/projects.css";

export const Projects = _ => {
    const projects = [
        {
            id: 0,
            title: 'OPTIK Consultancy | Opn.Systems',
            img: "./images/opnsystems.jpg"
        },
        {
            id: 1,
            title: 'CTV',
            img: "./images/ctv.jpg"
        },
        {
            id: 2,
            title: 'Course Enrolment and Recommendation',
            img: "./images/course.png"
        },
    ]
    return(
        <section className="projects">
            <div className="heading">
                <h2>Work</h2>
            </div>
            <div className="project-list">
                <div className="project-list-inner">
                    {projects.map(project => (
                        <ProjectItem key={project.id} project = {project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectItem = (props) => {
    return(
        <button className="project-item">
            <img src={props.project.img} alt="wallpaper"/>
        </button>
    );
};