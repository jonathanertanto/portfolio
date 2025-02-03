import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="*" element={null}>
					<Route path="" element={null}/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;