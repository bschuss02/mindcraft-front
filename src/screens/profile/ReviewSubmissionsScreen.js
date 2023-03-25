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

function ReviewSubmissionsScreen() {
	const navigation = useNavigation()
	const { competitionsMap } = useContext(CompetitionContext)
	const { currentRevieweingCompetitionId } = useContext(DisplayContext)
	const competitionData = competitionsMap[currentRevieweingCompetitionId]
	if (!competitionData) return null
	const { title } = competitionData
	return (
		<Box variant="screen">
			<ScrollView>
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
						>{`Select the winner for your competition titled: ${title}`}</Text>
					</VStack>
				</HStack>
			</ScrollView>
		</Box>
	)
}

export { ReviewSubmissionsScreen }
