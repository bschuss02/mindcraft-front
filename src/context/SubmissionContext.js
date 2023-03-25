import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const dummySubmissionData = {
	10: {
		_id: 10,
		competitionId: 1,
		creator: 100,
		files: [
			{
				uri: "https://picsum.photos/200/300",
			},
			{
				uri: "https://picsum.photos/200/300",
			},
		],
		description: "This is a submission description for submission 10",
		result: "underReview",
	},
	11: {
		_id: 11,
		competitionId: 1,
		creator: 100,
		files: [
			{
				uri: "https://picsum.photos/200/300",
			},
			{
				uri: "https://picsum.photos/200/300",
			},
		],
		description: "This is a submission description for submission 11",
		result: "underReview",
	},
}

const SubmissionContext = createContext()

function SubmissionContextProvider({ children }) {
	const [submissionsMap, setSubmissionsMap] = useState(dummySubmissionData)

	const stateVars = {
		submissionsMap,
	}
	const stateSetters = {
		setSubmissionsMap,
	}
	return (
		<SubmissionContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</SubmissionContext.Provider>
	)
}

export { SubmissionContextProvider, SubmissionContext }
