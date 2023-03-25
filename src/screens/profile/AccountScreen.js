import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { UserContext } from "../../context/UserContext"

function AccountScreen() {
	const navigation = useNavigation()
	const { currentUser, setCurrentUser } = useContext(UserContext)

	async function handleSignOut() {
		try {
			await AsyncStorage.removeItem("authToken")
			setCurrentUser(null)
			navigation.navigate("profile", { screen: "signupScreen" })
		} catch (error) {
			console.error("Error signing out...: ", error)
		}
	}

	if (currentUser) {
		const { username } = currentUser
		return (
			<Box variant="screen" mt="26">
				<Button onPress={handleSignOut}>
					<Text>Sign Out</Text>
				</Button>
			</Box>
		)
	} else {
		return (
			<Box variant="screen" mt="12">
				<Text>Login to view your profile</Text>
				<Button onPress={() => navigation.navigate("signupScreen")}>
					<Text>Log In</Text>
				</Button>
			</Box>
		)
	}
}

export { AccountScreen }
