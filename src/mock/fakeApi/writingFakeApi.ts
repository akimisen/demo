import { mock } from '../MockAdapter'

const writingDashboardData = {
    stats: {
        todayWordCount: 3500,
        writingSpeed: 35,
        toBeDecided: 15
    },
    radarData: {
        categories: ['情节构思', '人物塑造', '文字功底', '世界观构建', '节奏把控'],
        series: [85, 70, 90, 80, 75]
    },
    schedules: [
        {
            id: '1',
            title: '完成第三章修改',
            type: 'writing',
            time: '10:00',
            description: '重点修改男主角的性格描写'
        },
        {
            id: '2',
            title: '大纲规划',
            type: 'planning',
            time: '14:00',
            description: '规划下一卷的主要情节'
        },
        {
            id: '3',
            title: '每日码字目标',
            type: 'goal',
            time: '16:00',
            description: '目标3000字'
        }
    ],
    novels: [
        {
            id: '1',
            title: '星辰之主',
            wordCount: 150000,
            status: 'ongoing',
            lastUpdated: '2024-03-20',
            progress: 45,
            cover: '/img/novels/1.jpg'
        },
        {
            id: '2',
            title: '魔法编年史',
            wordCount: 320000,
            status: 'completed',
            lastUpdated: '2024-03-15',
            progress: 100,
            cover: '/img/novels/2.jpg'
        },
        {
            id: '3',
            title: '未来战记',
            wordCount: 0,
            status: 'planned',
            lastUpdated: '2024-03-10',
            progress: 0,
            cover: '/img/novels/3.jpg'
        }
    ]
}

mock.onGet('/api/kanban').reply(() => {
    return [200, writingDashboardData]
})