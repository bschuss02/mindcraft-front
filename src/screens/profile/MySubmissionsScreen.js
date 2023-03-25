import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Text, Button, HStack, VStack, Icon, Heading } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { SubmissionContext } from "../../context/SubmissionContext"
import { SubmissionItem } from "../../components/submission/SubmissionItem"

function MySubmissionsScreen() {
	const navigation = useNavigation()
	const { mySubmissionIds } = useContext(SubmissionContext)

	return (
		<Box variant="screen" mt="26">
			<VStack space="4">
				<VStack>
					<Heading fontSize="30px">My Submissions</Heading>
					<Heading fontSize="14px">
						Here is a list of all the projects that you've submitted and their
						results
					</Heading>
				</VStack>
				<VStack space="4">
					{mySubmissionIds.map((submissionId, index) => (
						<SubmissionItem
							key={index.toString()}
							submissionId={submissionId}
							showButtons
						/>
					))}
				</VStack>
			</VStack>
		</Box>
	)
}

export { MySubmissionsScreen }
