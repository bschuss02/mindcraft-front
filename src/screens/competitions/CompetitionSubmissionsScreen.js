import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionContext } from "../../context/CompetitionContext"
import { DisplayContext } from "../../context/DisplayContext"
import { SubmissionItem } from "../../components/submission/SubmissionItem"

function CompetitionSubmissionsScreen() {
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
		submissionIds,
	} = competitionData
	console.log("submissionIds", submissionIds)
	return (
		<Box variant="screen" mt="33">
			<VStack>
				{submissionIds.map((submissionId, index) => (
					<SubmissionItem key={index.toString()} submissionId={submissionId} />
				))}
			</VStack>
		</Box>
	)
}

export { CompetitionSubmissionsScreen }
