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
	Heading,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { DisplayContext } from "../../context/DisplayContext"
import { CompetitionContext } from "../../context/CompetitionContext"
import { BackButton } from "./BackButton"
import { formatDate } from "../../util/date/formatDate"

function ViewCompetitionTabNavBar() {
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
		<Box h="100px">
			<HStack my="4" mx="2" justifyContent="space-between" w="75%">
				<HStack>
					<BackButton
						action={() =>
							navigation.navigate("competitions", {
								screen: "competitionsScreen",
							})
						}
					/>
					<VStack maxW="600px">
						<Text numberOfLines={1} fontSize="19px">
							{title}
						</Text>
						<Text numberOfLines={1} fontSize="15px">
							{subtitle}
						</Text>
					</VStack>
				</HStack>
				<VStack alignItems="flex-end">
					<Heading fontSize="20px">{`Prize Money: $${prizeMoney}`}</Heading>
					<Text>{formatDate(deadline)}</Text>
				</VStack>
			</HStack>
		</Box>
	)
}

export { ViewCompetitionTabNavBar }
