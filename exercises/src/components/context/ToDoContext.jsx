import React, {createContext, useState} from "react";

export const ToDoContext = createContext();

const ToDoProvider = ({children}) => {
	const [todos, setTodos] = useState([
		{ id: 1, title: "Comer", done: false}
	]);

	const saveTodo = todo => {
		const newTodo = {
			id: todos.length+1,
			title: todo.title,
			done: false
		};
		setTodos([...todos, newTodo])
	}

	return (
		<ToDoContext.Provider value={{ todos, saveTodo }}>
			{children}
		</ToDoContext.Provider>
	)

}

export default ToDoProvider