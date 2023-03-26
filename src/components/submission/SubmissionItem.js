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
	Checkbox,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { SubmissionContext } from "../../context/SubmissionContext"
import { CompetitionContext } from "../../context/CompetitionContext"
import { formatDate } from "../../util/date/formatDate"
import { FileItem } from "./FileItem"
import { mapStatus } from "../../util/status/mapStatus"

function SubmissionItem({
	submissionId,
	showButtons = false,
	showCompetitionDetails = false,
	selectingWinner = false,
}) {
	const navigation = useNavigation()
	const { submissionsMap } = useContext(SubmissionContext)
	const { competitionsMap } = useContext(CompetitionContext)
	const submissionData = submissionsMap[submissionId]
	if (!submissionData) return null
	const {
		competition: competitionId,
		creator,
		files,
		description,
		result,
	} = submissionData
	const competitionData = competitionsMap[competitionId]
	if (!competitionData) return null
	const {
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
		<Pressable _hover={{ bg: "c1.800" }} p="2">
			<HStack justifyContent="space-between">
				<HStack space="4">
					<Box>
						<Image
							alt="competition cover image"
							source={{
								uri: showCompetitionDetails ? coverImage : creator.pfp,
							}}
							w="20"
							h="20"
							borderRadius={showCompetitionDetails ? "10" : "100"}
						/>
					</Box>
					<VStack maxW="500px" space="4">
						{showCompetitionDetails && (
							<VStack>
								<Heading fontSize="15">Competition:</Heading>
								<Text ml="4" numberOfLines={1} mt="2">
									{title}
								</Text>
								<Text ml="4" numberOfLines={1}>
									{subtitle}
								</Text>
							</VStack>
						)}
						{!showCompetitionDetails && (
							<VStack>
								<Heading fontSize="15">
									{`Created by: ${creator.username}`}
								</Heading>
							</VStack>
						)}
						<VStack>
							<Heading fontSize="15">Description:</Heading>
							<Text ml="4" mt="2">
								{description}
							</Text>
						</VStack>
						<VStack>
							<Heading fontSize="15">Submitted Files:</Heading>
							<VStack ml="4" space="2" mt="2">
								{files.map((file, index) => (
									<FileItem key={index.toString()} fileData={file} />
								))}
							</VStack>
						</VStack>
					</VStack>
				</HStack>
				{showButtons && (
					<VStack alignItems="flex-end" space="2">
						<VStack>
							<Heading fontSize="20px">{`$${prizeMoney}`}</Heading>
							<Text>{formatDate(deadline)}</Text>
						</VStack>
						<Text>{`Status: ${mapStatus(result)}`}</Text>
						<VStack>
							<Button
								bg="c2.500"
								leftIcon={
									<Icon as={Ionicons} name="ios-trash" color="c1.50" size="5" />
								}
							>
								<Text>Remove Submission</Text>
							</Button>
						</VStack>
					</VStack>
				)}
				{selectingWinner && (
					<VStack alignItems="flex-end" space="2">
						<HStack space="2" alignItems="center">
							<Heading fontSize="17px">Choose winner</Heading>
							<Checkbox />
						</HStack>
					</VStack>
				)}
			</HStack>
		</Pressable>
	)
}

export { SubmissionItem }
