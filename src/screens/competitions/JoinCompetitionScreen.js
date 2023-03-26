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
import AsyncStorage from "@react-native-async-storage/async-storage"
import showMyToast from "../../util/api/showMyToast"

function JoinCompetitionScreen() {
	const navigation = useNavigation()
	const {
		selectedFiles,
		createSubDescription,
		createSubHideSubmission,
		createSubAcceptedTerms,
		setSelectedFiles,
		setCreateSubDescription,
		setCreateSubHideSubmission,
		setCreateSubAcceptedTerms,
	} = useContext(DisplayContext)

	async function handleAddNewFiles() {
		const result = await DocumentPicker.getDocumentAsync()
		if (result.type === "success") {
			setSelectedFiles([...selectedFiles, result])
		}
	}
	console.log("selectedFiles", selectedFiles)

	async function handleCreateSubmission() {
		const createSubInfo = {
			description: createSubDescription,
			hideSubmission: createSubHideSubmission,
			acceptedTerms: createSubAcceptedTerms,
		}
		const files = selectedFiles.map((fileData) => ({
			uri: fileData.uri,
			fileName: fileData.name,
			size: fileData.size,
			mimeType: fileData.mimeType,
			file: fileData.file,
		}))
		files.forEach((file) => {
			if (file.size > 5e6) {
				return showMyToast("File size must be less than 5MB")
			}
		})
		let formData = new FormData()
		formData.append("subMetadata", JSON.stringify(createSubInfo))
		files.forEach((file) => {
			formData.append("files", file.file)
		})
		let URL = "http://localhost:3000/subs/"
		const authToken = await AsyncStorage.getItem("authToken")
		const config = {
			method: "POST",
			body: formData,
			headers: {
				"x-auth-token": authToken,
			},
		}
		const res = await fetch(URL, config)
		if (res.status !== 200) {
			const error = await res.text()
			return showMyToast(error)
		}
		const data = await res.json()
		console.log("data", data)
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
						<TextArea
							value={createSubDescription}
							onChangeText={setCreateSubDescription}
							ml="1px"
							placeholder="My submission is..."
						/>
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
								isChecked={createSubHideSubmission}
								onChange={setCreateSubHideSubmission}
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
								isChecked={createSubAcceptedTerms}
								onChange={setCreateSubAcceptedTerms}
								accessibilityLabel="Agree to terms and conditions"
							/>
							<Text>
								Check the box to be bound by the competition rules and
								MindCraft's terms and conditions
							</Text>
						</HStack>
					</VStack>
					<VStack alignItems="center">
						<Button onPress={handleCreateSubmission}>
							<Text>Submit to Competition</Text>
						</Button>
					</VStack>
				</VStack>
			</ScrollView>
		</Box>
	)
}

export { JoinCompetitionScreen }
