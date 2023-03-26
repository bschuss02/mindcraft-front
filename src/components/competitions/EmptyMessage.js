import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function EmptyMessage({ message }) {
	const navigation = useNavigation()
	return (
		<Box>
			<Text maxW="650px" opacity={0.7}>
				{message}
			</Text>
		</Box>
	)
}

export { EmptyMessage }
