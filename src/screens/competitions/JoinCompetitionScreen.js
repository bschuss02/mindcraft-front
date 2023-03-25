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
import * as DocumentPicker from "expo-document-picker"
import { DisplayContext } from "../../context/DisplayContext"
import { UploadFileItem } from "../../components/submission/UploadFileItem"

function JoinCompetitionScreen() {
	const navigation = useNavigation()
	const { selectedFiles, setSelectedFiles } = useContext(DisplayContext)

	async function handleAddNewFiles() {
		const result = await DocumentPicker.getDocumentAsync()
		if (result.type === "success") {
			setSelectedFiles([...selectedFiles, result])
		}
	}

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
						{selectedFiles.length !== 0 && (
							<VStack space="1">
								{selectedFiles.map((fileData, index) => (
									<UploadFileItem
										key={index.toString()}
										index={index}
										fileData={fileData}
									/>
								))}
							</VStack>
						)}
						<Button
							w="150px"
							onPress={handleAddNewFiles}
							leftIcon={
								<Icon as={Ionicons} name="add" color="c1.900" size="5" />
							}
						>
							<Text>Add New File</Text>
						</Button>
					</VStack>
					<VStack space="2">
						<Heading fontSize="30px">Hide Submission</Heading>
						<HStack space="2">
							<Checkbox
								value={true}
								accessibilityLabel="Hide submission from being viewed by other competitors"
							/>
							<Text>
								Check the box to hide you submission from being viewed by other
								competitors
							</Text>
						</HStack>
					</VStack>
					<VStack space="2">
						<Heading fontSize="30px">Agree to Terms and Conditions</Heading>
						<HStack space="2">
							<Checkbox
								value={true}
								accessibilityLabel="Agree to terms and conditions"
							/>
							<Text>
								Check the box to be bound by the competition rules and
								MindCraft's terms and conditions
							</Text>
						</HStack>
					</VStack>
					<VStack alignItems="center">
						<Button>
							<Text>Submit to Competition</Text>
						</Button>
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { JoinCompetitionScreen }
