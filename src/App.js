import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import "./App.css";

function App() {
	return (
		<div>
			<h1>React State Change Example</h1>
			<ClassCounter></ClassCounter>
			<FunctionalCounter></FunctionalCounter>
		</div>
	);
}

export default App;
