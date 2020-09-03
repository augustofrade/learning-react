import React from "react"
import ReactDOM from "react-dom"

export default class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		 
		 // Always bind the function in class components
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			// How to pass params:
			// this.function.bind(this, params)
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? "ON" : "OFF"}
			</button>
		)
	}
}