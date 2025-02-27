import { mock } from '../MockAdapter'
import { uniqueId } from 'lodash'

// 小说列表数据
const novels = [
    {
        id: uniqueId('novel_'),
        title: "星辰之主",
        author: "user123",
        summary: "一个平凡少年意外获得星辰之力...",
        wordCount: 350000,
        chapterCount: 12,
        status: 'ongoing',
        lastUpdated: "2023-06-15T10:30:00Z",
        progress: 35,
        cover: "/img/covers/novel-1.jpg",
        genre: "玄幻",
        protagonist: "林星辰",
        setting: "现代架空",
        targetAudience: "青少年",
        // 自定义元数据字段
        customFields: {
            mainTheme: "成长",
            inspirationSource: "希腊神话",
            targetLength: "50万字"
        }
    },
    {
        id: uniqueId('novel_'),
        title: "魔法编年史",
        author: "user123",
        summary: "魔法世界的秘密历史...",
        wordCount: 520000,
        chapterCount: 24,
        status: 'ongoing',
        lastUpdated: "2023-07-20T14:15:00Z",
        progress: 68,
        cover: "/img/covers/novel-2.jpg",
        genre: "奇幻",
        protagonist: "艾伦·沃德",
        setting: "中世纪魔法世界",
        targetAudience: "成人",
        // 自定义元数据字段
        customFields: {
            magicSystem: "元素魔法",
            worldBuilding: "多元宇宙",
            politicalSystem: "魔法议会制"
        }
    }
]

// 章节数据
const chapters = {
    'novel_1': [
        {
            id: uniqueId('chapter_'),
            novelId: 'novel_1',
            title: "第一章：命运的转折",
            order: 1,
            wordCount: 5000,
            status: 'completed',
            contentPath: "novels/novel_1/chapters/chapter_1.md",
            lastUpdated: "2023-06-10T08:15:00Z",
            // 章节自定义字段
            customFields: {
                pov: "林星辰",
                location: "青石镇",
                timeframe: "故事开始",
                goals: "介绍主角背景，设置冲突"
            }
        },
        {
            id: uniqueId('chapter_'),
            novelId: 'novel_1',
            title: "第二章：星辰觉醒",
            order: 2,
            wordCount: 6200,
            status: 'completed',
            contentPath: "novels/novel_1/chapters/chapter_2.md",
            lastUpdated: "2023-06-12T09:30:00Z",
            customFields: {
                pov: "林星辰",
                location: "星辰山",
                timeframe: "一周后",
                goals: "主角获得能力，遇到导师"
            }
        }
    ],
    'novel_2': [
        {
            id: uniqueId('chapter_'),
            novelId: 'novel_2',
            title: "第一章：魔法议会",
            order: 1,
            wordCount: 4800,
            status: 'completed',
            contentPath: "novels/novel_2/chapters/chapter_1.md",
            lastUpdated: "2023-07-15T11:20:00Z",
            customFields: {
                pov: "艾伦·沃德",
                location: "阿卡迪亚城",
                timeframe: "冬至日",
                goals: "介绍魔法世界体系，设置主要冲突"
            }
        }
    ]
}

// 章节内容（模拟文件内容）
const chapterContents = {
    'chapter_1': `# 第一章：命运的转折\n\n林星辰从未想过自己的人生会在这个平凡的夜晚发生如此巨大的转变。\n\n青石镇依旧如往常一样宁静，月光洒在石板路上，勾勒出一条银色的小径。他独自走在回家的路上，脑海中回想着今天在学校发生的事情...\n\n（此处省略约5000字的正文内容）`,
    'chapter_2': `# 第二章：星辰觉醒\n\n林星辰站在星辰山顶，仰望着满天繁星。那颗最亮的北极星似乎在对他诉说着什么...\n\n（此处省略约6200字的正文内容）`,
    'chapter_3': `# 第一章：魔法议会\n\n阿卡迪亚城的魔法议会大厅金碧辉煌，五十位议员围坐在半圆形的高台上，艾伦·沃德站在中央，感受着所有人的目光...\n\n（此处省略约4800字的正文内容）`
}

// 大纲数据（包含自定义结构）
const outlines = {
    'novel_1': {
        id: uniqueId('outline_'),
        novelId: 'novel_1',
        title: "星辰之主大纲",
        lastUpdated: "2023-06-08T14:30:00Z",
        // 基本大纲结构
        structure: {
            premise: "一个普通高中生获得操控星辰之力的能力，成为星辰守护者。",
            setting: "现代架空世界，存在隐藏的超能力者。",
            mainCharacters: [
                { name: "林星辰", role: "主角", description: "17岁高中生，性格坚韧" },
                { name: "赵月", role: "女主角", description: "同班同学，隐藏身份是月之守护者" }
            ],
            plotPoints: [
                { title: "觉醒", description: "主角在星辰山发现自己的能力" },
                { title: "训练", description: "遇到神秘老者，学习控制能力" },
                { title: "初战", description: "与第一个敌人交手，险胜" }
            ]
        },
        // 自定义大纲元素（用户可自由添加）
        customSections: [
            {
                title: "魔法体系",
                content: "星辰之力分为五个等级，每个等级有不同的能力表现...",
                type: "text"
            },
            {
                title: "世界地图",
                content: "https://example.com/maps/star-world.jpg",
                type: "image"
            },
            {
                title: "能力进阶路线",
                content: [
                    { level: 1, name: "星光感知", description: "能感知星辰能量" },
                    { level: 2, name: "星光凝聚", description: "能将星光凝聚成实体" }
                ],
                type: "list"
            }
        ]
    },
    'novel_2': {
        id: uniqueId('outline_'),
        novelId: 'novel_2',
        title: "魔法编年史大纲",
        lastUpdated: "2023-07-10T16:45:00Z",
        structure: {
            premise: "记录一个隐秘的魔法世界历史变迁。",
            setting: "中世纪风格的魔法世界，有多个魔法派系。",
            mainCharacters: [
                { name: "艾伦·沃德", role: "主角", description: "魔法史学者" },
                { name: "莉娜·火焰", role: "女主角", description: "火系魔法师" }
            ],
            plotPoints: [
                { title: "古籍发现", description: "主角发现记载失落魔法的古籍" },
                { title: "势力冲突", description: "卷入魔法议会与黑暗教团的冲突" }
            ]
        },
        customSections: [
            {
                title: "魔法派系",
                content: "元素派、召唤派、符文派、灵能派、混沌派",
                type: "text"
            },
            {
                title: "历史时间线",
                content: [
                    { year: "1200", event: "大魔法战争爆发" },
                    { year: "1250", event: "魔法议会成立" }
                ],
                type: "timeline"
            }
        ]
    }
}

