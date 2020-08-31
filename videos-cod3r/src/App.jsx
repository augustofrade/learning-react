import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametros from "./components/basicos/ComParametros"
import ComFilhos from "./components/basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/basicos/Repeticao"
import Condicional from "./components/basicos/Condicional"
import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/indireta/Super"
import Input from "./components/form/Input"
import Contador from "./components/contador/Contador"
import Sorteador from "./components/sorteador/Sorteador"

import "./App.css"


export default props =>
	<div className="App">
		<Card titulo="#01 - Exercicio" color="#fe4a49">
			<Primeiro />
		</Card>

		<Card titulo="#02 - Com Parâmetros" color="#2ab7ca">
			<ComParametros titulo="Titulo customizado"
				subtitulo="subtitulo c/ parâmetros"/>
		</Card>

		<Card titulo="#03 - Com filhos" color="#851e3e">
			<ComFilhos>
				<ul>
					<li>Scoob</li>
					<li>Arooba</li>
					<li>Burger</li>
				</ul>
			</ComFilhos>
		</Card>

		<Card titulo="#04 - Repetição" color="#4d648d">
			<Repeticao />
		</Card>

		<Card titulo="#05 - Condicional" color="#7bc043">
			<Condicional num={7} />
		</Card>

		<Card titulo="#06 - Comunicação Direta" color="#ffa700">
			<Pai />
		</Card>

		<Card titulo="#07 - Comunicação Indireta" color="#ff3377">
			<Super />
		</Card>

		<Card titulo="#08 - Input" color="#0B032d">
			<Input />
		</Card>

		<Card titulo="#09 - Contador" color="#ff8c61">
			<Contador passo={1} />
		</Card>
		<Card titulo="#10 - Sorteador" color="#ff9b54">
			<Sorteador qtsNumeros={5} />
		</Card>
	</div>