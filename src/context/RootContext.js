import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { UserContextProvider } from "./UserContext"
import { DisplayContextProvider } from "./DisplayContext"

function RootContextProvider({ children }) {
	return (
		<DisplayContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</DisplayContextProvider>
	)
}

export { RootContextProvider }
