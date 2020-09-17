import React, {useContext} from "react";

export default function TodoItem({todo}) {
	return (
		<div>
			{todo.id} - {todo.title} - {todo.done ? "true" : "false"}
		</div>
	)
}