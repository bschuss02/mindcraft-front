import { useState, useEffect, useContext, useRef } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import {
	NavigationContainer,
	DefaultTheme,
	useNavigation,
} from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { useWindowDimensions } from "react-native"
import * as Linking from "expo-linking"

import { HomeScreen } from "../screens/HomeScreen"
import SignupScreen from "../screens/profile/SignupScreen"
import { CustomDrawerContent } from "../components/navigation/CustomDrawerContent"
import { CustomHeader } from "../components/navigation/CustomHeader"
import { HomeTabNav } from "./HomeTabNav"
import { ProfileStackNav } from "./ProfileStackNav"
import { useStartup } from "../util/api/startup/useStartup"
import { CompetitionsStackNav } from "./CompetitionsStackNav"
import { ToolsScreen } from "../screens/tools/ToolsScreen"
import { LearnScreen } from "../screens/learn/LearnScreen"

const Drawer = createDrawerNavigator()

function DrawerNav() {
	const callStartup = useStartup()
	useEffect(() => {
		callStartup()
	}, [])

	return (
		<Box flex={1} bg="c1.900">
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					drawerType: "permanent",
					drawerStyle: {
						width: "250px",
						borderRightWidth: 1,
						borderRightColor: "#555",
					},
				}}
				drawerContent={CustomDrawerContent}
				drawerPosition="left"
				initialRouteName="Profile"
			>
				<Drawer.Screen
					name="competitions"
					component={CompetitionsStackNav}
					options={{
						drawerLabel: "Competitions",
						drawerIcon: "trophy-outline",
					}}
				/>
				<Drawer.Screen
					name="tools"
					component={ToolsScreen}
					options={{ drawerLabel: "Tools", drawerIcon: "hammer-outline" }}
				/>
				<Drawer.Screen
					name="learn"
					component={LearnScreen}
					options={{ drawerLabel: "Learn", drawerIcon: "school-outline" }}
				/>
				<Drawer.Screen
					name="profile"
					component={ProfileStackNav}
					options={{ drawerLabel: "Profile", drawerIcon: "person-outline" }}
				/>
			</Drawer.Navigator>
		</Box>
	)
}

export { DrawerNav }
