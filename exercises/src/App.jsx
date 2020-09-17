import React, {useState} from "react";

import ToDoProvider from "./components/context/ToDoContext";
import ToDoList from "./components/context/ToDoList";
import AddToDo from "./components/context/AddToDo";

export default function App() {

	return (
		<ToDoProvider>
			<AddToDo />
			<ToDoList />
		</ToDoProvider>
	)
}