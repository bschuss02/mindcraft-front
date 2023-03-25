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
import SignupScreen from "../screens/SignupScreen"
import { CustomDrawerContent } from "../components/navigation/CustomDrawerContent"
import { CustomHeader } from "../components/navigation/CustomHeader"
import { HomeTabNav } from "./HomeTabNav"
import { ProfileStackNav } from "./ProfileStackNav"
import { useStartup } from "../util/api/startup/useStartup"

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
					// header: ({ navigation, route, options }) => (
					// 	<CustomHeader
					// 		navigation={navigation}
					// 		route={route}
					// 		options={options}
					// 	/>
					// ),
					// drawerType: dimensions.width >= 900 ? "permanent" : "front",
					drawerType: "permanent",
					drawerStyle: {
						// width: dimensions.width >= 900 ? "20%" : "100%",
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
					name="Home"
					component={HomeTabNav}
					options={{
						drawerLabel: "Home",
						drawerIcon: "home",
					}}
				/>
				<Drawer.Screen
					name="Profile"
					component={ProfileStackNav}
					options={{ drawerLabel: "Profile", drawerIcon: "person" }}
				/>
			</Drawer.Navigator>
		</Box>
	)
}

export { DrawerNav }
