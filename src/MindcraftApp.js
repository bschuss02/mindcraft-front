import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import {
	useNavigation,
	NavigationContainer,
	DefaultTheme,
} from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { DrawerNav } from "./navigation/DrawerNav"
import { RootContextProvider } from "./context/RootContext"

const MyTheme = {
	...DefaultTheme,
	colors: {
		primary: "c1.900",
	},
}
const linking = {
	// prefixes: ["https://mychat.com", "mychat://"],
	// config: {
	// screens: {
	// 	Home: "home",
	// 	Profile: "profile/:userId",
	// },
	// },
}

function MindcraftApp() {
	return (
		<RootContextProvider>
			<NavigationContainer
				documentTitle={{
					formatter: () => `Basic App`,
				}}
				theme={MyTheme}
				linking={linking}
			>
				<DrawerNav />
			</NavigationContainer>
		</RootContextProvider>
	)
}

export { MindcraftApp }
