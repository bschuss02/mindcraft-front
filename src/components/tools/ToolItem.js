import { useState, useEffect, useContext } from "react"
import { TouchableOpacity, Linking } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Pressable,
	Image,
	Heading,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { formatDate } from "../../util/date/formatDate"

function ToolItem({ toolId }) {
	const navigation = useNavigation()
	//const { title, subtitle } = toolData
	return (
		<Pressable
			// onPress={Linking.openURL("https://www.example.com")}
			_hover={{ bg: "c1.800" }}
			p="2"
			borderRadius="10"
		>
			<HStack justifyContent="space-between" mx="4">
				<HStack space="3">
					<VStack>
						<Text fontSize="16px" maxW="400px">
							{"title"}
						</Text>
						<Text fontSize="13px" maxW="400px" opacity={0.7}>
							{"subtitle"}
						</Text>
					</VStack>
				</HStack>
			</HStack>
		</Pressable>
	)
}

export { ToolItem }
