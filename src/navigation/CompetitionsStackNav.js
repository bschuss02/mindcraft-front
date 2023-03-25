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
import { CompetitionsScreen } from "../screens/competitions/CompetitionsScreen"
import { ViewCompetitionTabNav } from "./ViewCompetitionTabNav"
import { CreateCompetitionScreen } from "../screens/competitions/CreateCompetitionScreen"

const Stack = createStackNavigator()

function CompetitionsStackNav() {
	const { currentUser } = useContext(UserContext)
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="competitionsScreen" component={CompetitionsScreen} />
			<Stack.Screen
				name="createCompetitionScreen"
				component={CreateCompetitionScreen}
			/>
			<Stack.Screen
				name="viewCompetitionTabNav"
				component={ViewCompetitionTabNav}
			/>
		</Stack.Navigator>
	)
}

export { CompetitionsStackNav }
