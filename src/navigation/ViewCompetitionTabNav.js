import { useState, useEffect, useContext } from "react"
import { TouchableOpacity, View } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { Screen2 } from "../screens/Screen2"
import { CustomTabBar } from "../components/navigation/CustomTabBar"
import { CompetitionOverviewScreen } from "../screens/competitions/CompetitionOverviewScreen"
import { CompetitionRulesScreen } from "../screens/competitions/CompetitionRulesScreen"
import { CompetitionResourcesScreen } from "../screens/competitions/CompetitionResourcesScreen"
import { CompetitionSubmissionsScreen } from "../screens/competitions/CompetitionSubmissionsScreen"
import { JoinCompetitionScreen } from "../screens/competitions/JoinCompetitionScreen"

const Tab = createBottomTabNavigator()

function ViewCompetitionTabNav() {
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<Tab.Navigator
				tabBar={(props) => <CustomTabBar {...props} />}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tab.Screen
					name="competitionOverviewScreen"
					component={CompetitionOverviewScreen}
					options={{ tabBarLabel: "Overview" }}
				/>
				<Tab.Screen
					name="competitionRulesScreen"
					component={CompetitionRulesScreen}
					options={{ tabBarLabel: "Rules" }}
				/>
				<Tab.Screen
					name="competitionResourcesScreen"
					component={CompetitionResourcesScreen}
					options={{ tabBarLabel: "Resources" }}
				/>
				<Tab.Screen
					name="competitionSubmissionsScreen"
					component={CompetitionSubmissionsScreen}
					options={{ tabBarLabel: "Submissions" }}
				/>
				<Tab.Screen
					name="joinCompetitionScreen"
					component={JoinCompetitionScreen}
					options={{ tabBarLabel: "Join Competition", tabBarIcon: "add" }}
				/>
			</Tab.Navigator>
		</View>
	)
}

export { ViewCompetitionTabNav }
