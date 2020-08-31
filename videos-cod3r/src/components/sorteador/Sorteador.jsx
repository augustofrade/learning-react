import React, { useState } from "react";

export default (props) => {
	const [numeros, setNumeros] = useState(Array(props.qtsNumeros).fill(0))
	
	function gerarNumeroNaoContido(array) {
		const min = 1
		const max = 40
		const novoNum = parseInt(Math.random() * (max - min)) + min
		return array.includes(novoNum) ? gerarNumeroNaoContido(array) : novoNum
	}

	function gerarNumeros() {
		const novoArray = Array(props.qtsNumeros)
		.fill(0)
		.reduce(a => {
			const novoNumero = gerarNumeroNaoContido(a)
			[...a, novoNumero]
		}, [])
		.sort((a, b) => a - b)
		// No reduce:
		// a é o array atual na iteração
		// [] é o valor inicial do array

		setNumeros(novoArray)
	}

	return (
		<div>
			<h3>Sorteador</h3>
			<h4>{numeros.join(" ")}</h4>
			<button onClick={gerarNumeros}>Gerar número</button>
		</div>
	)
}