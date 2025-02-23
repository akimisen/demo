import { lazy } from 'react'
import { INSPIRATION_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const inspirationRoute: Routes = [
    {
        key: 'inspiration.chat',
        path: `${INSPIRATION_PREFIX_PATH}/chat`,
        component: lazy(() => import('@/views/inspiration/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'inspiration.image',
        path: `${INSPIRATION_PREFIX_PATH}/image`,
        component: lazy(() => import('@/views/inspiration/Image')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    // 添加其他路由...
]

export default inspirationRoute 