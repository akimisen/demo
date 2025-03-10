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
        key: 'novel.list.detail',
        path: `${NOVEL_PREFIX_PATH}/list/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderDetails')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                contained: true,
                title: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeader'
                        ),
                ),
                extraHeader: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeaderExtra'
                        ),
                ),
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'novel.outline',
        path: `${NOVEL_PREFIX_PATH}/list/:id`,
        component: lazy(() => import('@/views/novel/NovelOutline')),
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