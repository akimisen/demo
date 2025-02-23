import { lazy } from 'react'
import { KANBAN_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const kanbanRoute: Routes = [
    {
        key: 'kanban',
        path: KANBAN_PREFIX_PATH,
        component: lazy(() => import('@/views/kanban/Kanban')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default kanbanRoute 