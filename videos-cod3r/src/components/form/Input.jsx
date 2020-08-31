import React, { useState } from "react"

export default props => {
	let [nome, alterarNome] = useState("Scoob")

	// deixar value={nome} no input, trava a mudança de valor do input
	// isso devido ao fato de que a UI só atualiza quando o state atualizar
	return (
		<div>
			<h3>Nome: {nome}
			</h3>
			<input type="text" value={nome}
			onChange={e => alterarNome(e.target.value)} />
		</div>
	);
};