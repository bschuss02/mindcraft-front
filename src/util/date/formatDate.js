// a function to format a date in the format x months or y days to go
// or x months or y days ago
// if the date is in the future, it will say x months or y days to go
// if the date is in the past, it will say x months or y days ago
function formatDate(date) {
	const today = new Date()
	const dateToCompare = new Date(date)
	const difference = dateToCompare.getTime() - today.getTime()
	const days = Math.floor(difference / (1000 * 3600 * 24))
	const months = Math.floor(days / 30)
	if (difference < 0) {
		if (months < 0) {
			return `${Math.abs(months)} months ago`
		} else {
			return `${Math.abs(days)} days ago`
		}
	} else {
		if (months > 0) {
			return `${months} months to go`
		} else {
			return `${days} days to go`
		}
	}
}

export { formatDate }
