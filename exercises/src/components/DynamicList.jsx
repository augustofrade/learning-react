import React, { useState } from "react"


export default function(props) {
	const [ list, setList ] = useState([]);

	function addDynamicItem(itemName) {
		const item = itemName.value.trim()
		// This function updates the state "list". Making the component to update and thus rendering the items in list
		if(item !== "")
			setList(list => [...list, item])
	}

	function DynamicItem(props) {
		return (
			<li>{props.label}</li>
		)
	}

	return (
		<div>
			<h3 style={{fontFamily: "Verdana, sans-serif"}}>Dynamic List</h3>
			<input name="itemName" placeholder="Dynamic item to add" />
			<button onClick={() => addDynamicItem(document.querySelector("[name='itemName']"))}>Add item</button>
			<hr />
			<ul>
				{
					list.map(item => <DynamicItem label={item} />)
				}
			</ul>
		</div>
	)
}