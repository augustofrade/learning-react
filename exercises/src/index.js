import React from "react" // Converts to JS code
import ReactDOM from "react-dom"
import DynamicList from "./components/DynamicList"

const root = document.getElementById('root');


function App() {
	return (
		<div>
			<DynamicList />
    	</div>
  	);
}

ReactDOM.render(<App />, root );