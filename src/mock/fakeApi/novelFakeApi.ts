import { mock } from '../MockAdapter'
import { uniqueId } from 'lodash'
import wildCardSearch from '@/utils/wildCardSearch'
import sortBy from '@/utils/sortBy'
import paginate from '@/utils/paginate'
import { novelListData, chapters } from '../data/novelData'

mock.onGet(`/api/novels`).reply((config) => {
    const { pageIndex, pageSize, sort, query } = config.params || {}

    const { order, key } = sort

    const novels = novelListData as any[]

    const sanitizeorders = novels.filter((elm) => typeof elm !== 'function')
    let data = sanitizeorders
    let total = data.length

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

// 获取单个小说
mock.onGet(/\/api\/novels\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const novel = novelListData.find(n => n.id === id)
    return novel ? [200, novel] : [404, { message: '小说不存在-获取单个小说' }]
})

// 创建小说
mock.onPost('/api/novels').reply((config) => {
    const newNovel = {
        ...JSON.parse(config.data),
        id: uniqueId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    novelListData.push(newNovel)
    return [201, newNovel]
})

// 更新小说
mock.onPut(/\/api\/novels\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const index = novelListData.findIndex(n => n.id === id)
    if (index === -1) return [404, { message: '小说不存在-更新' }]
    
    const updatedNovel = {
        ...novelListData[index],
        ...JSON.parse(config.data),
        updatedAt: new Date().toISOString()
    }
    novelListData[index] = updatedNovel
    return [200, updatedNovel]
})

// 删除小说
mock.onDelete(/\/api\/novels\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const index = novelListData.findIndex(n => n.id === id)
    if (index === -1) return [404, { message: '小说不存在' }]
    
    novelListData.splice(index, 1)
    return [204]
})

// 获取章节列表
mock.onGet(/\/api\/novels\/\w+\/chapters/).reply((config) => {
    const novelId = config.url?.split('/')[2]
    // 添加调试语句
    console.log('Parsed novelId:', novelId);
    const { pageIndex, pageSize, sort, query, status } = config.params || {}

    if (!chapters[novelId]) {
        // 如果没有数据，生成一些测试数据
        chapters[novelId] = Array(10).fill(null).map((_, index) => ({
            id: `${novelId}-chapter-${index + 1}`,
            novel_id: novelId,
            title: `第${index + 1}章`,
            order: index + 1,
            summary: `这是第${index + 1}章的摘要`,
            word_count: Math.floor(Math.random() * 5000) + 1000,
            characters: [],
            locations: [],
            status: ['draft', 'completed', 'published'][Math.floor(Math.random() * 3)],
            is_published: Math.random() > 0.5,
            plotline: null,
            hook: null,
            value: null,
            tags: [],
            notes: null,
            revision_history: []
        }))
    }

    let data = [...chapters[novelId]]
    let total = data.length

    // 排序
    if (sort?.key && sort?.order) {
        data.sort(sortBy(sort.key, sort.order === 'desc'))
    }

    // 搜索
    if (query) {
        data = wildCardSearch(data, query)
        total = data.length
    }

    // 分页
    data = paginate(data, pageSize, pageIndex)

    return [200, { list: data, total }]
})

// 获取单个章节
mock.onGet(/\/api\/novels\/\w+\/chapters\/\w+/).reply((config) => {
    const [novelId, chapterId] = config.url?.split('/').slice(3) || []
    const chapterList = chapters[novelId] || []
    const chapter = chapterList.find(c => c.id === chapterId)
    return chapter ? [200, chapter] : [404, { message: '章节不存在' }]
})

// 创建章节
mock.onPost(/\/api\/novels\/\w+\/chapters/).reply((config) => {
    const novelId = config.url?.split('/')[3]
    const newChapter = {
        ...JSON.parse(config.data),
        id: uniqueId('chapter-'),
        novel_id: novelId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    
    if (!chapters[novelId]) {
        chapters[novelId] = []
    }
    chapters[novelId].push(newChapter)
    return [201, newChapter]
})

// 更新章节
mock.onPut(/\/api\/novels\/\w+\/chapters\/\w+/).reply((config) => {
    const [novelId, chapterId] = config.url?.split('/').slice(3) || []
    const chapterList = chapters[novelId] || []
    const index = chapterList.findIndex(c => c.id === chapterId)
    
    if (index === -1) return [404, { message: '章节不存在' }]
    
    const updatedChapter = {
        ...chapterList[index],
        ...JSON.parse(config.data),
        updatedAt: new Date().toISOString()
    }
    chapterList[index] = updatedChapter
    return [200, updatedChapter]
})

// 删除章节
mock.onDelete(/\/api\/novels\/\w+\/chapters\/\w+/).reply((config) => {
    const [novelId, chapterId] = config.url?.split('/').slice(3) || []
    const chapterList = chapters[novelId] || []
    const index = chapterList.findIndex(c => c.id === chapterId)
    
    if (index === -1) return [404, { message: '章节不存在' }]
    
    chapterList.splice(index, 1)
    return [204]
})