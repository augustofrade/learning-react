import React, { useState } from "react";


	function UserNotLoggedIn(props) {
		return (
			<div>
				<p>User NOT LOGGED in</p>
				<button onClick={props.onClick}>LOG IN</button>
			</div>
		)
	}

	function UserLoggedIn(props) {
		return (
			<div>
				<p>User LOGGED</p>
				<button>Account</button><br />
				<button>Statistics</button><br />
				<button onClick={props.onClick}>LOG OUT</button>
			</div>
		)
	}

export default function(props) {
	const [ userLogged, setUserLogged ] = useState(false)

	return (
		<div>
			{
				userLogged
				? <UserLoggedIn onClick={() => setUserLogged(false)} />
				: <UserNotLoggedIn onClick={() => setUserLogged(true)} />
			}
		</div>
	)}
