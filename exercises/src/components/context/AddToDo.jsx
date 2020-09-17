import React, { useContext, useState } from "react";
import { ToDoContext } from "./ToDoContext"

export default function AddToDo() {
	const {saveTodo} = useContext(ToDoContext)

	const [todo, setTodo] = useState();
	
	const handleFormSubmit = e => {
		e.preventDefault();
		saveTodo(todo)
	}

	const handleInputChange = e => {
		setTodo({
			...todo, 
			title: e.target.value
		})
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input type="text" onChange={handleInputChange} name="title" id="title" placeholder="Tarefa" />
			<button>ADD</button>
		</form>
	)
}