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
import * as DocumentPicker from "expo-document-picker"
import { DisplayContext } from "../../context/DisplayContext"
import { UploadFileItem } from "../../components/submission/UploadFileItem"

function JoinCompetitionScreen() {
	const navigation = useNavigation()
	const { selectedFiles, setSelectedFiles } = useContext(DisplayContext)

	async function handleAddNewFiles() {
		console.log("addNewFiles")
		const result = await DocumentPicker.getDocumentAsync({
			multiple: true,
		})
		if (type === "success") {
			const files = uri.map((fileUri, index) => ({
				uri: fileUri,
				name: name[index],
			}))
			setSelectedFiles(files)
		}
	}

	console.log("selectedFiles", selectedFiles)
	console.log("Object.keys(selectedFiles)", Object.keys(selectedFiles))

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
						{/* {selectedFiles.length !== 0 && (
							<VStack>
								{selectedFiles.map((fileData, index) => (
									<UploadFileItem key={index.toString()} fileData={fileData} />
								))}
							</VStack>
						)} */}
						<Button
							onPress={handleAddNewFiles}
							leftIcon={
								<Icon as={Ionicons} name="add" color="c1.900" size="5" />
							}
						>
							<Text>Add New File</Text>
						</Button>
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { JoinCompetitionScreen }
