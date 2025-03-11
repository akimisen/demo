import { lazy } from 'react'
import { NOVEL_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const novelRoute: Routes = [
    {
        key: 'novel.list',
        path: `${NOVEL_PREFIX_PATH}/list`,
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.outline.default',
        path: `${NOVEL_PREFIX_PATH}/outline`,
        component: lazy(() => import('@/views/novel/NovelOutline')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.outline.id',
        path: `${NOVEL_PREFIX_PATH}/outline/:id`,
        component: lazy(() => import('@/views/novel/NovelOutline')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.editor.default',
        path: `${NOVEL_PREFIX_PATH}/editor`,
        component: lazy(() => import('@/views/novel/ChapterEdit/ChapterEdit')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.editor.id',
        path: `${NOVEL_PREFIX_PATH}/editor/:id`,
        component: lazy(() => import('@/views/novel/ChapterEdit/ChapterEdit')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
]
export default novelRoute 