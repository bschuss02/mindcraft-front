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

function ToolsScreen() {
    const navigation = useNavigation()
    const DATA = [
        {
            title: "Replicate Stability AI",
            subtitle:
                "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
            coverPhoto:
                "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png",
            url: "https://replicate.com/stability-ai/stable-diffusion",
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
            title: "Riffusion",
            subtitle:
                "Riffusion offers a straightforward approach to music generation through the use of Stable Diffusion v1.5, which generates images of sound waves, which are then converted into music. The model is merely fine-tuned with images of spectrograms.",
            coverPhoto:
                "https://replicate.delivery/pbxt/Xkr2iGJhHkJ3K9j5B7Xa1sSbRQmPZ7d8R17WXsalRbnjbnCE/spectrogram.jpg",
            url: "https://replicate.com/riffusion/riffusion",
        },
        {
            title: "Deep Voice",
            subtitle:
                "Deep Voice is a text-to-speech synthesis model developed by Baidu Research that can generate natural-sounding human-like speech from textual input. The model uses deep learning algorithms and neural networks to learn the mapping between text and speech and can generate high-quality speech that sounds similar to a human voice.",
            coverPhoto:
                "https://avatars.githubusercontent.com/u/8051311?s=200&v=4",
            url: "https://github.com/baidu-research/deep-voice",
        },
        {
            title: "ChatGPT",
            subtitle:
                "ChatGPT is a language model developed by OpenAI that is trained to generate human-like responses to text-based prompts. ChatGPT is designed to be used in conversational AI applications such as chatbots and virtual assistants, where it can interact with users in a natural and intuitive way. It can perform a wide range of language tasks, including answering questions, writing code, and engaging in casual conversation.",
            coverPhoto:
                "data:image/png;base64,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",
            url: "https://chat.openai.com/",
        },
        {
            title: "Deforum Stable Diffusion",
            subtitle:
                "Deforum Stable Diffusion is a version of Stable Diffusion focusing on creating videos and transitions of images created with Stable Diffusion. Released in 2022, Stable Diffusion is a deep learning, text-to-image model primarily used to generate detailed images conditioned on text descriptions, though can also be applied to tasks such as inpainting, outpainting, and generating image-to-image translations.",
            coverPhoto:
                "https://styles.redditmedia.com/t5_6r4pfl/styles/communityIcon_9j685ujnlr1a1.png?width=256&v=enabled&s=096293de8a4937edb627bc5ef1000cc13cb1577e",
            url: "https://replicate.com/deforum/deforum_stable_diffusion",
        },
        {
            title: "MaryTTS",
            subtitle:
                "Text-to-speech synthesis system that can generate speech from textual input in multiple languages with natural-sounding prosody and intonation",
            coverPhoto:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPEhAPERESERERGBgQEhEPEhIPEBESGBQZGRgVGBocIS4lHB4rIBgYJjgmKy8xNTc1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJSQxPzE2MTUxNjE0MTExMTQ0NDQ0NDE0NDQ0NDQ0NDQ9NDQxNDExNDE0NDQ0NDQ0MTQxMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABgMFBwQBAv/EAEcQAAECAgMJCwoGAQUBAQAAAAEAAgMEBhExBRIhQVFhcXKxBxMWIjIzkZKhstIUNEJSVIGCk8LRFyNzg8HhYhVTY6Kz8EP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQQCA//EAB8RAQEAAgIDAQEBAAAAAAAAAAABAhEDEjEyURMhQf/aAAwDAQACEQMRAD8A2VLdKaRtlGmFDIdHcLLRDB9I58gRSikbZRphwyHR3DBjDAfSOfMs1iRHPc573FznEuc5xJLibSSrIloixHPc573FznG+c5xrJJxlfCELpyEIQgEIQgEIQgEIUkGE57gxorJ7M6AgwnPcGNFZPZnKeaGyjYUQgYXFhvnYzhGDQqiSlWwm1DC48p2M/wBJgozzx1DtClqw1qGamWQWOiRHBrGitziiamWwWOiPcGsaKySsvpJd986+oVtgtPEZlPrOynYpJtbRSO77p19QrbBaeK3L/k7OqRCF05CEIQCEIQCEIQCEIQCtLmXPv6nvHFta0+lnOZFzbnX9T3ji+i0+lnOZXaWj5vRkC9XqFHRLmJqI973ueXOc4kudUSTXaVHvzsvYF4+12k7VptHqNycaUlosSXa572Nc9xLwXOIwnAVyMz312XsCN9dl7Ate4JSHszel/wB0cEpD2ZvS/wC6f00yHfXZewI312XsC6bsSnk8xGg4mPLRq14OypcabH3vrsvYEb67L2BfC0GhlG5ePKiNMQhEdEcS0uLhUwYBYdKBB312XsCN9dl7Ate4JSHszes/7o4JSHszel/3T+mmQ767L2BX1HHVtiE21tFdQsqKhpjJQ5ebfChMDGBrCGgkisjDapaM8mLrN2FIVdq3ozzx1DtCqFb0Z546h2hVI5N0SIQJdtZvTfuLcRIvaiek9KSOjoCdd0W2V+P6UlLTxydZ/Gfkt7UdHQEdHQEIXfWfHHa/R0dAR0dAUktAdFeyGzlPcGDSStNh0Xkw1oMBriAAXEvrJAtOFcZ5Y4+Y7xxyy8Vl3R0BHR0BarwYkvZ29L/ukOlNzBKzLmsbew3gPYLQAcBb7iD7iExzxyupFyxyxm9qbo6Ajo6AhC76z447X6OjoC+4OF7AQKi5osGUL4X3A5bNZveCXGfCZX6aEIQsjWEIQgRn8p2k7VstFPMZP9JmxY0+12k7VstFPMZP9JmxcKtkKGbiFkOI8Wta5w0hpKJaMIjGRBY9oeNBFaozTdGlLybZFAwRmAnJfsN6ey86UprTt0eT3yVbFAwwXgnUeL09t70LMVEAFeDLgW4XIlBLy8GCPQY1p01Ye2tZHRiU8onJaHVW2/v3V2XjAXmvq1e9bSqoQuRk2HR3QB6DGvPxOIGxdaDJqf8An8TUh91R0Z5MXS3YVJT/AM/iakPuqOjPJi6zdhSJV2rejPPHUO0KoVvRnnjqHaF0kcW6NbK/H9KSU7bo1sr8f0pJWnj9YzcntQherxejg1UEkN8jujuFYhCoa7v6r6VoipKKSHk8rDBFT3/mPy1uwge4VK4iPDWucTUGgknIAKyseeXbJrwx64vtLFOLn77LiK0caAb7PeHA4bD7lc3Jug2ahMjNFQdWCLS0gkEdi6o0MPa5jhW1wLSMxC5luOS2TKMVQuq6MqYEWJBdaxxbpGI9C5ltZHi+4HLZrN7wXwpIHLZrN7wS+CGhCELG2BCEIEZ9rtJ2rZaKeYyf6TNixp9rtJ2rZaKeYyf6TNi4V3XQ5mNqP7pVLQWc36Rggmt0KuCfhPF/6lquroczG1H90pG3MZqozMuTaGxWjRxXfSqHO7MoJiXjwT6bHAaaqx2rECCMBtGA6Vvqxak0pvE3MMqqF+Xt1XYRtQMO5nJ30WPMGxjRDbrPNZ7GjpWkJZoDJ71JseRU6K4xDosHYFe3RmRAgxYxshsc/qtJqQL9HZvf5+6Tq6wwshNzBhcNtaaVn25i4ufNOOEkMJOUkuJWgoMmp/5/E1IfdUdGeTF0t2FSU/8AP4mpD7qjozyYuluwpEq7VvRnnjqHaFUK3ozzx1DtCqRxbo1sr8f0pJTtujWyvx/SklauP1jNye1CsrgSHlMzChEVtrv36jcJ6bPeq1PlAJC9ZEmSMLzeM1Rb27FeTLrjtMJ2y0cUv0znd5lXNBqdFO9irIcLuwJhWbU6nt9mRCB4sFt6cl+7CeyodKzcc3k08l1isNz6eqMWWJt/NYM9jhsTysfuNO+TR4UauoNcA7UOB3Ytea4EAiw4QuubHWW/rniy3NfCJugSF6+HMtGB35b9YYWn3isfCk5a5d2REzLxYWMi+bme3CNiyQggkHARgIyFevFlvHXx58uOrv68X3A5bNZveC+FJA5cPWb3gvSvOGhCELG2PEL1CBGfa7Sdq2SinmMp+kzYsbfa7Sdq2SinmMp+kzYuB33Q5mNqP7pWT0Km95nYJxRK4Z+IYO2paxdDmY2o/ulYZLxSxzHttYQ8aQa1Vb4s43RpAmYlojRzw3rPftcKuxw6FoMtGERjIgIIe0OBFmEVrkunc1syZcu//CK2MM96HC90GvsQdEjLiDDhwh6DWswZgl/dAm97k3MFsZzYfurvjs7U0LOd0ybvokCADgY0vIzuNQ7Agk3L+VNaGbXLQlnu5fyprQza5aEgyan/AJ/E1IfdUdGeTF1m7CpKf+fxNSH3VHRnkxdZuwpEq7VvRnnjqHaFUK3ozzx1DtCqRxbo1sr8f0pKTrui2yvx/SklauP1jNye1fcNhe5rGitzyGNAxuJqA6StgubKCBChwW2MaG4MZxnprSBQeQ36Z3wjiQBfZi84G/yfcFpS8ua/3T14Z/NoZiJvbHPqJvQXVAVk1CwBZJHlZiI98R0GMXPcXuO9vtcazizrYULjDPr/AI7zw7Ma8gjf7MX5b/stLorHfElYYiNe18P8twe0tJveScNuAjDlrV0hXPk7TWkxw63ewstpdI7xNPqFTIn5jcmG0dK1JLFObn77L760caAb41eocDujAfcU4stZHJNxnCkgctms3vBRr7gctms3vBaqzQ0oQhY2wIQhAjPtdpO1bLRTzGT/AEmbFjT7XaTtWy0U8xk/0mbFwruuhzMbUf3SsKC3W6HMxtR/dKwkKjXKCTe+yMIV8aEXQXZr08X/AKlqYlnu5jN1OmZcnAQ2M0ZxxXbWdC0JALGaWTe/zkw8GtrXb23Qzi7a1rl0poQIMaMcIhsc+qyuppNSw1zi4lxNZOEnKThJQPW5fyprQza5aEs93L+VNaGbXLQkGTU/8/iakPuqOjPJi6W7CpKf+fxNSH3VHRnkxdLdhSeUq7VvRnnjqHaFUJho5JPaTGdgBF60G01kYdGBVIqN0a2V+P6Ukp23RrZb4/pSrceSMxHhQRY93GqxMGFx6AVp47rBn5JvNoVDZDeJZriKnxfzHZajyR0JgXwxoaAAKgBUBkAXHdmdEvAixsbWm91jgb21LNbcq0STGKCfpo2DFiQhBLwxxZfX4FZGA4Ksta5+Hg9mPXH2SQTXhOEnCSbSV4tX5Ys/65Hjh4PZz1x9kcPB7OeuPskdCflj8P0y+tnk5hsaGyK3kvaHj3hfcWGHtc1wra4FpGUEVFKtAboX8J8u48aEb5uo77Or6Qm5Zcp1y00Y3tNsbujKGXixILq+I4tFeNuI9Chgctms3vBN26BIXr4cy0YH/lvP+QwtPRX0JQgctms3vBa8cu2O2bKdctGlCFNKSz4zwxorJtOIDKVlakKEw8G/+X/r/aFBkr7XaTtWg3DplKS8tLwHiJfw2NY69ZWKwMRrVU6gE2STvkDCSeU/wrz8P5v14HXf4Vyq/mqcyb4cRgEWtzXNFbMFZaQMazMJt/D+b9eB13+FH4fzfrwOu/woKijF1GycyyM+u8Ac14aKzekZNNSfOHsnki/L/tLX4fzfrwOu/wAKPw/m/Xgdd/hQd1KKXwJmVfAg34e8tDr9t6LwODjhrzAe9Iibfw/m/Xgdd/hR+H8368Drv8KCChd3IMi6OY1/xw0NvW31lddfSmzh7J5Ivy/7S3+H85/uQOs/wrz8P5v14HXf4VRU0qujDm5p8eHfXjmsaL8XpraMOBdNGeTF0t2FdvACb9eB1n+FX9GKJPlS8zDmOBIc1sMkgkV8qsBIjruLci/qixBxLWsPpZzmTMheopG3RrZX4/oVRRS6UCUe+LGvy8tvGXjb4AE1uJz4B2prpZcOLO7zvbmC8vr6/JHKvaqqgciXeA8168HrP8K0Y3Hpq14ZY5dtyGDhrKZIvU/tUNKqRsm4bIUG+Db6+ffC9rqsC+eA8168HrP8KOA8168HrP8ACmM45d7Lc7NaLC8TRwHmvXg9Z/hRwHmvXg9Z/hXffH68umXwroTRwHmvXg9Z/hRwHmvXg9Z/hV/TH6dMviro7dPySYbFdXeEFjw3CS0/2AfcnThrKZIvU/tL/Aea9eD1n+FHAea9eD1n+FcZdMru16Y98ZqRYXcpLKTUvEg1RL5wrYSzAHjC025dqS5fls1m94Jk4DzXrwes/wAK+4VCpoOaS+DUCCeM+wHVSXDGalSzLK7sTyss+M8MaKybTiAylONz5FsBt63CTynG0lFz5Fkuy9bhJ5TsbiuxZ2jQQhCivFDNTLILHRIjg1jRWSUTUyyCx0SI4NY0VlxWX0ju++dfUK2wWniMxn/J2fYrJtLV7Ep7xnXsvW2vilz71xGIkVYF5w/d7MPmHwpIQutRN078P3ezD5h8KOH7vZh8w+FJCFNQ3Tvw/d7MPmHwo4fu9mHzD4UkITUN078P3ezD5h8KOH7vZh8w+FJCE1DdO/D93sw+YfCjh+72YfMPhSQhNQ3Tvw+Psw+YfCru4F3nzjiDBEJt7fNN+XE1EYqhgwpBuZc+/qe8cX0Wn0s5zJyozzx1DtCXRKbEIStSqkolgYEEh0dwwm0QwcZz5ly6TUgpTDk3CG1u+xLXNDr0MGc1HDmVPw/Psw+YfCkp7y4lziXOJrJJrJOUr5XWnOzvw/d7MPmHwo4fu9mHzD4UkITUN078P3ezD5h8KOH7vZh8w+FJCE1DdO/D93sw+YfCjh+fZh8w+FJCE1DdO/D93sw+YfCjh+72YfMPhSQhXUN078Pj7MPmHwqSXpu+I4NbKgn9Q1AZTxUky8B0RwY0Vk9AGUpjlJVsJt63CcbsZKlkN0zcJXf7Q6x+yEvoUVXUku5EnXlorbBYeK3L/k7OqS9X3EtOk7V7DYXuawWuIaK7KyagtX54s36ZI71F6mXgZN5IXXP2RwLm8kLrn7LjWH11vP4Wr1F6mXgXN5IXXP2RwLm8kLrn7JrD6ds/havUXqYzQ2cHowzof/S5ZijM5DBJgOcB6ha/sBrV1h9N5/FNeovV9vYWEtc0tcLWuBa4aQV8rr88XP6ZPL1d9ypMPJe7CGVcXKc64VcXD5L9I2FcZ4SY7jrHO3LS0VvRnnjqHaFUK3ozzx1DtC8HtE9MbvGRhsawfmRr4NdiaBVWdOELMXzN8S5xLnONZJwkk4ynLdQtlP3PoSNLQTEexgLWl5DQXm9YCTgrOIKb0tS783Ojfm51f8BJ3JB+afCjgJO5IPzT4Ve1TSg35udG/NzqKZgPhPfCe29cxxa4HEQo07U06d+bnRvzc65kJ2pp0783Ojfm51Y3JovNTkPfoTWBlZaDEcWF1VpGCzF7l3cBJ3JB+afCnamlBvzc69Y8Oc1otcQ0aSal1XZuDGkQzfjDrfXetY8udULTVVYq+W5cPXb3gnamjhKSrYTb0W43YyVOhCqhCEIFWJadJ2qaQ52Drs74UMS06TtU0hzsHXZ3wtl8Mc8tlC9QFw3YjuhS8eIw1OYxzmmoGogZCsXltt07kLLuFs7/ALrflw/sjhbO/wC635cP7L0/HJ5fti1BCzKHTGcaQS9jxkcxoB6KinKjl32zrXAtvIrOU2usEes3MucuPLGbdTkxt06rr3HhTjCyI0V1cV4HHYcxyZllt0ZF8tEdBfymm0WObicMxWxpL3QZQFsGOBhBMN2g4R/9nXXFlZdOeXHc2RlcXD5L9I2FU6uLh8l+kbCvbk9Xjx+y0VvRnnjqHaFUK3ozzx1DtCytMVW6hbKfufSkJPu6hbKfufSkJcq1WhF2/KoO9PdXGggNdXa5nou/hNCw+490XycZkwy1h4za6g9h5TTpHbUVtEnNsjw2RWGtjwHNOnEc6qkrdEuLWBPQxhFTItWMWNd/HQs/W8TEFsRjobwHNeC1zTYQRhWMXeuW6SjvgOwtBvobvXhnkn+DnCCuXbce5z5uNDgMr454x9Vg5TuhcS0+gVxd4g+UPbVEjisV2sh4hpNvQoholJZsGGyEwVMYA1oGQImY7YTHRHkNYwFzibAAFMs73Q7t37hIw3cVpDoxHpO9FugW6asiqle711XTsd8d1YB4sNvqsFg/lcUty4eu3vBRqSW5cPXb3goh3QhC7AhCECrEtOk7VNIc7B12d8KGJadJ2qaQ52Drs74Wy+GOeWzBVtIfNJn9N2xWQXHdaXdGgRoTar57S1tZqFZCxTy2Xwx1CZOBc3/x9Zeihc3/AMfX/pa++P1l6ZfC0magbXeVEiwMdfaKxV2r7h0HmSeNEhNGlzv4TdcC4bJFhDSXvdy3kVE1WADEFxnyY9dR3hhl23VulenzwJUDGYjavdWmhZ3Tu6QixWS7DW2DWXkYRvhxe4bV48c3lHryXWJVVxcPkv0jYVTq4uHyX6RsK0cnqz8fstFb0Z546h2hVCt6M88dQ7QsrTFVuoWyn7n0pCT7uoWyn7n0pCXKhOm59dze3+RxHcWIa4ZNjX42+/aktetcQQQSCMIIwEEWEIN8SzTa4vlcAxGNrjQa3Nqtc30m/wA+5dVFLtCdl2vcRvrOJFAwcb1tBtV4qrHqJXG8tmGtcPyodT4mQivAz3n+VsAFQqGCrAFxXOuZCld83pt7vrzEdZacQzDEF2PcGgucagBWSbABjQVFJrsNkZd0TBvjuJDblecegWrHYj3Pc57iXOcS5zjaSbSrilN2TPTDng/lsrZCH+NeF2kn+FSqIFJLcuHrt7wUakluXD1294IHdCELsCEIQKsS06TtU0hzsHXZ3woYlp0nappDnYOuzvhbL4Y55bMEIC4LtxXQ5aO9pLXNY4tItBqtWHW62W6dy9WTMpFODD5Q86SCmKj9L3Oe2DM3tTuK2KBe1OxBwyZ16XiykcTlxtO64py6cCBXvsVjCMRcL7otXYqm7dwYU403wDYgHFiNHGBz5RmXE1v+u7vX8Ll26aXwMOVBFeAxnCo1f4N/k9CTCScJNZOEk4SSum6Mi+WiOhRG1ObjHJcMTmnGFyrXhjJP4y55W3+hXFw+S/SNhVOri4fJfpGwqcnqcfstFb0Z546h2hVCt6M88dQ7QsrTFVuoWyn7n0pCT7uoWyn7n0pCXKhCEILajV2HSMdsTCYbuJEaMbDjGcWrZIURr2tc0hzXAOaRhBBFYKwVa9QkkyEtWa6g4Ycge6oKqv0j7oN3N7aJKGeO8X0Uj0YeJuk7NKeVilJXEzk2Sa/zXjDkDiAOhBWIQhRApJblw9dveCjUkty4eu3vBA7rxeoXYEIQgVYlp0nappDnYOuzvhQxLTpO1TSHOwddnfC2Xwxzy2YKtpD5pM6jtisgq2kPmkzqO2LFPMbMvFZGhCFuYmiUMu3v7PJ4h/Mhjik2vYP5CaVjMnNPgRGRWGp7DfA7QcxGBazcm6DJqEyMzGMLcbXY2lZeXDV3Gniy3NVwUouMJyEb0fmsrcw5crfesvIqrBBBGAg4CDkW2LPqcXH3t/lTBxIhqiAWNfl9+1Xiz/yueXH/AGFNXFw+S/SNhVOri4fJfpGwr15PV58fstFb0Z546h2hVCt6M887UO0LK0xVbqFsp+59KQk+7qFsp+59KQlyoQhCAWvUH8wl/j/9HLIVr1B/MJf4/wD0cgYFiVIvPJv9WJ3ytsWJ0i88m/1YnfKqq5CEKIFJLcuHrt7wUakluXD1294IHdCELseIX3vbvVd0FCBTiWnSdqmkOdg67O+FDEtOk7V41xBBBqIwgg1EHKFsY22BV1IfNZn9N2xZf/qsz7TH+dE+6+X3RjvBa6PGc04C10V7mkZCCcK8Jw2Xy9ryyzw5UIQtDwCvqKXZ8ki3jz+TEIa/Ix2J/wB8yoULnKSzVWWy7jbQoJ2VZHhvhPFbXio/cZ1kjLpzDQGtmIwAFQAivAAFgArXv+qzPtMf50T7rw/G/Xt+0+Pm6Uk6WivgPtacBxOb6LhpC7rh8l+kbCquPMxIhDnve8jAC97nkDJWSrqjMs+MXsYKySKziAqOEr15PT+uMPb+LSUlnxnhjRWTacQGUpxufIsl2XrcJPKdjcUXPkWy7b1uEnC52Nx+y61kaZGf7qFsp+59KQk+7qFsp+59KQlAIQhALXqD+YS/x/8Ao5ZCuqDdKYhtDGTEaGwWNZFiMaMeAA1BBuixOkXnk3+q/vlRf6xNe1THz4niXG95eS9zi5zjW5ziXOcTaSTaUV4hCEQKSW5cPXb3go1JLcuHrt7wQO5V9cW5F9VFijBa1px5zmRcW5F9VFijBa1px5zmTIurSQVIQvVFZA+06TtXiELaxBCEKgQhCAQhCgEIQgE40DsmNLdhXiFxy+r04/Y4IQhZWkjbo1sr8f0pJQhRAhCEAhCFQIQhQCEIVAppTnIeuzvheoUGzr1CFVCEIQf/2Q==",
            url: "https://github.com/marytts/marytts",
        },

        {
            title: "YOLO",
            subtitle:
                "You Only Look Once (YOLO) is an object detection model that can detect objects in real-time with high accuracy.",
            coverPhoto: "https://pjreddie.com/media/image/yologo_2.png",
            url: "https://pjreddie.com/darknet/yolo",
        },
        {
            title: "PaLM + MakerSuite",
            subtitle:
                "Short for Pathways Language Model, Google's large language model (LLM) power MakerSuite, which allows for prompt iteration, augmenting datasets, and tuning custom models for search engines, digital assistants, and more.",
            coverPhoto:
                "https://images.indianexpress.com/2023/03/Google-PaLM.jpg",
            url: "https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html",
        },
        {
            title: "SimGAN",
            subtitle:
                "SimGAN is a generative adversarial network (GAN) that can generate videos from textual descriptions. The model uses a two-stage generation process where it first generates low-resolution videos and then refines them to high resolution using a refinement network.",
            coverPhoto:
                "https://miro.medium.com/v2/resize:fit:529/1*nOz1fsnT2C6wbqFh78W8pA.png",
            url: "https://arxiv.org/abs/1612.07828",
        },
    ]

    return (
        <Box variant="screen">
            <ScrollView>
                <HStack justifyContent="space-between" alignItmes="center">
                    <VStack space="1" maxWidth="500px">
                        <Heading fontSize="30px">Tools</Heading>
                        <Heading fontSize="14px">
                            Here are some models to kick off your gAI adventure!
                            Using AI in your submissions isn't required but it
                            can certainly help you win!
                        </Heading>
                    </VStack>
                </HStack>
                <VStack space="1" mt="4">
                    {DATA.map((toolData, index) => (
                        <ToolItem key={index.toString()} toolData={toolData} />
                    ))}
                </VStack>
            </ScrollView>
        </Box>
    )
}

export { ToolsScreen }
