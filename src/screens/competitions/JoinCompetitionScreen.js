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

function JoinCompetitionScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen" mt="33">
			<ScrollView>
				<VStack space="6">
					<VStack space="3">
						<VStack>
							<Heading fontSize="30px">Description</Heading>
							<Heading fontSize="14px">
								Provide a high level overview of what you're including in your
								submission
							</Heading>
						</VStack>
						<TextArea ml="1px" placeholder="My submission is..." />
					</VStack>
					<VStack space="3">
						<VStack>
							<Heading fontSize="30px">Upload Files</Heading>
							<Heading fontSize="14px">
								Upload your creations here. These can be images, videos, pdfs,
								etc.
							</Heading>
						</VStack>
						<TextArea ml="1px" placeholder="My submission is..." />
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { JoinCompetitionScreen }
