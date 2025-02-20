import { lazy } from 'react'
import { WRITING_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const writingRoute: Routes = [
    {
        key: 'writing.inspiration.chat',
        path: `${WRITING_PREFIX_PATH}/inspiration/chat`,
        component: lazy(() => import('@/views/writing/inspiration/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'writing.outline.ai.image',
        path: `${WRITING_PREFIX_PATH}/inspiration/image`,
        component: lazy(() => import('@/views/writing/inspiration/Image')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    // 添加其他路由...
]

export default writingRoute 