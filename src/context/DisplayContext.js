import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const DisplayContext = createContext()

function DisplayContextProvider({ children }) {
	const [isStartupLoading, setIsStartupLoading] = useState(false)
	const [message, setMessage] = useState("")
	const [currentCompetitionId, setCurrentCompetitionId] = useState(1)

	const stateVars = {
		message,
		isStartupLoading,
		currentCompetitionId,
	}
	const stateSetters = {
		setMessage,
		setIsStartupLoading,
		setCurrentCompetitionId,
	}
	return (
		<DisplayContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</DisplayContext.Provider>
	)
}

export { DisplayContextProvider, DisplayContext }
