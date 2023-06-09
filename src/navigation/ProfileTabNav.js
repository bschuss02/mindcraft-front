import { useState, useEffect, useContext } from "react"
import { TouchableOpacity, View } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { Screen2 } from "../screens/Screen2"
import { CustomTabBar } from "../components/navigation/CustomTabBar"
import { AccountScreen } from "../screens/profile/AccountScreen"
import { MySubmissionsScreen } from "../screens/profile/MySubmissionsScreen"
import { MyCompetitionsScreen } from "../screens/profile/MyCompetitionsScreen"
import { ProfileTabNavBar } from "../components/bars/ProfileTabNavBar"

const Tab = createBottomTabNavigator()

function ProfileTabNav() {
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<Tab.Navigator
				tabBar={(props) => (
					<CustomTabBar {...props} topComponent={<ProfileTabNavBar />} />
				)}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tab.Screen
					name="mySubmissionsScreen"
					component={MySubmissionsScreen}
					options={{ tabBarLabel: "My Submissions" }}
				/>
				<Tab.Screen
					name="myCompetitionsScreen"
					component={MyCompetitionsScreen}
					options={{ tabBarLabel: "My Competitions" }}
				/>
				<Tab.Screen
					name="accountScreen"
					component={AccountScreen}
					options={{ tabBarLabel: "Account" }}
				/>
			</Tab.Navigator>
		</View>
	)
}

export { ProfileTabNav }
