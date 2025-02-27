import dayjs from 'dayjs'
import type { Event } from './types'

type EventSet = 'today' | 'daily' | 'weekends' | 'occasionA' | 'occasionB'

const getEvents = (date: Date, eventsSet: EventSet) => {
    const events: Record<
        EventSet,
        {
            id: string
            type: Event
            label: string
            time?: Date
        }[]
    > = {
        today: [
            {
                id: '519bd1ca-c604-4985-a25b-b17f6bb829a7',
                type: 'meeting',
                label: 'Daily standup',
                time: dayjs(date).set('hour', 10).set('minute', 0).toDate(),
            },
            {
                id: '65af2b08-eb8c-4a6a-aa49-44ad7f7d30af',
                type: 'task',
                label: 'Write daily report',
                time: dayjs(date).set('hour', 17).set('minute', 0).toDate(),
            },
            {
                id: '3f3ee64a-f639-44b8-9a64-1ff586b467e1',
                type: 'event',
                label: 'Townhall',
                time: dayjs(date).set('hour', 15).set('minute', 0).toDate(),
            },
            {
                id: 'c6cb8f7a-b726-4749-a3ae-7125202786b5',
                type: 'breaks',
                label: 'Lunch break',
                time: dayjs(date).set('hour', 12).set('minute', 0).toDate(),
            },
        ],
        daily: [
            {
                id: '519bd1ca-c604-4985-a25b-b17f6bb829a7',
                type: 'meeting',
                label: 'Stand up',
                time: dayjs(date).set('hour', 10).set('minute', 0).toDate(),
            },
            {
                id: 'c6cb8f7a-b726-4749-a3ae-7125202786b5',
                type: 'breaks',
                label: 'Lunch break',
                time: dayjs(date).set('hour', 12).set('minute', 0).toDate(),
            },
            {
                id: '65af2b08-eb8c-4a6a-aa49-44ad7f7d30af',
                type: 'task',
                label: 'Write daily report',
                time: dayjs(date).set('hour', 17).set('minute', 0).toDate(),
            },
        ],
        weekends: [
            {
                id: '65af2b08-eb8c-4a6a-aa49-44ad7f7d30af',
                type: 'holiday',
                label: 'Holiday',
            },
        ],
        occasionA: [
            {
                id: 'c6cb8f7a-b726-4749-a3ae-7125202786b5',
                type: 'breaks',
                label: 'Lunch break',
                time: dayjs(date).set('hour', 12).set('minute', 0).toDate(),
            },
            {
                id: '13404e47-2e68-44e4-a60a-588d6e62fe49',
                type: 'workshops',
                label: 'Training sessions',
                time: dayjs(date).set('hour', 14).set('minute', 0).toDate(),
            },
            {
                id: '65af2b08-eb8c-4a6a-aa49-44ad7f7d30af',
                type: 'task',
                label: 'Write daily report',
                time: dayjs(date).set('hour', 17).set('minute', 0).toDate(),
            },
        ],
        occasionB: [
            {
                id: 'c6cb8f7a-b726-4749-a3ae-7125202786b5',
                type: 'breaks',
                label: 'Lunch break',
                time: dayjs(date).set('hour', 12).set('minute', 0).toDate(),
            },
            {
                id: '13404e47-2e68-44e4-a60a-588d6e62fe49',
                type: 'workshops',
                label: 'Training sessions',
                time: dayjs(date).set('hour', 14).set('minute', 0).toDate(),
            },
            {
                id: '519bd1ca-c604-4985-a25b-b17f6bb829a7',
                type: 'meeting',
                label: 'Stand up',
                time: dayjs(date).set('hour', 13).set('minute', 0).toDate(),
            },
            {
                id: '54199930-814a-4a90-9738-c50e3d5ab20f',
                type: 'reminders',
                label: 'Team follow ups',
                time: dayjs(date).set('hour', 15).set('minute', 0).toDate(),
            },
        ],
    }
    return events[eventsSet] || []
}

export const isToday = (someDate: Date) => {
    const today = new Date()
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    )
}

const isWeekend = (someDate: Date) => {
    const dayOfWeek = someDate.getDay()
    return dayOfWeek === 6 || dayOfWeek === 0
}

export const eventGenerator = (date: Date) => {
    if (isToday(date)) {
        return getEvents(date, 'today')
    }

    if (isWeekend(date)) {
        return getEvents(date, 'weekends')
    }

    if ([2, 5, 11, 14, 16, 23, 27].includes(date.getDate())) {
        return getEvents(date, 'occasionA')
    }

    if ([3, 6, 7, 12, 15, 21, 25, 28].includes(date.getDate())) {
        return getEvents(date, 'occasionB')
    }

    return getEvents(date, 'daily')
}
