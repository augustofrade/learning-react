import React, { useState } from "react"
import Sub from "./Sub"

export default props => {
	const [texto, setTexto] = useState("Gerado")
	const [num, setNum] = useState(0) // 0 é o valor inicial

	function quandoClicar(valorGerado) {
		// valorGerado é passado através de gerarNum() de Sub.jsx (filho)
		// através dos props.
		setNum(valorGerado)
		setTexto(texto)
		/*
		Talvez a mesma coisa que usar setState({
			num: ...,
			texto: ...
		})
		*/
	}

	return (
		<div>
			<h4>{texto}: {num}</h4>
			<Sub clicar={quandoClicar}></Sub>
		</div>
		)
}


