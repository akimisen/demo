import { lazy } from 'react'
import { NOVELS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const novelsRoute: Routes = [
    {
        key: 'novels.outline',
        path: `${NOVELS_PREFIX_PATH}/outline`,
        component: lazy(() => import('@/views/inspiration/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novels.content.editor',
        path: `${NOVELS_PREFIX_PATH}/content/editor`,
        component: lazy(() => import('@/views/inspiration/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novels.content.ai',
        path: `${NOVELS_PREFIX_PATH}/content/ai`,
        component: lazy(() => import('@/views/inspiration/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default novelsRoute 