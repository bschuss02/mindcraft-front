import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { extendTheme, NativeBaseProvider } from "native-base"
import { StyleSheet, Text, View } from "react-native"
import { MindcraftApp } from "./src/MindcraftApp"

import { themeConfig } from "./src/util/theme/themeConfig"

export default function App() {
	const theme = extendTheme(themeConfig)
	return (
		<NativeBaseProvider theme={theme}>
			<MindcraftApp />
		</NativeBaseProvider>
	)
}
