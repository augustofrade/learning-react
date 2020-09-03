import React, { useState } from "react"

function CustomButton(props) {
	// Simple interaction between components
	return (
		<button onClick={props.onClick}>{props.label}</button>
	)
}

export default function(props) {
	const [ count, setCount ] = useState(0)

	return (
		<div>
			<div>Amount: {count}</div>
			<CustomButton label="+" onClick={() => setCount(count+1)} />
			<CustomButton label="-" onClick={() => setCount(count-1)} />
		</div>
	)
}