// docker执行本地脚本
// docker exec -i mongodb mongosh --eval "$(cat ./backend/docker/mongodb/init-mongo.js)"

// 首先清空数据库，以便重复执行
db = db.getSiblingDB('kuku');

// 删除已存在的集合
db.novels.drop();
db.chapters.drop();

// 创建collections
db.createCollection("novels");
db.createCollection("chapters");

// 插入小说数据
db.novels.insertMany([
    {
        _id: ObjectId(),
        title: "星辰之主",
        author: "testuser",
        user_id: "testuser_id",
        abstract: "一个平凡少年意外获得星辰之力...",
        genre: "玄幻",
        status: "ongoing",
        word_count: 350000,
        progress: 35,
        protagonist: "林星辰",
        setting: "现代架空",
        target_audience: "青少年",
        tags: ["玄幻", "成长", "超能力"],
        chapter_count: 12,
        cover_image: "/img/covers/novel-1.jpg",
        custom_fields: {
            mainTheme: "成长",
            inspirationSource: "希腊神话",
            targetLength: "50万字"
        },
        created_at: new Date("2023-06-15T10:30:00Z"),
        updated_at: new Date("2023-06-15T10:30:00Z")
    },
    {
        _id: ObjectId(),
        title: "魔法编年史",
        author: "testuser",
        user_id: "testuser_id",
        abstract: "魔法世界的秘密历史...",
        genre: "奇幻",
        status: "ongoing",
        word_count: 520000,
        progress: 68,
        protagonist: "艾伦·沃德",
        setting: "中世纪魔法世界",
        target_audience: "成人",
        tags: ["奇幻", "魔法", "历史"],
        chapter_count: 24,
        cover_image: "/img/covers/novel-2.jpg",
        custom_fields: {
            magicSystem: "元素魔法",
            worldBuilding: "多元宇宙",
            politicalSystem: "魔法议会制"
        },
        created_at: new Date("2023-07-20T14:15:00Z"),
        updated_at: new Date("2023-07-20T14:15:00Z")
    },
    {
        // 添加暂无章节的小说
        _id: ObjectId(),
        title: "未开始创作的小说",
        author: "新作者",
        user_id: "xxxuser_id",
        abstract: "这是一部尚未开始创作的小说...",
        genre: "科幻",
        status: "planned",
        word_count: 0,
        progress: 0,
        protagonist: "未知主角",
        setting: "未来世界",
        target_audience: "青少年",
        tags: ["科幻", "未来", "太空"],
        chapter_count: 0,
        cover_image: "/img/covers/novel-new.jpg",
        custom_fields: {
            plannedChapters: 30,
            estimatedCompletion: "2024年底"
        },
        created_at: new Date(),
        updated_at: new Date()
    }
]);

// 保存第一本小说的ID，用于创建章节
const novel1 = db.novels.findOne({title: "星辰之主"});
const novel1Id = novel1._id.toString();

// 插入基础章节数据
const baseChapters = [
    {
        _id: ObjectId(),
        novel_id: novel1Id,
        title: "第一章：命运的转折",
        order: 1,
        content: "这是第一章的具体内容...",
        summary: "主角在一次意外中获得星辰之力",
        word_count: 5000,
        characters: [],
        locations: [],
        plotlines: ["plot_1"],
        hook: "星辰之力觉醒",
        value: 5,
        tags: ["开篇", "觉醒", "机缘"],
        notes: "重点描写觉醒时的异象",
        status: "completed",
        is_published: true,
        version: 1,
        revision_history: [],
        created_at: new Date("2023-06-15T10:30:00Z"),
        updated_at: new Date("2023-06-15T10:30:00Z")
    },
    {
        _id: ObjectId(),
        novel_id: novel1Id,
        title: "第二章：初试身手",
        order: 2,
        content: "这是第二章的具体内容...",
        summary: "主角首次尝试使用星辰之力",
        word_count: 6200,
        characters: [],
        locations: [],
        plotlines: ["plot_1"],
        hook: "能力初显",
        value: 3,
        tags: ["修炼", "战斗", "成长"],
        notes: "注意能力使用的限制设定",
        status: "draft",
        is_published: false,
        version: 1,
        revision_history: [],
        created_at: new Date("2023-06-15T11:30:00Z"),
        updated_at: new Date("2023-06-15T11:30:00Z")
    }
];

db.chapters.insertMany(baseChapters);

// 为novel_1添加更多章节（批量添加到100章）
const additionalChapters = [];

// 生成剩余章节（从第3章到第100章）
for (let i = 3; i <= 100; i++) {
    additionalChapters.push({
        _id: ObjectId(),
        novel_id: novel1Id,
        title: `第${i}章：星辰之旅${i}`,
        order: i,
        content: `这是第${i}章的内容，包含了主角的冒险故事...`,
        summary: `第${i}章的摘要：主角面临新的挑战`,
        word_count: 3000 + Math.floor(Math.random() * 2000), // 3000-5000字随机
        characters: ["char_1", "char_2"],
        locations: ["loc_1"],
        plotlines: ["plot_1"],
        hook: `第${i}章的关键点`,
        value: Math.floor(Math.random() * 10), // 0-10随机值
        tags: ["冒险", "战斗", "成长"],
        notes: `第${i}章的写作笔记`,
        status: ["draft", "completed", "published"][Math.floor(Math.random() * 3)], // 随机状态
        is_published: Math.random() > 0.5, // 随机发布状态
        version: 1,
        revision_history: [],
        created_at: new Date(),
        updated_at: new Date()
    });
}

// 批量插入额外章节
if (additionalChapters.length > 0) {
    db.chapters.insertMany(additionalChapters);
}

// 更新小说的章节计数和总字数
const stats = db.chapters.aggregate([
    {$match: {novel_id: novel1Id}},
    {$group: {
        _id: "$novel_id",
        chapter_count: {$sum: 1},
        word_count: {$sum: "$word_count"}
    }}
]).toArray()[0];

if (stats) {
    db.novels.updateOne(
        {_id: ObjectId(novel1Id)},
        {$set: {
            chapter_count: stats.chapter_count,
            word_count: stats.word_count,
            updated_at: new Date()
        }}
    );
}

// 创建索引
db.novels.createIndex({ "user_id": 1 });
db.novels.createIndex({ "title": 1 });
db.chapters.createIndex({ "novel_id": 1, "order": 1 });
db.chapters.createIndex({ "novel_id": 1, "status": 1 });

print("数据库初始化完成！");