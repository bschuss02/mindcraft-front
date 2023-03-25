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
	TextArea,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { BackButton } from "../../components/bars/BackButton"

function CreateCompetitionScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen">
			<ScrollView>
				<HStack alignItems="flex-start" space="4">
					<Box alignItems="center">
						<BackButton
							action={() =>
								navigation.navigate("competitions", {
									screen: "competitionsScreen",
								})
							}
						/>
					</Box>
					<VStack>
						<Heading>Create a Competition</Heading>
						<Text>TODO</Text>
					</VStack>
				</HStack>
				<VStack space="6" mt="2">
					<VStack space="3">
						<VStack>
							<Heading fontSize="30px">Title</Heading>
							<Heading fontSize="14px">
								Provide an eye-catching title for your competition
							</Heading>
						</VStack>
						<TextArea
							h="45px"
							totalLines={2}
							ml="1px"
							placeholder="(eg) PSA to stop oil drilling in Alaska"
						/>
					</VStack>
					<VStack space="3">
						<VStack>
							<Heading fontSize="30px">Subtitle</Heading>
							<Heading fontSize="14px">
								Provide a high level sentence describing your project
							</Heading>
						</VStack>
						<TextArea
							h="90px"
							totalLines={4}
							ml="1px"
							placeholder="(eg) Create an image that will convince Joe Biden to deny approval for the Willow Project, a proposed oil drilling project in Alaska"
						/>
					</VStack>
					<VStack space="3">
						<VStack>
							<Heading fontSize="30px">Overview</Heading>
							<Heading fontSize="14px">
								Explain what competitors will do. Make sure to include the goal
								of the competition, context, acknowledgements, evaluation
								process, and requirements.
							</Heading>
						</VStack>
						<TextArea h="90px" totalLines={4} ml="1px" placeholder="(TODO)" />
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { CreateCompetitionScreen }
