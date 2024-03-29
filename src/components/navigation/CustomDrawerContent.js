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
	Spinner,
	Heading,
	Image,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from "@react-navigation/drawer"
import { CustomDrawerItem } from "./CustomDrawerItem"
import { DisplayContext } from "../../context/DisplayContext"

function CustomDrawerContent(props) {
	const { isStartupLoading } = useContext(DisplayContext)
	const routes = props.state.routes
	return (
		<ScrollView bg="c1.900">
			<VStack p="4" space="2">
				<HStack alignItems="center">
					<Image source={require("../../../assets/2.png")} w="10" h="10" />
					<Heading fontSize="28px" ml="2" color="c3.500">
						CrowdCraft
					</Heading>
				</HStack>
				{routes.map((route, index) => (
					<CustomDrawerItem
						key={index.toString()}
						route={route}
						props={props}
						index={index}
					/>
				))}
				{isStartupLoading && (
					<Box p="2">
						<Spinner />
					</Box>
				)}
			</VStack>
		</ScrollView>
	)
}

export { CustomDrawerContent }