// API 端点实现
// 获取小说列表
mock.onGet('/api/novels').reply(200, novels)

// 获取单个小说详情
mock.onGet(/\/api\/novels\/novel_\d+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const novel = novels.find(n => n.id === id)
    if (novel) {
        return [200, novel]
    }
    return [404, { message: '小说不存在' }]
})

// 获取小说章节列表
mock.onGet(/\/api\/novels\/novel_\d+\/chapters/).reply((config) => {
    const novelId = config.url?.split('/')[3]
    const novelChapters = chapters[novelId as keyof typeof chapters] || []
    return [200, novelChapters]
})

// 获取单个章节详情
mock.onGet(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+/).reply((config) => {
    const urlParts = config.url?.split('/')
    const novelId = urlParts?.[3]
    const chapterId = urlParts?.[5]
    
    const novelChapters = chapters[novelId as keyof typeof chapters] || []
    const chapter = novelChapters.find(c => c.id === chapterId)
    
    if (chapter) {
        return [200, chapter]
    }
    return [404, { message: '章节不存在' }]
})

// 获取章节内容
mock.onGet(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+\/content/).reply((config) => {
    const chapterId = config.url?.split('/')[5]
    const content = chapterContents[chapterId as keyof typeof chapterContents]
    
    if (content) {
        return [200, { content }]
    }
    return [404, { message: '章节内容不存在' }]
})

// 获取小说大纲
mock.onGet(/\/api\/novels\/novel_\d+\/outline/).reply((config) => {
    const novelId = config.url?.split('/')[3]
    const outline = outlines[novelId as keyof typeof outlines]
    
    if (outline) {
        return [200, outline]
    }
    return [404, { message: '大纲不存在' }]
})

// 创建/更新小说
mock.onPost('/api/novels').reply((config) => {
    const newNovel = JSON.parse(config.data)
    newNovel.id = uniqueId('novel_')
    novels.push(newNovel)
    return [201, newNovel]
})

mock.onPut(/\/api\/novels\/novel_\d+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const novelIndex = novels.findIndex(n => n.id === id)
    
    if (novelIndex >= 0) {
        const updatedNovel = JSON.parse(config.data)
        novels[novelIndex] = { ...novels[novelIndex], ...updatedNovel }
        return [200, novels[novelIndex]]
    }
    return [404, { message: '小说不存在' }]
})

// 创建/更新章节
mock.onPost(/\/api\/novels\/novel_\d+\/chapters/).reply((config) => {
    const novelId = config.url?.split('/')[3]
    const newChapter = JSON.parse(config.data)
    newChapter.id = uniqueId('chapter_')
    newChapter.novelId = novelId
    
    if (!chapters[novelId as keyof typeof chapters]) {
        (chapters as any)[novelId] = []
    }
    
    (chapters as any)[novelId].push(newChapter)
    return [201, newChapter]
})

mock.onPut(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+/).reply((config) => {
    const urlParts = config.url?.split('/')
    const novelId = urlParts?.[3]
    const chapterId = urlParts?.[5]
    
    const novelChapters = chapters[novelId as keyof typeof chapters] || []
    const chapterIndex = novelChapters.findIndex(c => c.id === chapterId)
    
    if (chapterIndex >= 0) {
        const updatedChapter = JSON.parse(config.data)
        novelChapters[chapterIndex] = { ...novelChapters[chapterIndex], ...updatedChapter }
        return [200, novelChapters[chapterIndex]]
    }
    return [404, { message: '章节不存在' }]
})

// 更新章节内容
mock.onPut(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+\/content/).reply((config) => {
    const chapterId = config.url?.split('/')[5]
    const { content } = JSON.parse(config.data)
    
    if (chapterContents[chapterId as keyof typeof chapterContents]) {
        (chapterContents as any)[chapterId] = content
        return [200, { success: true }]
    }
    return [404, { message: '章节内容不存在' }]
})

// 更新大纲
mock.onPut(/\/api\/novels\/novel_\d+\/outline/).reply((config) => {
    const novelId = config.url?.split('/')[3]
    const updatedOutline = JSON.parse(config.data)
    
    if (outlines[novelId as keyof typeof outlines]) {
        (outlines as any)[novelId] = { ...outlines[novelId as keyof typeof outlines], ...updatedOutline }
        return [200, (outlines as any)[novelId]]
    }
    return [404, { message: '大纲不存在' }]
}) 