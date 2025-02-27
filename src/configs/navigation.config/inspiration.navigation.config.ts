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
        icon: 'ai',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'inspiration.chat',
                path: `${INSPIRATION_PREFIX_PATH}/chat`,
                title: '对话Deepseek',
                translateKey: 'nav.inspiration.chat',
                icon: 'aiChat',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'inspiration.image',
                path: `${INSPIRATION_PREFIX_PATH}/image`,
                title: '生成图片',
                translateKey: 'nav.inspiration.image',
                icon: 'aiImage',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            }
        ]
    }
]

export default inspirationNavigationConfig