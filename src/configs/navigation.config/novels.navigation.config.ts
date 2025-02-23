import { NOVELS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const novelsNavigationConfig: NavigationTree[] = [
    {
        key: 'novels',
        path: '',
        title: '作品管理',
        translateKey: 'nav.novels.novels',
        icon: 'novels',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'novels.outline',
                path: '',
                title: '大纲',
                translateKey: 'nav.novels.outline',
                icon: 'outline',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'novels.content',
                path: '',
                title: '码字',
                translateKey: 'nav.novels.content',
                icon: 'content',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'novels.content.editor',
                        path: `${NOVELS_PREFIX_PATH}/content/editor`,
                        title: '编辑器',
                        translateKey: 'nav.novels.contentEditor',
                        icon: 'editor',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'novels.content.ai',
                        path: `${NOVELS_PREFIX_PATH}/content/ai`,
                        title: 'AI扩写',
                        translateKey: 'nav.novels.contentAI',
                        icon: 'ai',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    }
                ]
            },
        ],
    },
]

export default novelsNavigationConfig 