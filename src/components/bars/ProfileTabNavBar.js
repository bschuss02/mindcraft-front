import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Heading,
	Image,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { BackButton } from "./BackButton"
import { UserContext } from "../../context/UserContext"

function ProfileTabNavBar() {
	const navigation = useNavigation()
	const { currentUser } = useContext(UserContext)
	if (!currentUser) return null
	const { username, pfp } = currentUser
	return (
		<Box mt="4" mx="4" h="50px">
			<HStack space="3">
				<Image
					borderRadius="100"
					source={{ uri: pfp }}
					h="10"
					w="10"
					alt="Profile Picture"
				/>
				<Heading>{username}</Heading>
			</HStack>
		</Box>
	)
}

export { ProfileTabNavBar }
