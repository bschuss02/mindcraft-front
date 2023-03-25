import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CreateCompetitionScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen">
			<Text>CreateCompetitionScreen</Text>
			<Button
				onPress={() => {
					console.log("navigating")
					navigation.navigate("competitions", {
						screen: "competitionsScreen",
					})
				}}
			>
				<Text>Navigate back to competitionScreen</Text>
			</Button>
		</Box>
	)
}

export { CreateCompetitionScreen }
