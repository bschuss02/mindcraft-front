import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionItem } from "../../components/competitions/CompetitionItem"
import { CompetitionContext } from "../../context/CompetitionContext"

function CompetitionsScreen() {
	const navigation = useNavigation()
	const { competitionFeedIds } = useContext(CompetitionContext)
	return (
		<Box variant="screen">
			<HStack justifyContent="space-between" alignItems="center">
				<VStack space="1" maxWidth="500px">
					<Heading fontSize="30px">Competitions</Heading>
					<Heading fontSize="14px">
						Showcase your creative skills and explore posibiities through these
						exciting competitions
					</Heading>
				</VStack>
				<VStack mr="5">
					<Button
						onPress={() =>
							navigation.navigate("competitions", {
								screen: "createCompetitionScreen",
							})
						}
						leftIcon={<Icon as={Ionicons} name="add" color="c1.50" size="5" />}
					>
						<Text>Create</Text>
					</Button>
				</VStack>
			</HStack>
			<VStack space="1" mt="5">
				{competitionFeedIds.map((competitionId, index) => (
					<CompetitionItem
						key={index.toString()}
						competitionId={competitionId}
					/>
				))}
			</VStack>
		</Box>
	)
}

export { CompetitionsScreen }
