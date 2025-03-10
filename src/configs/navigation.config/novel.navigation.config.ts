import { NOVEL_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const novelNavigationConfig: NavigationTree[] = [
    {
        key: 'novel',
        path: '',
        title: '作品管理',
        translateKey: 'nav.novel.caption',
        // icon: 'novel',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'novel.list',
                path: `${NOVEL_PREFIX_PATH}/list`,
                title: '作品一览',
                translateKey: 'nav.novel.list',
                icon: 'novelList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'novel.outline',
                path: `${NOVEL_PREFIX_PATH}/outline`,
                title: '编写大纲',
                translateKey: 'nav.novel.outline',
                icon: 'novelOutline',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'novel.content',
                path: `${NOVEL_PREFIX_PATH}/content`,
                title: '开始码字',
                translateKey: 'nav.novel.content',
                icon: 'novelContent',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: []
            },
        ],
    },
]

export default novelNavigationConfig 