import React, { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Icon,
	Input,
	useToast,
	Spinner,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"

import DefaultBar from "../../components/bars/DefaultBar"
import apiCall from "../../util/api/apiCall"
import showMyToast from "../../util/api/showMyToast"
import { useStartup } from "../../util/api/startup/useStartup"

export default function SignupScreen() {
	const navigation = useNavigation()
	const callStartup = useStartup()
	const [username, setUsername] = useState("user01")
	const [password, setPassword] = useState("asdf")
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	async function handleSignup() {
		setIsLoading(true)
		const signupInfo = {
			username,
			password,
		}
		const { data, error } = await apiCall("POST", "auth/signup", signupInfo)
		if (error) {
			setIsLoading(false)
			return showMyToast(error)
		}
		const { user, token } = data
		await AsyncStorage.setItem("authToken", token)
		await callStartup()
		navigation.navigate("profile", {
			screen: "profileTabNav",
		})
		setIsLoading(false)
	}

	return (
		<Box variant="screen">
			<VStack space="5" maxW="500px">
				<DefaultBar title="Sign Up" />
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
					<Button onPress={handleSignup}>
						<Text>Sign Up</Text>
					</Button>
					<HStack space={1} justifyContent="center">
						<Text>Already have an account?</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("profile", {
									screen: "loginScreen",
								})
							}
						>
							<Text color="primary.600">Log In</Text>
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
