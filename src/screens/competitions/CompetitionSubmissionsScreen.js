import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionContext } from "../../context/CompetitionContext"
import { DisplayContext } from "../../context/DisplayContext"
import { SubmissionItem } from "../../components/submission/SubmissionItem"
import { EmptyMessage } from "../../components/competitions/EmptyMessage"

function CompetitionSubmissionsScreen() {
	const navigation = useNavigation()
	const { competitionsMap } = useContext(CompetitionContext)
	const { currentCompetitionId } = useContext(DisplayContext)
	const competitionData = competitionsMap[currentCompetitionId]
	if (!competitionData) return null
	const {
		_id,
		organizer,
		coverImage,
		title,
		subtitle,
		overview,
		prizeMoney,
		deadline,
		rules,
		resources,
		createdAt,
		subs,
	} = competitionData
	const submissionIds = subs.map((sub) => sub._id)
	const hasSubmissions = submissionIds ? submissionIds.length > 0 : false
	console.log("hasSubmissions", hasSubmissions)
	return (
		<Box variant="screen" mt="33">
			<VStack space="4">
				{hasSubmissions &&
					submissionIds.map((submissionId, index) => (
						<SubmissionItem
							key={index.toString()}
							submissionId={submissionId}
						/>
					))}
				{!hasSubmissions && (
					<EmptyMessage message="This competition has no submissios yet. Be the first to create a submission by clicking on the 'Join Competition' tab" />
				)}
			</VStack>
		</Box>
	)
}

export { CompetitionSubmissionsScreen }
