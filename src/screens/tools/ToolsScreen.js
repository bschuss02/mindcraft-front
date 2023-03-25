import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { ToolItem } from "../../components/tools/ToolItem"

function ToolsScreen() {
	const navigation = useNavigation()
	const DATA = [
		{
			title: "Tool 1",
			subtitle: "This is tool 1",
		},
		{
			title: "Tool 2",
			subtitle: "This is a description of tool 2",
		},
	]

	return (
		<Box variant="screen">
			<HStack justifyContent="space-between" alignItmes="center">
				<VStack space="1" maxWidth="500px">
					<Heading fontSize="30px">Tools</Heading>
					<Heading fontSize="14px">
						Here are some models to kick off your gAI adventure!
					</Heading>
				</VStack>
			</HStack>
			<VStack space="1" mt="5">
				{DATA.map((toolId, index) => (
					<ToolItem key={index.toString()} toolId={toolId} />
				))}
			</VStack>
		</Box>
	)
}

export { ToolsScreen }

/*
<Pressable
            onPress={handlePress("gmail.com")}
            _hover={{ bg: "c1.800" }}
            p="2"
            borderRadius="10"
        >
            <HStack justifyContent="space-between" mx="4">
                <HStack space="3">
                    <VStack>
                        <Text fontSize="16px" maxW="400px">
                            {title}
                        </Text>
                        <Text fontSize="13px" maxW="400px" opacity={0.7}>
                            {subtitle}
                        </Text>
                    </VStack>
                </HStack>
            </HStack>
        </Pressable>
		*/
