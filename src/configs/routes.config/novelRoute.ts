import { lazy } from 'react'
import { NOVEL_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const novelRoute: Routes = [
    // 小说集合
    {
        key: 'novel.list',
        path: `${NOVEL_PREFIX_PATH}`,
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    // 单个小说主体
    {
        key: 'novel.single',
        path: `${NOVEL_PREFIX_PATH}/:novelId`,
        // component: lazy(() => import('@/views/novel/NovelDetail')), // 需要新建
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    // 大纲系统
    {
        key: 'novel.outline',
        path: `${NOVEL_PREFIX_PATH}/:novelId/outline`,
        component: lazy(() => import('@/views/novel/NovelOutline')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    // 单个小说 - 章节列表
    {
        key: 'novel.chapter.list',
        path: `${NOVEL_PREFIX_PATH}/:id/chapters/list`,
        // component: lazy(() => import('@/views/novel/ChapterEditor')),
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    // 单个小说 - 章节编辑器（带章节ID）
    {
        key: 'novel.chapter.editor.id',
        path: `${NOVEL_PREFIX_PATH}/:id/chapters/:chapterId/editor`,
        // component: lazy(() => import('@/views/novel/ChapterEditor')),
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    // 单个小说 - AI辅助
    {
        key: 'novel.ai',
        path: `${NOVEL_PREFIX_PATH}/:novelId/ai`,
        // component: lazy(() => import('@/views/novel/NovelAI')),
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default novelRoute 