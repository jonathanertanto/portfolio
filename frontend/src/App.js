import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./about/components/About";
import "./index.css";

function App() {
	return (
		<main className="container">
			<Routes>
				<Route path="*" element={<About/>}/>
			</Routes>
		</main>
	);
};

export default App;