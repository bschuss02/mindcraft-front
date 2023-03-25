import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { DisplayContext } from "../context/DisplayContext"

function Screen2() {
	const navigation = useNavigation()
	const { message } = useContext(DisplayContext)
	return (
		<Box variant="screen" mt="12">
			<Text>Screen2</Text>
			<Text>{message}</Text>
		</Box>
	)
}

export { Screen2 }
