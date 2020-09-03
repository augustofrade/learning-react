import React from "react"
import ReactDOM from "react-dom"

// Learning class components through the docs
export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		// Only here this.state can be used
		// Cannot be called outside this class / class component
		this.state = {date: new Date()};
	}


	componentDidMount() { 
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// Updates the component DOM
		// It's possible to change various stats at the same time
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h2>Time: {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}