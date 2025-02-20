import useChatSend from '../hooks/useChatSend'
import {
    PiLightbulbDuotone,
    PiBookOpenTextDuotone,
    PiCompassDuotone,
    PiCodeDuotone,
} from 'react-icons/pi'
import type { ReactNode } from 'react'

type PromptType = 'idea' | 'guide' | 'writing' | 'coding'

const suggeustionIcon: Record<PromptType, ReactNode> = {
    idea: <PiLightbulbDuotone className="text-blue-500" />,
    guide: <PiCompassDuotone className="text-emerald-500" />,
    writing: <PiBookOpenTextDuotone className="text-amber-500" />,
    coding: <PiCodeDuotone className="text-indigo-500" />,
}

const promptSuggestion: {
    title: string
    prompt: string
    type: PromptType
}[] = [
    {
        title: 'Help me sound like an expert for an upcoming trip',
        prompt: `I'm going whale watching this weekend and want to appear knowledgeable about killer whales. Tell me a few unique and interesting facts I can share.`,
        type: 'guide',
    },
    {
        title: 'Outline an logical sales pitch for a new product',
        prompt: `Structure a sales pitch for a hair dryer that's also a microphone. Be concise and organize the sales pitch logically. `,
        type: 'writing',
    },
    {
        title: 'Help me get organized with a list of 10 tips',
        prompt: `Give me 10 tips for room organization. `,
        type: 'idea',
    },
    {
        title: 'Write code for a specific task, including edge cases',
        prompt: `Write a Java function that takes a path as an input and creates a file storing the current system date. Consider edge cases.`,
        type: 'coding',
    },
]

const ChatLandingView = () => {
    const { handleSend } = useChatSend()

    return (
        <div className="max-w-[900px] w-full mx-auto mt-20">
            <div>
                <div className="heading-text text-4xl leading-snug">
                    <span className="font-semibold bg-gradient-to-r from-indigo-500 to-red-400 bg-clip-text text-transparent text-5xl">
                        Hello, there
                    </span>
                    <br />
                    <span>How can I help you today?</span>
                </div>
                <div className="mt-8 grid grid-cols-2 xl:grid-cols-4 gap-4">
                    {promptSuggestion.map((suggestion) => (
                        <div
                            key={suggestion.title}
                            className="flex flex-col gap-4 justify-between rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-5 min-h-40 2xl:min-h-60 cursor-pointer"
                            role="button"
                            onClick={() => handleSend(suggestion.title)}
                        >
                            <h6 className="font-normal">{suggestion.title}</h6>
                            <div>
                                <div className="bg-white dark:bg-gray-800 rounded-full p-2 inline-flex">
                                    <span className="text-2xl">
                                        {suggeustionIcon[suggestion.type]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChatLandingView
