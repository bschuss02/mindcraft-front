function downloadFile(url, fileName) {
	fetch(url)
		.then((response) => {
			return response.blob()
		})
		.then((blob) => {
			const url = window.URL.createObjectURL(new Blob([blob]))
			const link = document.createElement("a")
			link.href = url
			link.setAttribute("download", fileName)
			document.body.appendChild(link)
			link.click()
		})
		.catch((error) => {
			console.error(error)
		})
}

export { downloadFile }
