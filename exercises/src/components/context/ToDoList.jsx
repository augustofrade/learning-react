import React, {useContext} from "react";
import {ToDoContext} from "./ToDoContext";
import ToDoItem from "./ToDoItem";


export default function TodoList() {
	const context = useContext(ToDoContext);

	const data = context.todos.map(todo => (
		<ToDoItem key={todo.id} todo={todo} />
	))
	
	return (
		<div>
		{data}
		</div>	
	)
}