import React from "react"
import Primeiro from "./components/basicos/Primeiro"
import ComParametros from "./components/basicos/ComParametros"
import ComFilhos from "./components/basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/basicos/Repeticao"
import Condicional from "./components/basicos/Condicional"
import "./App.css"


export default props =>
	<div className="App">
		<Card titulo="#01 - Exercicio">
			<Primeiro />
		</Card>

		<Card titulo="#02 - Com Parâmetros">
			<ComParametros titulo="Titulo customizado"
				subtitulo="subtitulo c/ parâmetros"/>
		</Card>

		<Card titulo="#03 - Com filhos">
			<ComFilhos>
				<ul>
					<li>Scoob</li>
					<li>Arooba</li>
					<li>Burger</li>
				</ul>
			</ComFilhos>
		</Card>

		<Card titulo="#04 - Repetição">
			<Repeticao />
		</Card>

		<Card titulo="#05 - Condicional">
			<Condicional num="9" />
		</Card>
	</div>