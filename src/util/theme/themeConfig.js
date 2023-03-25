import { CheckIcon, Icon } from "native-base"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const themeConfig = {
	components: {
		Box: {
			variants: {
				screen: { bg: "c1.900", flex: 1, safeArea: true, p: "3" },
				center: { alignItems: "center", justifyContent: "center" },
			},
		},
		Text: {
			defaultProps: {
				color: "c1.50",
			},
		},
		Heading: {
			defaultProps: { fontSize: "30px", color: "c1.50" },
		},
		Input: {
			defaultProps: {
				selectionColor: "c1.50",
				placeholderTextColor: "c1.900",
				color: "c1.50",
				backgroundColor: "c1.600",
				borderWidth: 0,
				borderRadius: 10,
				fontSize: 14,
				px: "2",
				py: "12px",
				keyboardAppearance: "dark",
			},
			variants: {
				notWords: {
					autoCapitalize: "none",
					autoComplete: "off",
					autoCorrect: false,
				},
			},
		},
		TextArea: {
			defaultProps: {
				selectionColor: "c1.50",
				placeholderTextColor: "c1.900",
				color: "c1.50",
				backgroundColor: "c1.700",
				borderWidth: 0,
				borderRadius: 10,
				fontSize: 14,
				px: "2",
				py: "12px",
				keyboardAppearance: "dark",
				maxW: "600px",
			},
		},
		Button: {
			defaultProps: { color: "c1.900", maxWidth: "300px" },
		},
		Select: {
			defaultProps: {
				placeholderTextColor: "c1.100",
				dropdownIcon: (
					<Icon
						color="c1.50"
						as={MaterialCommunityIcons}
						name="chevron-down"
						mr="5px"
						size="7"
					/>
				),
				_selectedItem: {
					endIcon: <CheckIcon color="c3.500" size="5" />,
				},
				padding: "10px",
				color: "red.50",
			},
		},
		ScrollView: {
			defaultProps: {
				keyboardShouldPersistTaps: "handled",
			},
		},
	},
	colors: {
		c1: {
			50: "#f2f2f2", // text
			100: "#d9d9d9",
			200: "#bfbfbf",
			300: "#a6a6a6",
			400: "#8c8c8c",
			500: "#737373", // muted / secondary background
			600: "#595959",
			700: "#404040",
			800: "#262626",
			900: "#0d0d0d", // background
		},
		c2: {
			50: "##ecfeff",
			100: "#cffafe",
			200: "#a5f3fc",
			300: "#67e8f9",
			400: "#22d3ee",
			500: "#06b6d4", // buttons
			600: "#0891b2",
			700: "#0e7490",
			800: "#155e75",
			900: "#164e63",
		},
		c3: {
			// TODO change to purple
			50: "##fdf2f8",
			100: "#fce7f3",
			200: "#fbcfe8",
			300: "#f9a8d4",
			400: "#f472b6",
			500: "#ec4899",
			600: "#db2777",
			700: "#be185d",
			800: "#9d174d",
			900: "#831843",
		},
	},
	space: {
		"1": "5",
		"2": "10",
		"3": "15",
		"4": "20",
		"5": "25",
		"6": "30",
		"7": "35",
		"8": "40",
		"9": "45",
		"10": "50",
		"11": "55",
		"12": "60",
		"13": "65",
		"14": "70",
		"15": "75",
		"16": "80",
		"17": "85",
		"18": "90",
		"19": "95",
		"20": "100",
		"21": "105",
		"22": "110",
		"23": "115",
		"24": "120",
		"25": "125",
		"26": "130",
		"27": "135",
		"28": "140",
		"29": "145",
		"30": "150",
		"31": "155",
		"32": "160",
		"33": "165",
		"34": "170",
		"35": "175",
		"36": "180",
		"37": "185",
		"38": "190",
		"39": "195",
		"40": "200",
	},
	sizes: {
		"1": "5",
		"2": "10",
		"3": "15",
		"4": "20",
		"5": "25",
		"6": "30",
		"7": "35",
		"8": "40",
		"9": "45",
		"10": "50",
		"11": "55",
		"12": "60",
		"13": "65",
		"14": "70",
		"15": "75",
		"16": "80",
		"17": "85",
		"18": "90",
		"19": "95",
		"20": "100",
		"21": "105",
		"22": "110",
		"23": "115",
		"24": "120",
		"25": "125",
		"26": "130",
		"27": "135",
		"28": "140",
		"29": "145",
		"30": "150",
		"31": "155",
		"32": "160",
		"33": "165",
		"34": "170",
		"35": "175",
		"36": "180",
		"37": "185",
		"38": "190",
		"39": "195",
		"40": "200",
	},
}

export { themeConfig }
