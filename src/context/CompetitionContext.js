import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const dummyCompetitionData = {
	1: {
		_id: 1,
		organizerId: 100,
		coverImage: "https://picsum.photos/200/200",
		title: "Competition 1 ".repeat(10),
		subtitle: "This is a description of competition 1 ".repeat(10),
		overview: "This is an overview of competition 1 ".repeat(30),
		prizeMoney: 1000,
		deadline: new Date("2023-3-30"),
		rules: "These are the rules of competition 1",
		resources: "These are the resources of competition 1",
		createdAt: new Date("2023-3-10"),
	},
	2: {
		_id: 2,
		organizerId: 100,
		coverImage: "https://picsum.photos/200/200",
		title: "Competition 2",
		subtitle: "This is a description of competition 2",
		overview: "This is an overview of competition 2",
		prizeMoney: 2000,
		deadline: new Date("2023-3-30"),
		rules: "These are the rules of competition 2",
		resources: "These are the resources of competition 2",
		createdAt: new Date("2023-3-10"),
	},
}

const CompetitionContext = createContext()

function CompetitionContextProvider({ children }) {
	const [competitionsMap, setCompetitionsMap] = useState(dummyCompetitionData)
	const [competitionFeedIds, setCompetitionFeedIds] = useState([1, 2])

	const stateVars = {
		competitionsMap,
		competitionFeedIds,
	}
	const stateSetters = {
		setCompetitionsMap,
		setCompetitionFeedIds,
	}
	return (
		<CompetitionContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</CompetitionContext.Provider>
	)
}

export { CompetitionContextProvider, CompetitionContext }
