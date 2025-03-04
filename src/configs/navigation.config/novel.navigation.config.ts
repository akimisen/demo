import { NOVEL_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
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
                key: 'novel.overview',
                path: '',
                title: '作品一览',
                translateKey: 'nav.novel.overview',
                icon: 'novelOverview',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'novel.outline',
                path: '',
                title: '编写大纲',
                translateKey: 'nav.novel.outline',
                icon: 'novelOutline',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'novel.content',
                path: '',
                title: '开始码字',
                translateKey: 'nav.novel.content',
                icon: 'novelContent',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [
                    // {
                    //     key: 'novel.content.editor',
                    //     path: `${NOVEL_PREFIX_PATH}/content/editor`,
                    //     title: '编辑器',
                    //     translateKey: 'nav.novel.contentEditor',
                    //     icon: 'editor',
                    //     type: NAV_ITEM_TYPE_ITEM,
                    //     authority: [ADMIN, USER],
                    //     subMenu: [],
                    // },
                    // {
                    //     key: 'novel.content.ai',
                    //     path: `${NOVEL_PREFIX_PATH}/content/ai`,
                    //     title: 'AI扩写',
                    //     translateKey: 'nav.novel.contentAI',
                    //     icon: 'ai',
                    //     type: NAV_ITEM_TYPE_ITEM,
                    //     authority: [ADMIN, USER],
                    //     subMenu: [],
                    // }
                ]
            },
        ],
    },
]

export default novelNavigationConfig 