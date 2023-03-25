import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionContext } from "../../context/CompetitionContext"
import { DisplayContext } from "../../context/DisplayContext"

function CompetitionOverviewScreen() {
	const navigation = useNavigation()
	const { competitionsMap } = useContext(CompetitionContext)
	const { currentCompetitionId } = useContext(DisplayContext)
	const competitionData = competitionsMap[currentCompetitionId]
	if (!competitionData) return null
	const {
		_id,
		organizerId,
		coverImage,
		title,
		subtitle,
		overview,
		prizeMoney,
		deadline,
		rules,
		resources,
		createdAt,
	} = competitionData
	return (
		<Box variant="screen" mt="33">
			<Text>{overview}</Text>
		</Box>
	)
}

export { CompetitionOverviewScreen }
