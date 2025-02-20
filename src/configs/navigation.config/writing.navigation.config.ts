import { WRITING_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const writingNavigationConfig: NavigationTree[] = [
    {
        key: 'writing',
        path: '',
        title: '写作助手',
        translateKey: 'nav.writing.writing',
        icon: 'writing',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'writing.outline',
                path: '',
                title: '大纲',
                translateKey: 'nav.writing.outline',
                icon: 'outline',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.outline.characters',
                        path: `${WRITING_PREFIX_PATH}/outline/characters`,
                        title: '人物',
                        translateKey: 'nav.writing.outlineCharacters',
                        icon: 'characters',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    // 类似地添加地点、情节等子菜单...
                    {
                        key: 'writing.outline.board',
                        path: `${WRITING_PREFIX_PATH}/outline/board`,
                        title: '故事板',
                        translateKey: 'nav.writing.outlineBoard',
                        icon: 'board',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    // 添加时间线、表格、列表视图...
                ]
            },
            {
                key: 'writing.content',
                path: '',
                title: '正文',
                translateKey: 'nav.writing.content',
                icon: 'content',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.content.editor',
                        path: `${WRITING_PREFIX_PATH}/content/editor`,
                        title: '编辑器',
                        translateKey: 'nav.writing.contentEditor',
                        icon: 'editor',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.content.ai',
                        path: `${WRITING_PREFIX_PATH}/content/ai`,
                        title: 'AI辅助',
                        translateKey: 'nav.writing.contentAI',
                        icon: 'ai',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    }
                ]
            },
            {
                key: 'writing.inspiration',
                path: '',
                title: '灵感',
                translateKey: 'nav.writing.inspiration', 
                icon: 'inspiration',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'writing.inspiration.chat',
                        path: `${WRITING_PREFIX_PATH}/inspiration/chat`,
                        title: '对话启发',
                        translateKey: 'nav.writing.inspirationChat',
                        icon: 'chat',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'writing.inspiration.image',
                        path: `${WRITING_PREFIX_PATH}/inspiration/image`,
                        title: '设定图',
                        translateKey: 'nav.writing.inspirationImage',
                        icon: 'image',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    }
                ]
            }
        ],
    },
]

export default writingNavigationConfig 