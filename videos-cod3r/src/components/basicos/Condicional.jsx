import React from "react"

export default props => {

	return (
		<div>
			<h2>O número é {props.num}</h2>
			<span>({props.num % 2 === 0 ? "Par" : "Impar"})</span>
		</div>
	)
}