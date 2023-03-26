import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const CompetitionContext = createContext()

function CompetitionContextProvider({ children }) {
	const [competitionsMap, setCompetitionsMap] = useState({})
	const [competitionFeedIds, setCompetitionFeedIds] = useState([])
	const [myCompetitionIds, setMyCompetitionIds] = useState([])

	const stateVars = {
		competitionsMap,
		competitionFeedIds,
		myCompetitionIds,
	}
	const stateSetters = {
		setCompetitionsMap,
		setCompetitionFeedIds,
		setMyCompetitionIds,
	}
	return (
		<CompetitionContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</CompetitionContext.Provider>
	)
}

export { CompetitionContextProvider, CompetitionContext }
