import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Pressable } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function CustomTabBar({ state, descriptors, navigation }) {
	return (
		<Box
			bg="c1.900"
			position="fixed"
			zIndex={9}
			w="100%"
			borderBottomColor="#555"
			borderBottomWidth={1}
		>
			<HStack space="5" p="2" alignItems="center">
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key]
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name
					const isFocused = state.index === index
					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						})
						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name)
						}
					}
					return (
						<Pressable
							key={index.toString()}
							onPress={onPress}
							_hover={{ bg: "c1.600" }}
							borderRadius="10"
						>
							<HStack justifyContent="center">
								{isFocused && (
									<Box
										alignSelf="flex-end"
										position="absolute"
										bg="c2.500"
										w="50px"
										h="5px"
										borderRadius="10"
									/>
								)}
								<HStack p="2" rounded="10" space="2">
									{options.tabBarIcon && (
										<Icon
											as={Ionicons}
											name={options.tabBarIcon}
											size="5"
											color="c1.50"
										/>
									)}
									<Text fontSize="16" color="c1.50">
										{label}
									</Text>
								</HStack>
							</HStack>
						</Pressable>
					)
				})}
			</HStack>
		</Box>
	)
}

export { CustomTabBar }
