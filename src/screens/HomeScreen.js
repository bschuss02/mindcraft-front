import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	ScrollView,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function HomeScreen() {
	const navigation = useNavigation()
	return (
		<Box variant="screen" mt="12">
			<ScrollView>
				{[...Array(100)].map((_, index) => (
					<Text key={index.toString()}> {`Home Screen ${index}`} </Text>
				))}
			</ScrollView>
		</Box>
	)
}

export { HomeScreen }
