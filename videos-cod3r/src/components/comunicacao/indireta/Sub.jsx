import React from "react"

export default props => {
	function gerarNum() {
		props.clicar(Math.random().toFixed(3), "Gerado")
	}		

	return (
		<div>
			<button onClick={gerarNum}>Alterar</button>
		</div>
	)
}