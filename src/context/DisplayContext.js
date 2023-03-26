import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const DisplayContext = createContext()

function DisplayContextProvider({ children }) {
	const index = 0
	const [isStartupLoading, setIsStartupLoading] = useState(false)
	const [message, setMessage] = useState("")
	const [currentCompetitionId, setCurrentCompetitionId] = useState(null)
	const [
		currentRevieweingCompetitionId,
		setCurrentRevieweingCompetitionId,
	] = useState(null)
	const [selectedFiles, setSelectedFiles] = useState([])
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
		`04/${index + 1}/2023}`,
	)
	const [createCompRules, setCreateCompRules] = useState(
		`Comp rules ${index} `.repeat(10),
	)
	const [createCompResources, setCreateCompResources] = useState(
		`Comp resources ${index} `.repeat(10),
	)
	const [createCompAcceptedTerms, setCreateCompAcceptedTerms] = useState(true)

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
	}
	return (
		<DisplayContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</DisplayContext.Provider>
	)
}

export { DisplayContextProvider, DisplayContext }
