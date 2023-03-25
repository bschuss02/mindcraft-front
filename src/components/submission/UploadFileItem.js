import { useState, useEffect, useContext } from "react"
import { Box, Text, Button, HStack, VStack, Icon, Pressable } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { downloadFile } from "../../util/download/downloadFile"
import { DisplayContext } from "../../context/DisplayContext"

function UploadFileItem({ fileData, index }) {
	const navigation = useNavigation()
	const { selectedFiles, setSelectedFiles } = useContext(DisplayContext)
	const fileName = fileData.file.name
	const uri = fileData.uri

	function handleRemoveFile() {
		const newSelectedFiles = [...selectedFiles]
		newSelectedFiles.splice(index, 1)
		setSelectedFiles(newSelectedFiles)
	}

	return (
		<Box>
			<HStack space="2">
				<Text>{fileName}</Text>
				<TouchableOpacity onPress={handleRemoveFile}>
					<Icon as={Ionicons} name="trash-outline" color="c3.500" size="5" />
				</TouchableOpacity>
			</HStack>
		</Box>
	)
}

export { UploadFileItem }
