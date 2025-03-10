import type { Ticket } from './types'

export const createUID = (len: number) => {
    const buf = [],
        chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length,
        length = len || 32

    for (let i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen))
    }
    return buf.join('')
}

export const createCardObject = (): Ticket => {
    return {
        id: createUID(10),
        name: 'Untitled Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cover: '',
        members: [],
        labels: ['Task'],
        attachments: [],
        comments: [],
        dueDate: null,
    }
}

export const taskLabelColors: Record<string, string> = {
    'Live issue': 'bg-rose-200 dark:bg-rose-200 dark:text-gray-900',
    Task: 'bg-blue-200 dark:bg-blue-200 dark:text-gray-900',
    Bug: 'bg-amber-200 dark:bg-amber-200 dark:text-gray-900',
    'Low priority': 'bg-purple-200 dark:bg-purple-200 dark:text-gray-900',
}

export const labelList = ['Task', 'Bug', 'Live issue', 'Low priority']
