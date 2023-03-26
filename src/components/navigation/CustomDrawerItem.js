import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Heading,
	Pressable,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CustomDrawerItem({ route, props, index }) {
	const { name } = route
	const { options } = props.descriptors[route.key]
	const label =
		options.drawerLabel !== undefined
			? options.drawerLabel
			: options.title !== undefined
			? options.title
			: name
	const isFocused = props.state.index === index

	let iconName = options.drawerIcon
	if (isFocused) {
		iconName = iconName.replace("-outline", "")
	}
	return (
		<Pressable
			borderRadius="10"
			p="2"
			_hover={{ bg: "c1.600" }}
			onPress={() => props.navigation.navigate(name)}
		>
			<HStack space="2" alignItems="center">
				<Icon
					as={Ionicons}
					name={iconName}
					size="6"
					color={isFocused ? "c2.500" : "c1.50"}
				/>
				<Text
					fontSize="18"
					fontWeight={isFocused ? "bold" : "normal"}
					color={isFocused ? "c2.500" : "c1.50"}
				>
					{label}
				</Text>
			</HStack>
		</Pressable>
	)
}

export { CustomDrawerItem }
