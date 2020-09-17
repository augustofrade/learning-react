import React, { Component, useState, useEffect } from "react"
import RepoList from "./api/github.js"
import axios from "axios"
import APIItem from "./API-Item"

export class APIHandlerClass extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		RepoList()
		.then(data => this.setState({ data }))
	}

	render() {
		const { data } = this.state

		return (
			<ul>
				{data.map(item => <APIItem key={item.id} {...item} />)}
			</ul>
		)
	}
}

export function APIHandlerFunction() {
	const [ data, setData ] = useState("");

	// Makes the function component consume the API only one time by passing [] as a param.
	useEffect(() => {
		
		setData("bosta")
		console.log(data)
	}, [])

	return (
		<ul>
			{/*{data.map(item => <APIItem key={item.id} {...item} />)}*/}
		</ul>
	)
}