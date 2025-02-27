import { mock } from '../MockAdapter'
import dayjs from 'dayjs'

// 获取当前日期的格式化字符串 (YYYY-MM-DD)
const getCurrentDateString = () => {
    return dayjs().format('YYYY-MM-DD')
}

// 生成混合图表数据的辅助函数
const generateMixedChartData = (days: number, isDaily: boolean) => {
    const wordCountData = []
    const speedData = []
    const labels = []
    const today = new Date()
    
    // 从今天开始往前推days-1天
    for (let i = days - 1; i >= 0; i--) {
        const day = new Date(today)
        day.setDate(today.getDate() - i)
        labels.push(day.toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' }))
        
        // 字数数据 - 柱状图 (日均1000-4000字)
        wordCountData.push(Math.round(1000 + Math.random() * 3000))
        
        // 速度数据 - 折线图 (每小时20-50字)
        speedData.push(Math.round(20 + Math.random() * 30))
    }
    
    // 计算总字数
    const totalWordCount = wordCountData.reduce((sum, val) => sum + val, 0)
    
    // 计算平均速度
    const avgSpeed = Math.round(speedData.reduce((sum, val) => sum + val, 0) / speedData.length)
    
    return {
        wordCount: {
            // 日视图显示当日字数，周视图显示累计字数
            total: isDaily ? wordCountData[wordCountData.length - 1] : totalWordCount,
            data: wordCountData
        },
        writingSpeed: {
            total: avgSpeed,
            data: speedData
        },
        labels
    }
}

const currentDate = getCurrentDateString()

const writingDashboardData = {
    stats: {
        daily: {
            ...generateMixedChartData(7, true),
            toBeDecided: 15,
            wordCountGrowth: 12.5,
            speedGrowth: 8.3,
            toBeDecidedGrowth: -5.2,
            compareFrom: '较昨日'
        },
        weekly: {
            ...generateMixedChartData(7, false),
            toBeDecided: 45,
            wordCountGrowth: 8.7,
            speedGrowth: 5.1,
            toBeDecidedGrowth: 2.3,
            compareFrom: '较上周'
        },
        // 暂时注释掉月度数据
        // monthly: {
        //     ...generateMixedChartData(30),
        //     toBeDecided: 120,
        //     wordCountGrowth: 15.2,
        //     speedGrowth: -2.5,
        //     toBeDecidedGrowth: 10.8,
        //     compareFrom: '较上月'
        // }
    },
    radarData: {
        categories: ['情节', '人物', '文笔', '设定', '爽感', '速度'],
        series: [85, 70, 49, 75, 99, 85]
    },
    schedules: [
        {
            id: '1',
            title: '完成第三章修改',
            type: 'writing',
            time: '10:00',
            description: '重点修改男主角的性格描写',
            date: currentDate
        },
        {
            id: '2',
            title: '大纲规划',
            type: 'planning',
            time: '14:00',
            description: '规划下一卷的主要情节',
            date: currentDate
        },
        {
            id: '3',
            title: '每日码字目标',
            type: 'goal',
            time: '16:00',
            description: '目标3000字',
            date: currentDate
        }
    ],
    novels: [
        {
            id: '1',
            title: '星辰之主',
            wordCount: 150000,
            latestChapter: '第十章：星空之战',
            status: 'ongoing',
            lastUpdated: '2024-03-20',
            progress: 45,
            cover: '/img/avatars/thumb-1.jpg',
            genre: '科幻',
            summary: '一个平凡少年意外获得星辰之力，踏上征服宇宙之路',
            protagonist: '林天阳',
            setting: '未来宇宙',
            targetAudience: '科幻爱好者'
        },
        {
            id: '2',
            title: '魔法编年史',
            wordCount: 320000,
            latestChapter: '第十五章：魔法的秘密',
            status: 'completed',
            lastUpdated: '2024-03-15',
            progress: 10,
            cover: '/img/avatars/thumb-2.jpg',
            genre: '奇幻',
            summary: '记录魔法世界千年历史的编年史诗',
            protagonist: '艾伦·法师',
            setting: '中世纪魔法世界',
            targetAudience: '奇幻文学爱好者'
        },
        {
            id: '3',
            title: '未来战记',
            wordCount: 50000,
            latestChapter: '第三章：未来的开始',
            status: 'ongoing',
            lastUpdated: '2024-03-10',
            progress: 20,
            cover: '/img/avatars/thumb-3.jpg',
            genre: '科幻',
            summary: '人类与AI的终极对决',
            protagonist: '张军',
            setting: '2150年地球',
            targetAudience: '硬科幻读者'
        },
        {
            id: '4',
            title: '龙与魔法师',
            wordCount: 230000,
            latestChapter: '第二十章：龙之谷',
            status: 'ongoing',
            lastUpdated: '2024-03-18',
            progress: 60,
            cover: '/img/avatars/thumb-4.jpg',
            genre: '西方奇幻',
            summary: '一位年轻魔法师与龙族的友谊与冒险',
            protagonist: '艾德里安',
            setting: '龙之大陆',
            targetAudience: '青少年读者'
        },
        {
            id: '5',
            title: '都市猎人',
            wordCount: 180000,
            latestChapter: '第十二章：暗夜追踪',
            status: 'ongoing',
            lastUpdated: '2024-03-22',
            progress: 35,
            cover: '/img/avatars/thumb-5.jpg',
            genre: '都市',
            summary: '都市中的超能力者与神秘组织的对抗',
            protagonist: '李明',
            setting: '现代都市',
            targetAudience: '都市小说爱好者'
        },
        {
            id: '6',
            title: '仙侠奇缘',
            wordCount: 420000,
            latestChapter: '第三十章：飞升之路',
            status: 'completed',
            lastUpdated: '2024-02-28',
            progress: 100,
            cover: '/img/avatars/thumb-6.jpg',
            genre: '仙侠',
            summary: '凡人修仙，逆天改命',
            protagonist: '叶凡',
            setting: '修仙世界',
            targetAudience: '仙侠小说爱好者'
        },
        {
            id: '7',
            title: '科技霸权',
            wordCount: 90000,
            latestChapter: '第八章：人工智能',
            status: 'ongoing',
            lastUpdated: '2024-03-25',
            progress: 30,
            cover: '/img/avatars/thumb-7.jpg',
            genre: '科技',
            summary: '科技巨头的崛起与争霸',
            protagonist: '马克·李',
            setting: '近未来硅谷',
            targetAudience: '商业小说爱好者'
        },
        {
            id: '8',
            title: '末日求生',
            wordCount: 0,
            latestChapter: '大纲规划中',
            status: 'planned',
            lastUpdated: '2024-03-26',
            progress: 0,
            cover: '/img/avatars/thumb-8.jpg',
            genre: '末世',
            summary: '病毒爆发后的末日生存',
            protagonist: '待定',
            setting: '病毒肆虐后的世界',
            targetAudience: '末世小说爱好者'
        }
    ]
}

mock.onGet('/api/kanban').reply(() => {
    return [200, writingDashboardData]
})