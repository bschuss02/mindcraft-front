import { useState, useEffect, useContext } from "react"
import { TouchableOpacity } from "react-native"
import {
    Box,
    Text,
    Button,
    HStack,
    VStack,
    Icon,
    Heading,
    ScrollView,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { ToolItem } from "../../components/tools/ToolItem"

function LearnScreen() {
    const navigation = useNavigation()
    const DATA = [
        {
            title: "FEATURED: The Anatomy of an AI Art Prompt",
            subtitle: "MLearning.ai. A Practical Guide to Prompt Crafting.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TR9Vln5AVRmLUtL4Cs7g7Q.png",
            url: "https://medium.com/mlearning-ai/the-anatomy-of-an-ai-art-prompt-dcf7d124406d",
            date: new Date("September 15, 2022"),
        },

        {
            title: "Why Adobe Firefly Is A Game Changer",
            subtitle:
                "Geek Culture. FIVE Unique Features That Will Impact Generative AI.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GlnbsICbdSs6lNpkx98Vtw.png",
            url: "https://medium.com/geekculture/the-game-changing-potential-of-adobes-firefly-2f2dc9884acb",
            date: new Date("March 23, 2023"),
        },
        {
            title: "Canva unveils a series of new features, including several AI-powered tools",
            subtitle:
                "TechCrunch. Canva is introducing a series of new features, including a suite of AI-powered tools, and a new Brand Hub.",
            coverPhoto:
                "https://techcrunch.com/wp-content/uploads/2023/03/canva-logo.jpg?w=1390&crop=1",
            url: "https://techcrunch.com/2023/03/22/canva-new-features-including-suite-of-ai-powered-tools/",
            date: new Date("March 23, 2023"),
        },
        {
            title: "CodiumAI is using generative AI to help developers build code logic tests automatically",
            subtitle:
                "TechCrunch. Over his two decades of experience in the tech industry, CodiumAI co-founder and CEO Itamar Friedman has personally experienced the pain of building test suites to check his code logic. He found that while there are tools to check for code security and performance, there has been a dearth of code logic checkers.",
            coverPhoto:
                "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1356364303.jpg?w=990&crop=1",
            url: "https://techcrunch.com/2023/03/22/codiumai-is-using-generative-ai-to-help-developers-build-code-logic-tests-automatically/",
            date: new Date("March 22, 2023"),
        },
        {
            title: "The Importance of Using Text Weights in Midjourney V5",
            subtitle:
                "AI Art Creators. Elevate your prompts with V5’s latest approach.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s82ffOqgxbKlOlcO2LwqlA.png",
            url: "https://medium.com/ai-art-creators/the-importance-of-using-text-weights-in-midjourney-v5-f0d1e852278f",
            date: new Date("March 21,2023"),
        },
        {
            title: "Adobe launches generative AI tools aimed at marketers",
            subtitle:
                "TechCrunch. Coinciding with the launch of its Firefly family of generative AI models, Adobe today unveiled Adobe Sensei Generative AI Services, a set of enterprise-focused, AI-powered services across its suite of productivity apps.",
            coverPhoto:
                "https://techcrunch.com/wp-content/uploads/2017/10/gettyimages-117107663.jpg?w=990&crop=1",
            url: "https://techcrunch.com/2023/03/21/adobe-launches-generative-ai-tools-aimed-at-marketers/",
            date: new Date("March 21, 2023"),
        },
        {
            title: "Five NEW Trends In Generative AI",
            subtitle:
                "Paul DelSignore. I have never seen a technology in my lifetime that has moved as rapidly as Generative AI has.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*IyCL_k-9v1_2hYdAV2eP1g.png",
            url: "https://medium.com/generative-ai/five-new-trends-in-generative-ai-83f099c7986e",
            date: new Date("March 14, 2023"),
        },

        {
            title: "This Tool Could Protect Artists From A.I.-Generated Art That Steals Their Style",
            subtitle:
                "The New York Times. Artists want to be able to post their work online without the fear “of feeding this monster” that could replace them.",
            coverPhoto:
                "https://static01.nyt.com/images/2023/02/19/multimedia/13AI-REVOLT-ORTIZ-2-sub-mpcl/13AI-REVOLT-ORTIZ-2-sub-mpcl-jumbo.jpg?quality=75&auto=webp",
            url: "https://www.nytimes.com/2023/02/13/technology/ai-art-generator-lensa-stable-diffusion.html",
            date: new Date("February 13, 2023"),
        },
        {
            title: "AI Art Is Now In A Famous Museum",
            subtitle:
                "Paul DelSignore. Midjourney Makes Its Way To The Mauritshuis Museum.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*g-LmB14s3GaEEkAYE1mhOQ.png",
            url: "https://medium.com/generative-ai/ai-art-is-now-in-a-famous-museum-2072df54f5cd",
            date: new Date("February 28, 2023"),
        },
    ]

    return (
        <Box variant="screen">
            <ScrollView>
                <HStack justifyContent="space-between" alignItmes="center">
                    <VStack space="1" maxWidth="500px">
                        <Heading fontSize="30px">Learn</Heading>
                        <Heading fontSize="14px">
                            Stay up to date on all things gAI and build
                            background knowledge to win competitions!
                        </Heading>
                    </VStack>
                </HStack>
                <VStack space="1" mt="4">
                    {DATA.map((toolData, index) => (
                        <ToolItem
                            key={index.toString()}
                            toolData={toolData}
                            showDate
                        />
                    ))}
                </VStack>
            </ScrollView>
        </Box>
    )
}

export { LearnScreen }
