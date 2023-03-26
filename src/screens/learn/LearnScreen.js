import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { ToolItem } from "../../components/tools/ToolItem"

function LearnScreen() {
	const navigation = useNavigation()
	const DATA = [
		{
			title: "Article 1",
			subtitle: "This is article 1",
			coverPhoto: "https://picsum.photos/id/103/200/200",
			url: "https://www.google.com",
			date: new Date("2021-01-01"),
		},
		{
			title: "Article 2",
			subtitle: "This is a description of article 2",
			coverPhoto: "https://picsum.photos/id/104/200/200",
			url: "https://www.nytimes.com",
			date: new Date("2021-01-02"),
		},
	]

	return (
		<Box variant="screen">
			<HStack justifyContent="space-between" alignItmes="center">
				<VStack space="1" maxWidth="500px">
					<Heading fontSize="30px">Learn</Heading>
					<Heading fontSize="14px">
						Stay up to date on all things gAI and build background knowledge to
						win competitions!
					</Heading>
				</VStack>
			</HStack>
			<VStack space="1" mt="4">
				{DATA.map((toolData, index) => (
					<ToolItem key={index.toString()} toolData={toolData} showDate />
				))}
			</VStack>
		</Box>
	)
}

export { LearnScreen }
