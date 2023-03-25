import { useState, useEffect, useContext } from "react"
import { Box, Text, Button, HStack, VStack, Icon, Pressable } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { downloadFile } from "../../util/download/downloadFile"

function FileItem({ fileData }) {
	const navigation = useNavigation()
	const { fileName, uri } = fileData

	function handleDownloadFile() {
		console.log("downloading file")
		downloadFile(uri, fileName)
	}

	return (
		<Box>
			<HStack space="2">
				<Text>{fileName}</Text>
				<TouchableOpacity onPress={handleDownloadFile}>
					<Icon as={Ionicons} name="download-outline" color="c2.500" size="5" />
				</TouchableOpacity>
			</HStack>
		</Box>
	)
}

export { FileItem }
