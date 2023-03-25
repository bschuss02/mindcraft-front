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

function ToolItem({ toolData }) {
	const navigation = useNavigation()
	const { title, subtitle, coverPhoto, url } = toolData
	console.log("coverPhoto", coverPhoto)
	return (
		<Pressable
			onPress={() => Linking.openURL(url)}
			_hover={{ bg: "c1.800" }}
			p="2"
			borderRadius="10"
		>
			<HStack space="4">
				<Box>
					<Image
						source={{ uri: coverPhoto }}
						alt="Thumbnail for resource"
						w="20"
						h="20"
						borderRadius="10"
					/>
				</Box>
				<VStack>
					<Text fontSize="16px" maxW="400px">
						{title}
					</Text>
					<Text fontSize="13px" maxW="400px" opacity={0.7}>
						{subtitle}
					</Text>
				</VStack>
			</HStack>
		</Pressable>
	)
}

export { ToolItem }
