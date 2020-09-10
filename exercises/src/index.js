import React from "react" // Converts to JS code
import ReactDOM from "react-dom"
import ConditionalComponent from "./components/ConditionalComponent"

const root = document.getElementById('root');


function App() {
	return (
		<div>
			<ConditionalComponent />
    	</div>
  	);
}

ReactDOM.render(<App />, root );