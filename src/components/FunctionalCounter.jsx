import React, { useState } from "react";
import "./Common.css";
// Define a functional component
function FunctionalCounter() {
	// Initialize the count state variable and setCount function to update
	const [count, setCount] = useState(0); //Start with 0
	// Update increment or decrement
	// function to increment the count
	const incrementCount = () => setCount(count + 10); //update the count value by one
	// function to decrease the count
	const decrementCount = () => setCount(count - 5); // update the count value by one
	// function to reset the count to zero
	const resetCount = () => setCount(0); // reset count to zero
	// return JSX to render the component
	return (
		<div className="counter-container">
			{/* class for css styling  */}
			<h2 className="counter-display">Functional Component Counter: {count}</h2>
			<button className="counter-button" onClick={incrementCount}>
				Increment
			</button>
			<button className="counter-button" onClick={decrementCount}>
				Decrement
			</button>
			<button className="counter-button" onClick={resetCount}>
				Reset
			</button>
		</div>
	);
}
export default FunctionalCounter;
