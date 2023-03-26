import { useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import apiCall from "../apiCall"
import showMyToast from "../showMyToast"
import { UserContext } from "../../../context/UserContext"
import { DisplayContext } from "../../../context/DisplayContext"

function useStartup() {
	const navigation = useNavigation()
	const { currentUser, setCurrentUser } = useContext(UserContext)
	const { setMessage, setIsStartupLoading } = useContext(DisplayContext)

	async function callStartup() {
		setIsStartupLoading(true)
		const authToken = await AsyncStorage.getItem("authToken")

		if (!authToken) {
			const { data, error } = await apiCall("GET", "startup/", {})
			if (error) {
				showMyToast(error)
			}
		} else {
			const { data, error } = await apiCall("GET", "startup/withuser", {})
			const { user } = data
			setCurrentUser(user)
			if (error) {
				showMyToast(error)
			}
		}
		setIsStartupLoading(false)
	}

	return callStartup
}

export { useStartup }
