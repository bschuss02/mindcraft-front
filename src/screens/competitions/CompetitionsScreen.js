import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { CompetitionItem } from "../../components/competitions/CompetitionItem"
import { CompetitionContext } from "../../context/CompetitionContext"

// const dummyCompetitionData = [
// 	{
// 		_id: 1,
// 		organizerId: 100,
// 		coverImage: "https://picsum.photos/200/200",
// 		title: "Competition 1".repeat(10),
// 		subtitle: "This is a description of competition 1".repeat(10),
// 		overview: "This is an overview of competition 1",
// 		prizeMoney: 1000,
// 		deadline: new Date("2023-3-30"),
// 		rules: "These are the rules of competition 1",
// 		resources: "These are the resources of competition 1",
// 		createdAt: new Date("2023-3-10"),
// 	},
// 	{
// 		_id: 2,
// 		organizerId: 100,
// 		coverImage: "https://picsum.photos/200/200",
// 		title: "Competition 2",
// 		subtitle: "This is a description of competition 2",
// 		overview: "This is an overview of competition 2",
// 		prizeMoney: 2000,
// 		deadline: new Date("2023-3-30"),
// 		rules: "These are the rules of competition 2",
// 		resources: "These are the resources of competition 2",
// 		createdAt: new Date("2023-3-10"),
// 	},
// ]

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
			{/* <Text>CompetitionsScreen</Text>
			<Button
				onPress={() => {
					console.log("navigating")
					navigation.navigate("competitions", {
						screen: "viewCompetitionTabNav",
					})
				}}
			>
				<Text>Navigate to ViewCompetitionTabNav</Text>
			</Button>
			<Button
				onPress={() => {
					console.log("navigating")
					navigation.navigate("competitions", {
						screen: "createCompetitionScreen",
					})
				}}
			>
				<Text>Navigate to CreateCompetitionScreen</Text>
			</Button> */}
		</Box>
	)
}

export { CompetitionsScreen }
