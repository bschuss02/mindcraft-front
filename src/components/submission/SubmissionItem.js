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
import { SubmissionContext } from "../../context/SubmissionContext"
import { CompetitionContext } from "../../context/CompetitionContext"
import { formatDate } from "../../util/date/formatDate"
import { FileItem } from "./FileItem"

function SubmissionItem({ submissionId }) {
	const navigation = useNavigation()
	const { submissionsMap } = useContext(SubmissionContext)
	const { competitionsMap } = useContext(CompetitionContext)
	const submissionData = submissionsMap[submissionId]
	if (!submissionData) return null
	const { competitionId, creator, files, description, result } = submissionData
	const competitionData = competitionsMap[competitionId]
	const {
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
		<Pressable _hover={{ bg: "c1.800" }} p="2" borderRadius="10">
			<HStack>
				<HStack space="4">
					<Box>
						<Image
							alt="competition cover image"
							source={{ uri: coverImage }}
							w="20"
							h="20"
							borderRadius="10"
						/>
					</Box>
					<VStack maxW="500px" space="4">
						<VStack>
							<Heading fontSize="15">Competition:</Heading>
							<Text ml="4" numberOfLines={1} mt="2">
								{title}
							</Text>
							<Text ml="4" numberOfLines={1}>
								{subtitle}
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
				{/* <VStack>
					<Heading fontSize="20px">{`$${prizeMoney}`}</Heading>
					<Text>{formatDate(deadline)}</Text>
				</VStack> */}
			</HStack>
		</Pressable>
	)
}

export { SubmissionItem }
