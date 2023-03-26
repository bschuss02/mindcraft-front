import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const DisplayContext = createContext()

function DisplayContextProvider({ children }) {
	const index = 6
	const [isStartupLoading, setIsStartupLoading] = useState(false)
	const [message, setMessage] = useState("")
	const [currentCompetitionId, setCurrentCompetitionId] = useState(null)
	const [
		currentRevieweingCompetitionId,
		setCurrentRevieweingCompetitionId,
	] = useState(null)

	// create competition
	const [createCompTitle, setCreateCompTitle] = useState("")
	const [createCompSubtitle, setCreateCompSubtitle] = useState("")
	const [createCompOverview, setCreateCompOverview] = useState("")
	const [createCompPrizeMoney, setCreateCompPrizeMoney] = useState("")
	const [createCompDeadline, setCreateCompDeadline] = useState("")
	const [createCompRules, setCreateCompRules] = useState("")
	const [createCompResources, setCreateCompResources] = useState("")
	const [createCompAcceptedTerms, setCreateCompAcceptedTerms] = useState(false)

	// create submission
	const [createSubDescription, setCreateSubDescription] = useState("")
	const [selectedFiles, setSelectedFiles] = useState([])
	const [createSubHideSubmission, setCreateSubHideSubmission] = useState(false)
	const [createSubAcceptedTerms, setCreateSubAcceptedTerms] = useState(false)

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
