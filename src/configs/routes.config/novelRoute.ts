import { lazy } from 'react'
import { NOVEL_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const novelRoute: Routes = [
    {
        key: 'novel.list',
        path: `${NOVEL_PREFIX_PATH}`,
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.outline',
        path: `${NOVEL_PREFIX_PATH}/:novelId`,
        // component: lazy(() => import('@/views/novel/NovelDetail')), // 需要新建
        component: lazy(() => import('@/views/novel/NovelList')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
    {
        key: 'novel.editor',
        path: `${NOVEL_PREFIX_PATH}/:novelId/editor`,
        component: lazy(() => import('@/views/novel/ChapterEdit/ChapterEdit')),
        authority: [ADMIN, USER],
        meta: { pageContainerType: 'contained' }
    },
]
export default novelRoute 