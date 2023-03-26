import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const DisplayContext = createContext()

function DisplayContextProvider({ children }) {
	const index = 2
	const [isStartupLoading, setIsStartupLoading] = useState(false)
	const [message, setMessage] = useState("")
	const [currentCompetitionId, setCurrentCompetitionId] = useState(null)
	const [
		currentRevieweingCompetitionId,
		setCurrentRevieweingCompetitionId,
	] = useState(null)

	// create competition
	const [createCompTitle, setCreateCompTitle] = useState(
		`Comp title ${index} `.repeat(3),
	)
	const [createCompSubtitle, setCreateCompSubtitle] = useState(
		`Comp subtitle ${index} `.repeat(4),
	)
	const [createCompOverview, setCreateCompOverview] = useState(
		`Comp overview ${index} `.repeat(20),
	)
	const [createCompPrizeMoney, setCreateCompPrizeMoney] = useState(
		`$${index + 1000} `,
	)
	const [createCompDeadline, setCreateCompDeadline] = useState(
		`04/${index + 1}/2023`,
	)
	const [createCompRules, setCreateCompRules] = useState(
		`Comp rules ${index} `.repeat(10),
	)
	const [createCompResources, setCreateCompResources] = useState(
		`Comp resources ${index} `.repeat(10),
	)
	const [createCompAcceptedTerms, setCreateCompAcceptedTerms] = useState(true)

	// create submission
	const [createSubDescription, setCreateSubDescription] = useState(
		`Sub description ${index} `.repeat(10),
	)
	const [selectedFiles, setSelectedFiles] = useState([])
	const [createSubHideSubmission, setCreateSubHideSubmission] = useState(false)
	const [createSubAcceptedTerms, setCreateSubAcceptedTerms] = useState(true)

	// choosing winners
	const [winningSubmissionId, setWinningSubmissionId] = useState(null)

	const stateVars = {
		message,
		isStartupLoading,
		currentCompetitionId,
		currentRevieweingCompetitionId,
		selectedFiles,
		createCompTitle,
		createCompSubtitle,
		createCompOverview,
		createCompPrizeMoney,
		createCompDeadline,
		createCompRules,
		createCompResources,
		createCompAcceptedTerms,
		createSubDescription,
		createSubHideSubmission,
		createSubAcceptedTerms,
		winningSubmissionId,
	}
	const stateSetters = {
		setMessage,
		setIsStartupLoading,
		setCurrentCompetitionId,
		setCurrentRevieweingCompetitionId,
		setSelectedFiles,
		setCreateCompTitle,
		setCreateCompSubtitle,
		setCreateCompOverview,
		setCreateCompPrizeMoney,
		setCreateCompDeadline,
		setCreateCompRules,
		setCreateCompResources,
		setCreateCompAcceptedTerms,
		setCreateSubDescription,
		setCreateSubHideSubmission,
		setCreateSubAcceptedTerms,
		setWinningSubmissionId,
	}
	return (
		<DisplayContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</DisplayContext.Provider>
	)
}

export { DisplayContextProvider, DisplayContext }
