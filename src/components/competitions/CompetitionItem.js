import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CompetitionItem() {
	const navigation = useNavigation()
	console.log("CompetitionItem")
	return (
		<Box>
			<Text>CompetitionItem</Text>
		</Box>
	)
}

export { CompetitionItem }
