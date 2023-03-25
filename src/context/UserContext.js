import { useState, useEffect, useContext, createContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const UserContext = createContext()

function UserContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null)

	const stateVars = {
		currentUser,
	}
	const stateSetters = {
		setCurrentUser,
	}
	return (
		<UserContext.Provider value={{ ...stateVars, ...stateSetters }}>
			{children}
		</UserContext.Provider>
	)
}

export { UserContextProvider, UserContext }
