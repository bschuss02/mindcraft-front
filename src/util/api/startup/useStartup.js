import { useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import apiCall from "../apiCall"
import showMyToast from "../showMyToast"
import { UserContext } from "../../../context/UserContext"
import { DisplayContext } from "../../../context/DisplayContext"
import { CompetitionContext } from "../../../context/CompetitionContext"
import { SubmissionContext } from "../../../context/SubmissionContext"

function useStartup() {
	const navigation = useNavigation()
	const { currentUser, setCurrentUser } = useContext(UserContext)
	const { setMySubmissionIds, setSubmissionsMap } = useContext(
		SubmissionContext,
	)
	const { setMessage, setIsStartupLoading } = useContext(DisplayContext)
	const {
		setCompetitionsMap,
		setCompetitionFeedIds,
		setMyCompetitionIds,
	} = useContext(CompetitionContext)

	async function callStartup() {
		setIsStartupLoading(true)
		const authToken = await AsyncStorage.getItem("authToken")

		if (!authToken) {
			const { data, error } = await apiCall("GET", "startup/", {})
			if (error) {
				setIsStartupLoading(false)
				return showMyToast(error)
			}
		} else {
			const { data, error } = await apiCall("GET", "startup/withuser", {})
			if (error) {
				setIsStartupLoading(false)
				return showMyToast(error)
			}
			const { user, allCompIds, compsMap, myCompIds, mySubIds, subsMap } = data
			setCurrentUser(user)
			setCompetitionsMap(compsMap)
			setCompetitionFeedIds(allCompIds)
			setMyCompetitionIds(myCompIds)
			setMySubmissionIds(mySubIds)
			setSubmissionsMap(subsMap)
		}
		setIsStartupLoading(false)
	}

	return callStartup
}

export { useStartup }
