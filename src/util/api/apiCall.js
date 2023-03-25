import AsyncStorage from "@react-native-async-storage/async-storage"

let URL = "http://localhost:3000"

const callingLogColor = "\x1b[36m%s\x1b[0m"
const receivedLogColor = "\x1b[32m%s\x1b[0m"
const errorLogColor = "\x1b[35m%s\x1b[0m"

function prettyStringify(obj) {
	const prettyString = JSON.stringify(obj, null, 1)
	if (!prettyString) return ""
	const indentedPrettyString = prettyString.replaceAll("\n", "\n\t")
	if (indentedPrettyString.length > 10000) {
		return indentedPrettyString.substring(0, 9900) + "...[TRUNCATED]"
	}
	return indentedPrettyString
}

function logApiStart(method, route, data) {
	console.log(callingLogColor, `${method} ${route} ${prettyStringify(data)}`)
}

function logApiEnd(method, route, res, elapsedTime, data, error) {
	if (error) {
		console.log(errorLogColor, `${method} ${route} ${res.status} "${error}"\n`)
	} else {
		console.log(
			receivedLogColor,
			`${method} ${route} ${elapsedTime}ms ${prettyStringify(data)}\n`,
		)
	}
}

async function apiCall(method, route, data) {
	const start = Date.now()
	const dataString = JSON.stringify(data)
	const authToken = await AsyncStorage.getItem("authToken")
	let apiUrl = `${URL}/${route}`
	let config = {
		method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"x-auth-token": authToken,
		},
	}
	if (method === "GET") {
		apiUrl += `?${new URLSearchParams(data)}`
	} else {
		config.body = dataString
	}
	logApiStart(method, route, data)
	const res = await fetch(apiUrl, config)
	const elapsedTime = Date.now() - start

	let returnData
	let returnError
	if (res.ok) {
		returnData = await res.json()
		returnError = null
	} else {
		returnError = await res.text()
		returnData = null
	}
	logApiEnd(method, route, res, elapsedTime, returnData, returnError)
	return { data: returnData, error: returnError }
}

export default apiCall
