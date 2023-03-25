import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Pressable } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function BackButton({ action }) {
	const navigation = useNavigation()
	return (
		<Pressable
			onPress={action}
			_hover={{ bg: "c1.800" }}
			borderRadius="100"
			p="1"
		>
			<Icon as={<Ionicons name="arrow-back" />} size="6" color="c2.500" />
		</Pressable>
	)
}

export { BackButton }
