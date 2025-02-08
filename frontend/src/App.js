import React from "react";
import "./index.css";
import { ProjectDetails } from "./projects/components/ProjectDetails";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";

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

function App() {
	return (
		<Routes>
			<Route path = "*" element={<Homepage projects = {projects} />} />
			{projects.map(project => (
				<Route key={project.id} path={`/${project.title.replace(/ /g, "-")}`} element={<ProjectDetails project = {project}/>} />
			))}
		</Routes>
	);
};

export default App;