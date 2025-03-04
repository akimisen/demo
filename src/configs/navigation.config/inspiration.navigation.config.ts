import { INSPIRATION_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const inspirationNavigationConfig: NavigationTree[] = [
    {
        key: 'inspiration',
        path: '',
        title: '灵感源泉',
        translateKey: 'nav.inspiration.caption',
        // icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'inspiration.chat',
                path: `${INSPIRATION_PREFIX_PATH}/chat`,
                title: '对话Deepseek',
                translateKey: 'nav.inspiration.chat',
                icon: 'inspirationChat',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'inspiration.image',
                path: `${INSPIRATION_PREFIX_PATH}/image`,
                title: '生成图片',
                translateKey: 'nav.inspiration.image',
                icon: 'inspirationImage',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'inspiration.summary',
                path: `${INSPIRATION_PREFIX_PATH}/summary`,
                title: 'AI拆书',
                translateKey: 'nav.inspiration.summary',
                icon: 'inspirationSummary',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
        ],
    },
]

export default inspirationNavigationConfig