import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { ToolItem } from "../../components/tools/ToolItem"

function ToolsScreen() {
	const navigation = useNavigation()
	const DATA = [
		{
			title: "Tool 1",
			subtitle: "This is tool 1",
			coverPhoto: "https://picsum.photos/id/102/200/200",
			url: "https://www.google.com",
		},
		{
			title: "Tool 2",
			subtitle: "This is a description of tool 2",
			coverPhoto: "https://picsum.photos/id/101/200/200",
			url: "https://www.nytimes.com",
		},
	]

	return (
		<Box variant="screen">
			<HStack justifyContent="space-between" alignItmes="center">
				<VStack space="1" maxWidth="500px">
					<Heading fontSize="30px">Tools</Heading>
					<Heading fontSize="14px">
						Here are some models to kick off your gAI adventure! Using AI in
						your submissions isn't required but it can help you win!
					</Heading>
				</VStack>
			</HStack>
			<VStack space="1" mt="4">
				{DATA.map((toolData, index) => (
					<ToolItem key={index.toString()} toolData={toolData} />
				))}
			</VStack>
		</Box>
	)
}

export { ToolsScreen }
