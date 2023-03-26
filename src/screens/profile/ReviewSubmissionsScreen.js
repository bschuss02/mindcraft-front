import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	ScrollView,
	Heading,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { BackButton } from "../../components/bars/BackButton"
import { DisplayContext } from "../../context/DisplayContext"
import { CompetitionContext } from "../../context/CompetitionContext"
import { SubmissionItem } from "../../components/submission/SubmissionItem"
import apiCall from "../../util/api/apiCall"
import showMyToast from "../../util/api/showMyToast"
import { SubmissionContext } from "../../context/SubmissionContext"

function ReviewSubmissionsScreen() {
	const navigation = useNavigation()
	const { competitionsMap } = useContext(CompetitionContext)
	const { setSubmissionsMap, submissionsMap } = useContext(SubmissionContext)
	const { currentRevieweingCompetitionId, winningSubmissionId } = useContext(
		DisplayContext,
	)
	const competitionData = competitionsMap[currentRevieweingCompetitionId]
	if (!competitionData) return null
	const { title, subs: submissionIds } = competitionData

	async function handleSubmitSelection() {
		const submitSelectionInfo = {
			competitionId: currentRevieweingCompetitionId,
			submissionId: winningSubmissionId,
		}
		const { data, error } = await apiCall(
			"POST",
			"comps/selectWinner",
			submitSelectionInfo,
		)
		if (error) return showMyToast(error)
		showMyToast("Selection submitted")
		const newSubmissionsMap = { ...submissionsMap }
		newSubmissionsMap[winningSubmissionId].result = "winner"
		setSubmissionsMap(newSubmissionsMap)
	}

	return (
		<Box variant="screen">
			<ScrollView>
				<VStack>
					<HStack justifyContent="space-between" alignItems="center">
						<HStack alignItems="flex-start" space="4">
							<Box alignItems="center">
								<BackButton
									action={() =>
										navigation.navigate("profile", {
											screen: "profileTabNav",
											params: { screen: "myCompetitionsScreen" },
										})
									}
								/>
							</Box>
							<VStack maxWidth="650px">
								<Heading>Review Submissions</Heading>
								<Text
									numberOfLines={1}
								>{`Select the winner for your competition titled: "${title}"`}</Text>
							</VStack>
						</HStack>
						<VStack>
							<Button onPress={handleSubmitSelection}>
								<Text>Submit Selection</Text>
							</Button>
						</VStack>
					</HStack>
					<VStack space="6" mt="2">
						{submissionIds &&
							submissionIds.map((submissionId, index) => (
								<SubmissionItem
									key={index.toString()}
									submissionId={submissionId}
									selectingWinner
								/>
							))}
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { ReviewSubmissionsScreen }
