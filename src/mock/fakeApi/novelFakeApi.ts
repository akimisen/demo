import { mock } from '../MockAdapter'
// import { uniqueId } from 'lodash'
import wildCardSearch from '@/utils/wildCardSearch'
import sortBy, { Primer } from '@/utils/sortBy'
import paginate from '@/utils/paginate'
import { novelListData } from '../data/novelData'

mock.onGet(`/api/novels`).reply((config) => {
    const { pageIndex, pageSize, sort, query } = config.params || {}

    const { order, key } = sort

    const novels = novelListData as any[]

    const sanitizeorders = novels.filter((elm) => typeof elm !== 'function')
    let data = sanitizeorders
    let total = novels.length

    if (key && order) {
        if (key === 'genre'||key === 'status') {
            data.sort(
                sortBy(key, order === 'desc', (a) =>
                    (a as string).toUpperCase(),
                ),
            )
        } else {
            data.sort(sortBy(key, order === 'desc', parseInt as Primer))
        }
    }

    if (query) {
        data = wildCardSearch(data, query)
        total = data.length
    }

    data = paginate(data, pageSize, pageIndex)

    const responseData = {
        list: data,
        total: total,
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([200, responseData])
        }, 500)
    })
})


// // 创建小说
// mock.onPost(`/novels`).reply((config) => {
//     const newNovel = JSON.parse(config.data)
//     newNovel.id = uniqueId('novel_')
//     newNovel.lastUpdated = new Date().toISOString()
//     newNovel.last_edited_at = newNovel.lastUpdated
    
//     novels.push(newNovel)
//     return [201, newNovel]
// })

// // 更新小说
// mock.onPut(/\/api\/novels\/novel_\d+/).reply((config) => {
//     const id = config.url?.split('/').pop()
//     const novelIndex = novels.findIndex(n => n.id === id)
    
//     if (novelIndex >= 0) {
//         const updatedNovel = JSON.parse(config.data)
//         updatedNovel.lastUpdated = new Date().toISOString()
//         updatedNovel.last_edited_at = updatedNovel.lastUpdated
        
//         novels[novelIndex] = { ...novels[novelIndex], ...updatedNovel }
//         return [200, novels[novelIndex]]
//     }
//     return [404, { message: '小说不存在' }]
// })

// // 删除小说
// mock.onDelete(/\/api\/novels\/novel_\d+/).reply((config) => {
//     const id = config.url?.split('/').pop()
//     const novelIndex = novels.findIndex(n => n.id === id)
    
//     if (novelIndex >= 0) {
//         novels.splice(novelIndex, 1)
//         return [200, { success: true }]
//     }
//     return [404, { message: '小说不存在' }]
// })

// // 获取小说章节列表
// mock.onGet(/\/api\/novels\/novel_\d+\/chapters/).reply((config) => {
//     const novelId = config.url?.split('/')[3]
//     const novelChapters = chapters[novelId as keyof typeof chapters] || []
//     return [200, novelChapters]
// })

// // 获取单个章节详情
// mock.onGet(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+/).reply((config) => {
//     const urlParts = config.url?.split('/')
//     const novelId = urlParts?.[3]
//     const chapterId = urlParts?.[5]
    
//     const novelChapters = chapters[novelId as keyof typeof chapters] || []
//     const chapter = novelChapters.find(c => c.id === chapterId)
    
//     if (chapter) {
//         return [200, chapter]
//     }
//     return [404, { message: '章节不存在' }]
// })

// // 创建章节
// mock.onPost(/\/api\/novels\/novel_\d+\/chapters/).reply((config) => {
//     const novelId = config.url?.split('/')[3]
//     const newChapter = JSON.parse(config.data)
    
//     newChapter.id = uniqueId('chapter_')
//     newChapter.novelId = novelId
//     newChapter.lastUpdated = new Date().toISOString()
    
//     if (!chapters[novelId as keyof typeof chapters]) {
//         (chapters as any)[novelId] = []
//     }
    
//     (chapters as any)[novelId].push(newChapter)
//     return [201, newChapter]
// })

// // 更新章节
// mock.onPut(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+/).reply((config) => {
//     const urlParts = config.url?.split('/')
//     const novelId = urlParts?.[3]
//     const chapterId = urlParts?.[5]
    
//     const novelChapters = chapters[novelId as keyof typeof chapters] || []
//     const chapterIndex = novelChapters.findIndex(c => c.id === chapterId)
    
//     if (chapterIndex >= 0) {
//         const updatedChapter = JSON.parse(config.data)
//         updatedChapter.lastUpdated = new Date().toISOString()
        
//         novelChapters[chapterIndex] = { ...novelChapters[chapterIndex], ...updatedChapter }
//         return [200, novelChapters[chapterIndex]]
//     }
//     return [404, { message: '章节不存在' }]
// })

// // 删除章节
// mock.onDelete(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+/).reply((config) => {
//     const urlParts = config.url?.split('/')
//     const novelId = urlParts?.[3]
//     const chapterId = urlParts?.[5]
    
//     const novelChapters = chapters[novelId as keyof typeof chapters] || []
//     const chapterIndex = novelChapters.findIndex(c => c.id === chapterId)
    
//     if (chapterIndex >= 0) {
//         novelChapters.splice(chapterIndex, 1)
//         return [200, { success: true }]
//     }
//     return [404, { message: '章节不存在' }]
// })

// // 获取章节内容
// mock.onGet(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+\/content/).reply((config) => {
//     const chapterId = config.url?.split('/')[5]
//     const content = chapterContents[chapterId as keyof typeof chapterContents]
    
//     if (content) {
//         return [200, { content }]
//     }
//     return [404, { message: '章节内容不存在' }]
// })

// // 更新章节内容
// mock.onPut(/\/api\/novels\/novel_\d+\/chapters\/chapter_\d+\/content/).reply((config) => {
//     const chapterId = config.url?.split('/')[5]
//     const { content } = JSON.parse(config.data)
    
//     if (chapterContents[chapterId as keyof typeof chapterContents]) {
//         (chapterContents as any)[chapterId] = content
//         return [200, { success: true }]
//     }
//     return [404, { message: '章节内容不存在' }]
// })

// // 获取小说大纲
// mock.onGet(/\/api\/novels\/novel_\d+\/outline/).reply((config) => {
//     const novelId = config.url?.split('/')[3]
//     const outline = outlines[novelId as keyof typeof outlines]
    
//     if (outline) {
//         return [200, outline]
//     }
//     return [404, { message: '大纲不存在' }]
// })

// // 更新大纲
// mock.onPut(/\/api\/novels\/novel_\d+\/outline/).reply((config) => {
//     const novelId = config.url?.split('/')[3]
//     const updatedOutline = JSON.parse(config.data)
    
//     if (outlines[novelId as keyof typeof outlines]) {
//         (outlines as any)[novelId] = { ...outlines[novelId as keyof typeof outlines], ...updatedOutline }
//         return [200, (outlines as any)[novelId]]
//     }
//     return [404, { message: '大纲不存在' }]
// })