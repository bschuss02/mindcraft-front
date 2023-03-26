import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Pressable,
	Image,
	Heading,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { formatDate } from "../../util/date/formatDate"
import { CompetitionContext } from "../../context/CompetitionContext"
import { DisplayContext } from "../../context/DisplayContext"

function CompetitionItem({ competitionId, showButtons = false }) {
	const navigation = useNavigation()
	const { competitionsMap } = useContext(CompetitionContext)
	const {
		setCurrentCompetitionId,
		setCurrentRevieweingCompetitionId,
	} = useContext(DisplayContext)
	if (!competitionsMap) return null
	const competitionData = competitionsMap[competitionId]
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

	function handleNavigateToCompetition() {
		setCurrentCompetitionId(competitionId)
		navigation.navigate("competitions", { screen: "viewCompetitionTabNav" })
	}

	function handleNavigateToReviewSubmissions() {
		setCurrentRevieweingCompetitionId(competitionId)
		navigation.navigate("profile", { screen: "reviewSubmissionsScreen" })
	}

	return (
		<Pressable
			onPress={handleNavigateToCompetition}
			_hover={{ bg: "c1.800" }}
			p="2"
			borderRadius="10"
		>
			<HStack justifyContent="space-between" mx="4">
				<HStack space="3">
					<Box>
						<Image
							alt="competition cover image"
							source={{ uri: coverImage }}
							w="20"
							h="20"
							borderRadius="10"
						/>
					</Box>
					<VStack>
						<Text fontSize="16px" maxW="400px">
							{title}
						</Text>
						<Text fontSize="13px" maxW="400px" opacity={0.7}>
							{subtitle}
						</Text>
					</VStack>
				</HStack>
				<VStack alignItems="flex-end" space="4">
					<VStack alignItems="flex-end">
						<Heading fontSize="20px">{`$${prizeMoney}`}</Heading>
						<Text>{formatDate(deadline)}</Text>
					</VStack>
					{showButtons && (
						<VStack space="3">
							<VStack alignItems="flex-end">
								<Button onPress={handleNavigateToReviewSubmissions}>
									<Text>Review Submissions</Text>
								</Button>
							</VStack>
							<VStack alignItems="flex-end">
								<Button>
									<Text>Delete Competitions</Text>
								</Button>
							</VStack>
						</VStack>
					)}
				</VStack>
			</HStack>
		</Pressable>
	)
}

export { CompetitionItem }
