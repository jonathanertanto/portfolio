import React from "react";
import { About } from "./about/components/About";
import { Links } from "./links/components/Links";
import { Projects } from "./projects/components/Projects";
import "./index.css";

export const Homepage = (props) => {
	return(
		<main className="container">
			<About/>
			<Links/>
			<Projects projects = {props.projects} setSelectedProject = {props.setSelectedProject}/>
		</main>
	);
};