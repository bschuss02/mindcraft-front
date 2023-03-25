import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CompetitionsScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen">
			<Text>CompetitionsScreen</Text>
			<Button
				onPress={() => {
					console.log("navigating")
					navigation.navigate("competitions", {
						screen: "viewCompetitionTabNav",
					})
				}}
			>
				<Text>Navigate to ViewCompetitionTabNav</Text>
			</Button>
		</Box>
	)
}

export { CompetitionsScreen }
