import React, { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Input,
	Spinner,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import DefaultBar from "../components/bars/DefaultBar"
import apiCall from "../util/api/apiCall"
import showMyToast from "../util/api/showMyToast"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useStartup } from "../util/api/startup/useStartup"

function LoginScreen() {
	const navigation = useNavigation()
	const callStartup = useStartup()
	const [username, setUsername] = useState("user01")
	const [password, setPassword] = useState("asdf")
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	async function handleLogin() {
		setIsLoading(true)
		const { data, error } = await apiCall("GET", "auth/login", {
			username,
			password,
		})
		if (error) {
			setIsLoading(false)
			return showMyToast(error)
		}
		const { user, token } = data
		await AsyncStorage.setItem("authToken", token)
		await callStartup()
		navigation.navigate("Home")
		setIsLoading(false)
	}

	return (
		<Box variant="screen">
			<VStack space="5" maxW="500px">
				<DefaultBar title="Log In" />
				<VStack space="3">
					<Input
						value={username}
						onChangeText={setUsername}
						variant="notWords"
						placeholder="Username"
					/>
					<Input
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						variant="notWords"
						type={isPasswordVisible ? "text" : "password"}
						rightElement={
							<Box mr="10px">
								<TouchableOpacity
									onPress={() => setIsPasswordVisible(!isPasswordVisible)}
								>
									<Icon
										size="25px"
										as={MaterialCommunityIcons}
										name={isPasswordVisible ? "eye" : "eye-off"}
										color="primary.50"
									/>
								</TouchableOpacity>
							</Box>
						}
					/>
				</VStack>
				<VStack space="5" alignItems="center">
					<Button onPress={handleLogin}>
						<Text>Log In</Text>
					</Button>
					<HStack space={1} justifyContent="center">
						<Text>Don't have an account?</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate("SignupScreen")}
						>
							<Text color="primary.600">Sign Up</Text>
						</TouchableOpacity>
					</HStack>
					{isLoading && (
						<Box alignItems="center">
							<Text fontSize="12px" color="c1.400">
								Loading
							</Text>
							<Spinner />
						</Box>
					)}
				</VStack>
			</VStack>
		</Box>
	)
}

export { LoginScreen }
