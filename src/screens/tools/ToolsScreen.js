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
            title: "Replicate Stability AI",
            subtitle:
                "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
            coverPhoto: "",
            url: "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png",
        },
        {
            title: "MaryTTS",
            subtitle:
                "Text-to-speech synthesis system that can generate speech from textual input in multiple languages with natural-sounding prosody and intonation",
            coverPhoto: "",
            url: "https://github.com/marytts/marytts",
        },
        {
            title: "Phenaki",
            subtitle:
                "A model for generating videos from text, with prompts that can change over time, and videos that can be as long as multiple minutes.",
            coverPhoto:
                "https://pub-bede3007802c4858abc6f742f405d4ef.r2.dev/stories/teddy_bear_2.gif",
            url: "https://phenaki.video/",
        },
        {
            title: "CLIP",
            subtitle:
                "A neural network-based model developed by OpenAI that can understand and generate images based on natural language descriptions.",
            coverPhoto: "https://picsum.photos/id/102/200/200",
            url: "https://openai.com/blog/clip/",
        },

        {
            title: "Deforum Stable Diffusion",
            subtitle:
                "Deforum Stable Diffusion is a version of Stable Diffusion focusing on creating videos and transitions of images created with Stable Diffusion. Released in 2022, Stable Diffusion is a deep learning, text-to-image model primarily used to generate detailed images conditioned on text descriptions, though can also be applied to tasks such as inpainting, outpainting, and generating image-to-image translations.",
            coverPhoto: "https://picsum.photos/id/101/200/200",
            url: "https://colab.research.google.com/github/deforum/stable-diffusion/blob/main/Deforum_Stable_Diffusion.ipynb",
        },
        {
            title: "ChatGPT",
            subtitle:
                "ChatGPT is a language model developed by OpenAI that is trained to generate human-like responses to text-based prompts. ChatGPT is designed to be used in conversational AI applications such as chatbots and virtual assistants, where it can interact with users in a natural and intuitive way. It can perform a wide range of language tasks, including answering questions, writing code, and engaging in casual conversation.",
            coverPhoto: "https://picsum.photos/id/101/200/200",
            url: "https://colab.research.google.com/github/deforum/stable-diffusion/blob/main/Deforum_Stable_Diffusion.ipynb",
        },
        {
            title: "YOLO",
            subtitle:
                "You Only Look Once (YOLO) is an object detection model that can detect objects in real-time with high accuracy.",
            coverPhoto: "",
            url: "https://pjreddie.com/darknet/yolo",
        },
        {
            title: "DALL-E",
            subtitle:
                "A neural network-based model developed by OpenAI that can generate high-quality images from textual descriptions.",
            coverPhoto: "https://picsum.photos/id/102/200/200",
            url: "https://openai.com/dall-e/",
        },
        {
            title: "Deep Voice",
            subtitle:
                "Text-to-speech synthesis model that generates natural-sounding speech from textual input",
            coverPhoto: "",
            url: "https://github.com/baidu-research/deepvoice-3",
        },
        {
            title: "SimGAN",
            subtitle:
                "SimGAN is a generative adversarial network (GAN) that can generate videos from textual descriptions. The model uses a two-stage generation process where it first generates low-resolution videos and then refines them to high resolution using a refinement network.",
            coverPhoto: "",
            url: "https://arxiv.org/abs/1612.07828",
        },
    ]

    return (
        <Box variant="screen">
            <HStack justifyContent="space-between" alignItmes="center">
                <VStack space="1" maxWidth="500px">
                    <Heading fontSize="30px">Tools</Heading>
                    <Heading fontSize="14px">
                        Here are some models to kick off your gAI adventure!
                        Using AI in your submissions isn't required but it can
                        help you win!
                    </Heading>
                </VStack>
            </HStack>
            <VStack space="1" mt="4">
                {DATA.map((toolData, index) => (
                    <ToolItem key={index.toString()} toolData={toolData} />
                ))}
            </VStack>
        </Box>
    )
}

export { ToolsScreen }
