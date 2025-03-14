// import { uniqueId } from 'lodash'
// 小说列表数据
export const novelListData = [
    {
        index: 1, // 查询序号
        id: '67d2c6ae6423eb961251e944',
        title: "星辰之主",
        author: "user123",
        abstract: "一个平凡少年意外获得星辰之力...",
        wordCount: "35.0万",
        chapterCount: 12,
        status: 'ongoing',
        createdAt: new Date("2023-06-15T10:30:00Z").toISOString(),
        updatedAt: new Date("2023-06-15T10:30:00Z").toISOString(),
        progress: 35,
        cover: "/img/covers/novel-1.jpg",
        genre: "玄幻",
        protagonist: "林星辰",
        setting: "现代架空",
        targetAudience: "青少年",
        tags: ["玄幻", "成长", "超能力"],
        customFields: {
            mainTheme: "成长",
            inspirationSource: "希腊神话",
            targetLength: "50万字"
        }
    },
    {
        index: 2,
        id: 'novel_2',
        title: "魔法编年史",
        author: "user123",
        abstract: "魔法世界的秘密历史...",
        wordCount: "52.0万",
        word_count: 520000,
        chapterCount: 24,
        chapter_count: 24,
        status: 'ongoing',
        createdAt: new Date("2023-07-20T14:15:00Z").toISOString(),
        updatedAt: new Date("2025-01-20T14:15:00Z").toISOString(),
        progress: 68,
        cover: "/img/covers/novel-2.jpg",
        cover_image: "/img/covers/novel-2.jpg",
        genre: "奇幻",
        protagonist: "艾伦·沃德",
        setting: "中世纪魔法世界",
        targetAudience: "成人",
        tags: ["奇幻", "魔法", "历史"],
        // 自定义元数据字段
        customFields: {
            magicSystem: "元素魔法",
            worldBuilding: "多元宇宙",
            politicalSystem: "魔法议会制"
        }
    },
    {
        index: 3,
        id: 'novel_3',
        title: "都市猎人",
        author: "writer456",
        abstract: "一个退役特种兵在都市中的传奇故事...",
        wordCount: "18.0万",
        word_count: 180000,
        chapterCount: 8,
        chapter_count: 8,
        status: 'drafting',
        createdAt: new Date("2023-08-05T09:45:00Z").toISOString(),
        updatedAt: new Date("2023-08-05T09:45:00Z").toISOString(),
        progress: 15,
        cover: "/img/covers/novel-3.jpg",
        cover_image: "/img/covers/novel-3.jpg",
        genre: "都市",
        protagonist: "陈风",
        setting: "现代都市",
        targetAudience: "成人",
        tags: ["都市", "悬疑", "动作"],
        customFields: {
            mainConflict: "黑帮势力",
            specialFeature: "军事技能"
        }
    },
    {
        index: 4,
        id: 'novel_4',
        title: "古剑奇谭",
        author: "writer789",
        abstract: "一把古剑引发的江湖传说...",
        wordCount: "42.0万",
        word_count: 420000,
        chapterCount: 18,
        chapter_count: 18,
        status: 'completed',
        createdAt: new Date("2023-05-12T16:30:00Z").toISOString(),
        updatedAt: new Date("2023-05-12T16:30:00Z").toISOString(),
        progress: 100,
        cover: "/img/covers/novel-4.jpg",
        cover_image: "/img/covers/novel-4.jpg",
        genre: "武侠",
        protagonist: "李剑心",
        setting: "古代中国",
        targetAudience: "全年龄",
        tags: ["武侠", "古风", "江湖"],
        customFields: {
            weaponSystem: "古剑谱系",
            martialArts: "七大门派"
        }
    },
    {
        index: 5,
        id: 'novel_5',
        title: "未来战记",
        author: "scifi_author",
        abstract: "2150年，人类与AI的终极对决...",
        wordCount: "28.0万",
        word_count: 280000,
        chapterCount: 14,
        chapter_count: 14,
        status: 'planned',
        createdAt: new Date("2023-09-01T11:20:00Z").toISOString(),
        updatedAt: new Date("2023-09-01T11:20:00Z").toISOString(),
        progress: 5,
        cover: "/img/covers/novel-5.jpg",
        cover_image: "/img/covers/novel-5.jpg",
        genre: "科幻",
        protagonist: "林博士",
        setting: "未来地球",
        targetAudience: "成人",
        tags: ["科幻", "AI", "战争"],
        customFields: {
            technology: "量子计算",
            aiTypes: "多种AI派系"
        }
    },
]

// 章节数据
export const chapters = {
    'novel_1': [
        {
            id: 'chapter_1',
            novel_id: 'novel_1',
            title: "第一章：命运的转折",
            order: 1,
            content: null,
            summary: "主角在一次意外中获得星辰之力",
            word_count: 5000,
            status: "completed",
            is_published: true,
            version: 1,
            
            // 关联数据
            characters: ['char_1', 'char_2'],
            locations: ['loc_1'],
            plotline: 'plot_1',
            
            // 写作辅助数据
            hook: "星辰之力觉醒",
            value: 5,
            tags: ["开篇", "觉醒", "机缘"],
            notes: "重点描写觉醒时的异象",
            
            revision_history: []
        },
        {
            id: 'chapter_2',
            novel_id: 'novel_1', 
            title: "第二章：初试身手",
            order: 2,
            content: null,
            summary: "主角首次尝试使用星辰之力",
            word_count: 6200,
            status: "draft",
            is_published: false,
            version: 1,
            
            characters: ['char_1', 'char_3'],
            locations: ['loc_2'],
            plotline: 'plot_1',
            
            hook: "能力初显",
            value: 3,
            tags: ["修炼", "战斗", "成长"],
            notes: "注意能力使用的限制设定",
            
            revision_history: []
        }
    ],
    'novel_2': [
        {
            id: 'chapter_1',
            novelId: 'novel_2',
            title: "第一章：魔法议会",
            order: 1,
            wordCount: 4800,
            status: 'completed',
            createdAt: "2023-07-15T11:20:00Z"
        }
    ]
}

// 章节内容
export const chapterContents = {
    'chapter_1': "这是第一章的内容...",
    'chapter_2': "这是第二章的内容..."
}

// 大纲数据
export const outlines = {
    'novel_1': {
        id: 'outline_1',
        novelId: 'novel_1',
        title: "星辰之主大纲",
        createdAt: "2023-06-20T14:30:00Z",
        structure: {
            premise: "一个普通高中生获得操控星辰之力的能力，成为星辰守护者。",
            setting: "现代架空世界，存在隐藏的超能力者。"
        }
    },
    'novel_2': {
        id: 'outline_2',
        novelId: 'novel_2',
        title: "魔法编年史大纲",
        createdAt: "2023-07-20T14:15:00Z",
        structure: {
            premise: "记录一个隐秘的魔法世界历史变迁。",
            setting: "中世纪风格的魔法世界，有多个魔法派系。"
        }
    }
}
