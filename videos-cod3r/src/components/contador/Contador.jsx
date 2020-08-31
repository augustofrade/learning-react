import React from "react"
import "./Contador.css"
import Display from "./Display"
import PassoForm from "./PassoForm"
import Botoes from "./Botoes"

export default class Contador extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			passo: props.passo || 1,
			valor: 0
		}
		// Necessário, senão: erro
		this.inc = this.inc.bind(this)
		this.dec = this.dec.bind(this)
	}

	inc() {
		this.setState({
			valor: this.state.valor + parseInt(this.state.passo, 10)
		})
	}

	dec() {
		this.setState({
			valor: this.state.valor - parseInt(this.state.passo, 10)
		})
	}

	mudarPasso = novoPasso => {
		this.setState({
			passo: novoPasso
		})
	}

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
				<PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso} />
				<Display valor={this.state.valor} />
				<Botoes onInc={this.inc} onDec={this.dec} />
			</div>

		)
	}
}