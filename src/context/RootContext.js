import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { UserContextProvider } from "./UserContext"
import { DisplayContextProvider } from "./DisplayContext"
import { CompetitionContextProvider } from "./CompetitionContext"
import { SubmissionContextProvider } from "./SubmissionContext"

function RootContextProvider({ children }) {
	return (
		<SubmissionContextProvider>
			<CompetitionContextProvider>
				<DisplayContextProvider>
					<UserContextProvider>{children}</UserContextProvider>
				</DisplayContextProvider>
			</CompetitionContextProvider>
		</SubmissionContextProvider>
	)
}

export { RootContextProvider }
