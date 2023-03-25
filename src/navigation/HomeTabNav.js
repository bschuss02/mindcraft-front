import { useState, useEffect, useContext } from "react"
import { TouchableOpacity, View } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { Screen2 } from "../screens/Screen2"
import { CustomTabBar } from "../components/navigation/CustomTabBar"

const Tab = createBottomTabNavigator()

function HomeTabNav() {
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<Tab.Navigator
				tabBar={(props) => <CustomTabBar {...props} />}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tab.Screen
					name="HomeScreen"
					component={HomeScreen}
					// options={{ tabBarIcon: "list" }}
				/>
				<Tab.Screen
					name="Screen2"
					component={Screen2}
					options={{ tabBarIcon: "book" }}
				/>
			</Tab.Navigator>
		</View>
	)
}

export { HomeTabNav }
