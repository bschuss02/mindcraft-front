import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionContext } from "../../context/CompetitionContext"
import { CompetitionItem } from "../../components/competitions/CompetitionItem"

function MyCompetitionsScreen() {
	const navigation = useNavigation()
	const { myCompetitionIds } = useContext(CompetitionContext)

	return (
		<Box variant="screen" mt="26">
			<VStack space="4">
				<VStack>
					<Heading fontSize="30px">My Competitions</Heading>
					<Heading fontSize="14px">
						Here is a list of all the competitions you've created
					</Heading>
				</VStack>
				<VStack space="4">
					{myCompetitionIds.map((competitionId, index) => (
						<CompetitionItem
							key={index.toString()}
							competitionId={competitionId}
							showButtons
						/>
					))}
				</VStack>
			</VStack>
		</Box>
	)
}

export { MyCompetitionsScreen }
