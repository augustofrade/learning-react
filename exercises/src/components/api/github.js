import axios from "axios"

export default function() {
	return axios.get("https://api.github.com/repositories")
	.then(({ data }) => data)
}