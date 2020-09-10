import React from "react"

export default function({id, full_name}) {
	return <li key={id}>{full_name}</li>
}