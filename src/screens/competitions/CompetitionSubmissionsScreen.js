import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CompetitionSubmissionsScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen" mt="12">
			<Text>CompetitionSubmissionsScreen</Text>
		</Box>
	)
}

export { CompetitionSubmissionsScreen }
