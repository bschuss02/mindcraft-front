const statusMap = {
	underReview: "Under Review",
	winner: "WINNER",
	finished: "Competition Finished",
}

function mapStatus(status) {
	return statusMap[status]
}

export { mapStatus }
