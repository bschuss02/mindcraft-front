import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

function LearnScreen() {
    const navigation = useNavigation()
    return (
        <Box variant="screen">
            <HStack justifyContent="space-between" alignItems="center">
                <VStack space="1" maxWidth="500px">
                    <Heading fontSize="30px">Learn</Heading>
                    <Heading fontSize="14px">
                        Stay up to date on all things gAI and build background
                        knowledge to win competitions!
                    </Heading>
                </VStack>
            </HStack>
        </Box>
    )
}

export { LearnScreen }
