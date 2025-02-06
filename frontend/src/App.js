import React from "react";
import { About } from "./about/components/About";
import "./index.css";
import { Links } from "./links/components/Links";
import { Projects } from "./projects/components/Projects";

function App() {
	return (
		<main className="container">
			<About/>
			<Links/>
			<Projects/>
		</main>
	);
};

export default App;