import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStackNavigator } from "@react-navigation/stack"

import SignupScreen from "../screens/profile/SignupScreen"
import { LoginScreen } from "../screens/profile/LoginScreen"
import { ProfileScreen } from "../screens/ProfileScreen"
import { UserContext } from "../context/UserContext"
import { ProfileTabNav } from "./ProfileTabNav"

const Stack = createStackNavigator()

function ProfileStackNav() {
	const { currentUser } = useContext(UserContext)
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{!currentUser && (
				<Stack.Group>
					<Stack.Screen name="signupScreen" component={SignupScreen} />
					<Stack.Screen name="loginScreen" component={LoginScreen} />
				</Stack.Group>
			)}
			<Stack.Screen name="profileTabNav" component={ProfileTabNav} />
		</Stack.Navigator>
	)
}

export { ProfileStackNav }
