import type { ExtendedTask } from '@/components/shared/GanttChart'

export type Event =
    | 'meeting'
    | 'task'
    | 'holiday'
    | 'breaks'
    | 'event'
    | 'workshops'
    | 'reminders'

export type Activities = Array<{
    type: string
    dateTime: number
    ticket?: string
    status?: number
    userName: string
    userImg?: string
    comment?: string
    tags?: string[]
    files?: string[]
    assignee?: string
}>

export type Project = {
    ongoingProject: number
    projectCompleted: number
    upcomingProject: number
}

export type TaskOverviewChart = {
    onGoing: number
    finished: number
    total: number
    series: {
        name: string
        data: number[]
    }[]
    range: string[]
}

export type Task = {
    id: string
    name: string
    dueDate: number
    checked: boolean
    progress: string
    priority: string
    assignee: {
        name: string
        img: string
    }
}

export type GetProjectDashboardResponse = {
    projectOverview: Project
    taskOverview: Record<string, TaskOverviewChart>
    currentTasks: Task[]
    schedule: ExtendedTask[]
    recentActivity: Activities
}

// Writing 相关的新类型
export type Period = 'daily' | 'weekly' // | 'monthly' // 暂时注释掉月度数据
export type StatisticCategory = 'wordCount' | 'writingSpeed' | 'toBeDecided'

export type MetricData = {
    total: number
    data: number[]
}

export type PeriodData = {
    wordCount: MetricData
    writingSpeed: MetricData
    toBeDecided: number
    wordCountGrowth: number
    speedGrowth: number
    toBeDecidedGrowth: number
    compareFrom: string
    labels: string[]
}

export type CategoryData = {
    daily: {
        chartData: ChartData
    }
    weekly: {
        chartData: ChartData
    }
    monthly: {
        chartData: ChartData
    }
}

export type WritingStats = {
    daily: PeriodData
    weekly: PeriodData
    // monthly: PeriodData // 暂时注释掉月度数据
}

export type WritingRadarData = {
    categories: string[]
    series: number[]
}

export type WritingSchedule = {
    id: string
    title: string
    type: 'writing' | 'planning' | 'review' | 'goal'
    time?: string
    description?: string
    date?: string
}

export type Novel = {
    id: string
    title: string
    wordCount: number
    latestChapter: string
    status: 'ongoing' | 'completed' | 'planned'
    lastUpdated: string
    progress: number
    cover: string
    genre?: string
    summary?: string
    protagonist?: string
    setting?: string
    targetAudience?: string
}

export type WritingDashboardResponse = {
    stats: WritingStats
    radarData: WritingRadarData
    schedules: WritingSchedule[]
    novels: Novel[]
}