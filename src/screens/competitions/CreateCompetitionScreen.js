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
	Checkbox,
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
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Title</Heading>
							<Heading fontSize="14px">
								Provide an eye-catching title for your competition
							</Heading>
						</VStack>
						<TextArea
							h="48px"
							totalLines={2}
							ml="1px"
							placeholder="(eg) PSA to stop oil drilling in Alaska"
						/>
					</VStack>
					<VStack space="3" maxW="650px">
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
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Overview</Heading>
							<Heading fontSize="14px">
								Explain what competitors will do. Make sure to include the goal
								of the competition, context, acknowledgements, evaluation
								process, and requirements.
							</Heading>
						</VStack>
						<TextArea
							h="250px"
							totalLines={4}
							ml="1px"
							placeholder={`(eg) The Willow Project, proposed by energy company ConocoPhillips, is a contentious oil and gas development project in Alaska. It involves the construction of a new oil field on Alaska's North Slope, with the goal of producing nearly 600 million barrels of oil over the next three decades.\n\nThe project will signficantly impact the region's wildlife and natural habitats, and will be catastrophic for climate change. Your task is to create a persuasive PSA that effectively communicates these concerns and urges members of Congress to vote against the Willow Project.\n\nSubmissions will be evaluated based on its ability to capture the attention of the average viewer and its clarity of message. The winnign submission will be awarded $5,000 and have their PSA aired on live television, paid for by the climate activism group Extinction Rebellion.`}
						/>
					</VStack>
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Prize Money</Heading>
							<Heading fontSize="14px">
								Enter the amount of money you pledge to the winner
							</Heading>
						</VStack>
						<TextArea
							h="48px"
							totalLines={4}
							ml="1px"
							placeholder="(eg) $5,000"
						/>
					</VStack>
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Deadline</Heading>
							<Heading fontSize="14px">
								Provide the date that the competition will stop accepting
								submissions. Use mm/dd/yyyy format.
							</Heading>
						</VStack>
						<TextArea
							h="48px"
							totalLines={4}
							ml="1px"
							placeholder="(eg) 04/20/2023"
						/>
					</VStack>
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Rules</Heading>
							<Heading fontSize="14px">
								Provide competition rules or restrictions your contestants must
								follow
							</Heading>
						</VStack>
						<TextArea
							h="90px"
							totalLines={4}
							ml="1px"
							placeholder="(eg) The submission file must be names PSA.jpg and be in jpg file format. Images must not contain nudity or violence"
						/>
					</VStack>
					<VStack space="3" maxW="650px">
						<VStack>
							<Heading fontSize="30px">Resources</Heading>
							<Heading fontSize="14px">
								Provide urls to any resources that contestants might find
								helpful in creating their submission.
							</Heading>
						</VStack>
						<TextArea h="90px" totalLines={4} ml="1px" placeholder="(TODO)" />
					</VStack>
					<VStack space="2">
						<Heading fontSize="30px">Agree to Terms and Conditions</Heading>
						<HStack space="2">
							<Checkbox
								value={true}
								accessibilityLabel="Agree to terms and conditions"
							/>
							<Text>
								Check the box to agree to MindCraft's terms and conditions
							</Text>
						</HStack>
					</VStack>
					<VStack>
						<Button>
							<Text>Create Contest</Text>
						</Button>
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { CreateCompetitionScreen }
