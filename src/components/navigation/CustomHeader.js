import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { getHeaderTitle } from "@react-navigation/elements"

function CustomHeader({ navigation, route, options }) {
	const title = getHeaderTitle(options, route.name)
	const label = route.name
	const drawerLabel = options.drawerLabel
	return (
		<HStack bg="c1.700" h="50px" px="3" pt="1">
			<Heading fontSize="20">{drawerLabel}</Heading>
		</HStack>
	)
}

export { CustomHeader }
