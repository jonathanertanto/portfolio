import React from "react";
import { About } from "./about/components/About";
import "./index.css";
import { Links } from "./links/components/Links";

function App() {
	return (
		<main className="container">
			<About/>
			<Links/>
		</main>
	);
};

export default App;